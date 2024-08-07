import { useState } from 'react'
import toast from 'react-hot-toast';
import {useAuthContext} from '../context/authContext'

function UseSignUp() {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async({fullName,username,password,confirmPassword,gender})=>{
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
        if(!success)return;
        
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/signup",{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error);
            }
            // localstorage
            localStorage.setItem("chat-user",JSON.stringify(data))
            // context
            setAuthUser(data);

            console.log(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    };

    return {loading,signup};
}

export default UseSignUp

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('please fill all the details')
        return false;
    }

    if(password !== confirmPassword){
        toast.error('password does not match')
        return false;
    }
    
    if(password.length<6){
        toast.error('password must be alteast 6 characters')
        return false;
    }

    return true;

}