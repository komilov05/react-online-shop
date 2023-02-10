import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubList from './SubList'
import {IoIosArrowDown} from 'react-icons/io'

const NavList = () => {
    const [open,setOpen] =useState(false)
    return (
    <ul className='flex gap-4'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <Link className='flex items-center' to='#'>Catalog<IoIosArrowDown/> </Link>
            <SubList open={open}/>
        </li>
        <li>
            <Link to='/about'>About Us</Link>
        </li>
        <li>
            <Link to='/support'>Support</Link>
        </li>
    </ul>
  )
}

export default NavList