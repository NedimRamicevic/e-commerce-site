import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
    
<div className="bg-white ">
  <div
    className="container mx-auto  py-3 md:flex gap-4 md:justify-between md:items-center"
  >
    <div className="flex justify-between items-center">
      <div>
        <Link
          className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
          href="/"
          >Brand</Link>
      </div>

     
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div className='text-black flex-1 px-6 flex gap-6'>
      <Link href='' >Categories</Link>
      <Link href='' >What&apos;s New</Link>
      <Link href='' >Deals</Link>
    </div>
    <div className="pt-2 relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" xmlSpace="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
    <div className="md:flex items-center">
      <div className="flex flex-col md:flex-row md:mx-6">
        
        <Link href="/" className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'>Home</Link>
        <Link href="about" className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'>About</Link>
      </div>
      

      <div className="flex justify-center md:block">
        <div className="relative text-gray-700 hover:text-gray-600" >
          <Link
          href="/cart"
          >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"
          ></span></Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar