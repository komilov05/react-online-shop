import React from 'react'
import Actions from './Actions'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className='bg-sky-900 py-6'>
        <div className="container flex justify-between items-center mx-auto py-2">
            <div className="flex justify-center items-center p-2 gap-8">
                <Logo/>
                <Search/>
            </div>
            <Actions/>
        </div>
    </nav>
  )
}

export default Navbar