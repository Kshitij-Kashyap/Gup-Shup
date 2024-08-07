import { useSocketContext } from "../../../context/SocketContext";
import useConversation from "../../../zustand/useConversation";

const Conversation = ({conversation, lastIdx}) => {
	const {selectedConversation, setSelectedConversation} = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const {onlineUsers} = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	return (
		<>
			<div className={`group flex gap-4 items-center hover:bg-purple-300 rounded p-2 py-1 cursor-pointer ${isSelected?'bg-purple-300':''}`}
				onClick={()=>setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online":""}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilepic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className={` group-hover:text-white font-bold text-black ${isSelected?'text-white':''}`}>{conversation.fullName}</p>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
			
		</>
	);
    };
    export default Conversation;