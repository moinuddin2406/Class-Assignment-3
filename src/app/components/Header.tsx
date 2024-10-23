import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between bg-rose-700 text-white p-4 '>
         <h1 className='text-4xl font-bold m-4 md:m-8  ui-serif'>TASTY TREATS</h1>
    <ul className='flex justify-center gap-10 text-2xl m-10 ' >
        <li><Link href="/" 
        className='hover:text-blue-700 hover:bg-yellow-500'>Home 
        </Link></li>
        <li><Link href="#hot-items"
        className='hover:text-blue-700 hover:bg-yellow-500'>Hot Items 
        </Link></li>
        <li><Link href="#contact"
        className='hover:text-blue-700 hover:bg-yellow-500'>Contact 
        </Link></li>
    </ul>
      <div className='p-4'>
          <button className='bg-white text-purple-700 rounded-md p-4 font-bold  hover:bg-purple-700 hover:text-white'>Join
          </button>
      </div>
    </div>
  )
  
}
