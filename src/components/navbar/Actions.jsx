import React from 'react'
import { Link } from 'react-router-dom'
import {BiUser,BiLogIn,BiCartAlt} from 'react-icons/bi'

const Actions = () => {
  return (
    <ul className='flex gap-4'>
        <li>
            <Link className='flex items-center gap-2 text-white text-lg hover:text-amber-500 transiton-all'  to='/signin'>
                <BiUser/>
                 Sign in
                </Link>
        </li>
        <li>
            <Link className='flex items-center gap-2 text-white text-lg hover:text-amber-500 transiton-all' to='/signup'>
                <BiLogIn/>
                 Sign up
                </Link>
        </li>
        <li>
            <Link className='flex items-center gap-2 text-white text-lg hover:text-amber-500 transiton-all' to='/signin'>
                <BiCartAlt/>
                 Cart
                </Link>
        </li>
    </ul>
  )
}

export default Actions