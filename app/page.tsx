'use client'
import Products from './components/products'
import { useState } from 'react'



export default function Home() {
  const [gridcol, setGridcol] = useState(3)
  const [show, setShow] = useState(false)

  const setGrid = (gridcol: number) => {
    setGridcol(gridcol)
    toggle()
  }

  const toggle = () => {
    setShow(!show)
  }

  return (
    
    <div className='flex flex-col gap-2 m-2 text-black'>
      <div className='flex gap-4'>
        <div>
        
<button onClick={toggle} 
  className="text-black bg-white hover:bg-gray-300 focus:ring-2 ring-1 ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Display Cols <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
  {
  show ? (<div id="dropdown" className="z-10 absolute mt-2 bg-gray-300 divide-y divide-gray-100 rounded-lg  w-32 ">
  <ul className="py-2 text-sm text-black " aria-labelledby="dropdownDefaultButton">
    <li>
      <div 
      onClick={()=> setGrid(3)}
       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg">3 columns</div>
    </li>
    <li>
      <div  
      onClick={()=> setGrid(4)}
      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg">4 columns</div>
    </li>
  </ul>
</div>) : (<div></div>)
}
        </div>
        
      </div>
      

            <Products gridcol={gridcol} />
    </div>
    )
  
}
