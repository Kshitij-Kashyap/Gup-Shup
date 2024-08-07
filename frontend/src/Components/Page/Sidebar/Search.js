import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../../zustand/useConversation';
import useGetConversations from '../../../hooks/UseGetConversations';
import toast from 'react-hot-toast';

function Users() {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations()
  const handleSubmit= (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('search term should be more than 3 letter')
    }
    
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }
    else{
      toast.error("no such user found");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='py-4 px-4'>
        <div className='border-2 rounded-full p-2 flex items-center'>
          <input className='outline-none p-1 bg-white w-[15rem] text-black' type="text" placeholder='Search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <CiSearch className='cursor-pointer' size={28}/>
        </div>
      </div>
    </form>
  )
}

export default Users