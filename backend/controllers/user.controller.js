import User from "../models/user.model.js";

export const getUserForSidebar = async(req,res)=>{
    try {
        
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")  //$ne stands for not eqauls to
        // in above line it is for all logged in user except for this logged in user

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error in getusersidebar function",error.message);
        res.status(500).json({error:"internal server error"});
    }
}