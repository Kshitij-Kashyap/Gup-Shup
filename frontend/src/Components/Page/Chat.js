import React, { useEffect } from 'react'
import Users from './Sidebar/Search'
import Logout from './Sidebar/Logout'
import Top from './Conversation/Top'
import Conversations from './Conversation/Conversations'
import RecentChats from './Sidebar/RecentChats'
import SendMessage from './Conversation/SendMessage'
import useConversation from '../../zustand/useConversation'


function Chat() {
  const {selectedConversation, setSelectedConversation}= useConversation();
  useEffect(()=>{

    //cleanup funtion
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#F1DFF7]'>
      <div className='flex lg:w-2/3 h-[90vh] overflow-hidden rounded-xl'>
          {/* sidebar */}
          <div className='w-1/3 h-[90vh] bg-white flex flex-col justify-between border-r-2'>
            <div>
              <Users/>
              <RecentChats/>
            </div>
            <Logout/>
          </div>
          {/* coversation  */}
          <div className='w-2/3 h-[90vh] bg-purple-300'>
           {!selectedConversation ? <NoChatSelected/> : (
            <div className='flex flex-between flex-col h-[90vh]'>
              <Top/>
              <Conversations/>
              <SendMessage/>
            </div>
           )}

          </div>
      </div>
    </div>
  )
}

export default Chat

const NoChatSelected = () =>{
  return (
    <div className='hidden lg:block relative w-full rounded-xl'>
      <img className=' w-full h-[90vh]' src="https://i.pinimg.com/736x/0c/c6/bd/0cc6bdb2906e2fca6c4073c634cf4955.jpg" alt="bg" />
      <p className='text-white font-bold absolute top-[16rem] left-16 text-7xl'>Welcome! Lets start with a conversation.</p>
    </div>
  )
}