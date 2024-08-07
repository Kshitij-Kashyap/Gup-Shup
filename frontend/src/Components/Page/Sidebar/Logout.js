import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../../hooks/UseLogOut'

function Logout() {
  const {loading, logout} = useLogout();
  return (
    <div className='border-t-2 py-2 px-3'>
      {!loading ? (
        <BiLogOut className='cursor-pointer' size={28} onClick={logout}/>
      ):(
        <span className=' loading loading-spinner'></span>
      )}
    </div>
  )
}

export default Logout