import React from 'react'
import { useAuthContext } from '../../../context/authContext';
import { extractTime } from '../../../utils/extractTime';
import useConversation from '../../../zustand/useConversation';

function Message({message}) {
    const {authUser} = useAuthContext();
    const {selectedConversation}= useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
    const bubbleBgColor = fromMe ? 'bg-purple-300':'';
    const shakeClass = message.shouldShake? "shake":""
  return (
    <div className={`chat ${chatClassName}`}>
        <div className=' chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-black font-medium bg-white ${bubbleBgColor} ${shakeClass}`}>
            {message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs gap-1 items-center text-black'>
            {formattedTime}
        </div>
    </div>
  )
}

export default Message