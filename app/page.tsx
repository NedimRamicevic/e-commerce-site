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
    
    <div className='flex flex-col gap-2 m-2 mx-12 bg-white text-black'>
      <div>
        
      </div>
      <div className='flex gap-11 mx-6'>
        <div className='flex gap-3'>
        
<button onClick={toggle} 
  className="text-black bg-gray-200 hover:bg-gray-300  font-medium rounded-2xl text-sm p-1 px-3 text-center inline-flex content-baseline items-center" type="button">Display 
   <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>
<button  
  className="text-black bg-gray-200 hover:bg-gray-300  font-medium rounded-2xl text-sm p-1 px-3 text-center inline-flex content-baseline items-center" type="button"> Rating 
   <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>
<button 
  className="text-black bg-gray-200 hover:bg-gray-300  font-medium rounded-2xl text-sm p-1 px-3 text-center inline-flex content-baseline items-center" type="button">Price 
   <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>
<button 
  className="text-black bg-gray-200 hover:bg-gray-300  font-medium rounded-2xl text-sm p-1 px-3 text-center inline-flex content-baseline items-center" type="button">Display 
   <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>
  {
  show ? (<div id="dropdown" className=" z-20 absolute  mt-8 bg-gray-300 divide-y divide-gray-100 rounded-lg  w-32 ">
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
