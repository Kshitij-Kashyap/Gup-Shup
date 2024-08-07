import React from 'react'
import useConversation from '../../../zustand/useConversation';


function Top() {
  const {selectedConversation}= useConversation();
  return (
    <div className='bg-white'>
      <div className='py-2 mx-4 flex items-center gap-[0.5rem] overflow-auto'>
        <div className="avatar online">
            <div className="w-[3rem] rounded-full">
                <img src={selectedConversation.profilepic} alt=''/>
            </div>
        </div>
        <div>
            <p className='text-lg text-black'>{selectedConversation.fullName}</p>
        </div>
      </div>
    </div>
  )
}

export default Top