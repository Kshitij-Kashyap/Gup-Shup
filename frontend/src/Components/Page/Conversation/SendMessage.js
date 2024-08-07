import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import UseSendMessage from '../../../hooks/UseSendMessage';

function SendMessage() {
  const [message,setMessage] = useState("");
  const {loading,sendMessage} = UseSendMessage();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!message)return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='px-4 py-3 w-full bg-white'>
        <div className='w-full flex items-center gap-4'>
          <input value={message} onChange={(e)=>{setMessage(e.target.value)}} className='bg-white outline-none w-full text-black' type="text" placeholder='Type ypur message..'/>
          <button type='submit'>{loading ? <span className='loading loading-spinner'></span>: <BsSend/>}</button>
        </div>
      </div>
    </form>
  )
}

export default SendMessage