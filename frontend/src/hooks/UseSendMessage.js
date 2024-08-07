import { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

function UseSendMessage() {
  const [loading,setLoading] = useState(false);
  const {messages,setMessages, selectedConversation}= useConversation();

  const sendMessage = async(message)=>{
    setLoading(false);
    try {
        const res = await fetch(`http://localhost:8000/api/messages/send/${selectedConversation._id}`,{
            method:"POST",
            credentials:"include",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({message})
        })
        const data = await res.json();
        if(data.error) throw new Error(data.error);

        setMessages([...messages,data]);
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
  return {sendMessage,loading};
}

export default UseSendMessage