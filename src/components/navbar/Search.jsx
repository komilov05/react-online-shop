import React from 'react'

const Search = () => {
  return (
    <form className='bg-white flex rounded-[10px] overflow-hidden'>
        <input placeholder='Search any things' className='bg-none border-none outline-0 px-4' type="text" />
        <button className='bg-amber-500 rounded-[10px] px-6 py-2 text-white font-semibold'>Search</button>
    </form>
  )
}

export default Search