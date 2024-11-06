import React from 'react'

function NavBar() {
  return (
    <div className='flex bg-red-600 justify-between'>
        <div className='m-4'>
            <div className='text-white font-bold text-3xl p-5'>
                Logo
            </div>
        </div>
        <div className='m-4'>
            <div className='text-white font-semibold text-lg flex list-none items-center '>
                <li className='p-5'>Home</li>
                <li className='p-5' > About US </li>
                <li className='p-5'> Contact </li>
                <li className='p-5'> Login </li>
            </div>
        </div>
    </div>
  )
}

export default NavBar