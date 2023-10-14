import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const randomStar = () => {
  return Math.floor(Math.random() * 5)
}
const randomPrice = () => {
  return Math.floor(Math.random() * 1000)
}
const dynamicArrayfromRating = (rating: number) => {
  let arr = []
  for (let i = 0; i < rating; i++) {
    arr.push(i)
  }
  return arr
}
interface IProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    image: string;
    rating: object;
    quantity: number;
}

export default function Product(params :any) {
  
  const rateLoop = dynamicArrayfromRating(randomStar() + 1)
 
  return (
   
    <div className=" bg-white flex flex-col justify-center min-h-full">
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div
          className="relative max-w-sm min-w-[240px] bg-gray-100 shadow-md rounded-lg p-2 mx-1 my-3 cursor-pointer"
        >
          <div className="overflow-x-hidden rounded-2xl relative">
            <Link href={`/product/${params.product.id}`} >
              <Image className=" rounded-2xl object-fit h-60 w-fit mx-auto" src="https://random.imagecdn.app/500/500" alt='' width={ 300 } height={ 300 }/>
            </Link>
            <p
              className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
            >
              <svg
              onClick={() => {}}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-50 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div className="mt-4 pl-2 mb-2 flex justify-between">
            <div className='flex flex-col gap-2'>
              <Link href={`/product/${params.product.id}`} >
                <p className="text-lg font-semibold text-gray-900 mb-0">
                  {params.product.name }
                </p>
              </Link>
              <div className=' flex flex-row text-black gap-1'>
                <div>
                  Rating 
                </div>
              {
          rateLoop.map((x) => (
            <svg className="w-5 h-5 text-yellow-300" key={x} fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
          ))
        }
              </div>
              <div className='flex text-black gap-1'>
              <p>Price </p>
              <p className="text-md text-gray-800 mt-0">
                {randomPrice()} $
              </p>
              </div>
            </div>
            <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
              <svg
              onClick={() =>params.onLikeClick(params.product)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke={params.product.isLiked ? 'red' : 'blue'}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )

//   return(
//     <div className="max-w-xl mx-auto">


// 	<div className="bg-gray-100 text-black shadow-md rounded-lg max-w-sm ">
// 		<a href="#">
// 			<Image className="rounded-t-lg p-8 mx-auto object-fit h-60 w-fit  " width={300} height={300} src={params.product.image} alt="product image"/>
//         </a>
// 			<div className="px-5 pb-5">
// 				<a href="#">
// 					<h3 className="text-black font-semibold text-xl tracking-tight ">{params.product.title}</h3>
// 				</a>
// 				<div className="flex items-center mt-2.5 mb-5">
					
// 				{
//           rateLoop.map((x) => (
//             <svg className="w-5 h-5 text-yellow-300" key={x} fill="currentColor" viewBox="0 0 20 20"
// 						xmlns="http://www.w3.org/2000/svg">
// 						<path
// 							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
// 						</path>
// 					</svg>
//           ))
//         }
					
// 					<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
// 				</div>
// 				<div className="flex items-center justify-between">
// 					<span className="text-3xl font-bold text-gray-900 ">{params.product.price}</span>
// 					<a href="#"
// 						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
// 						to cart</a>
// 				</div>
// 			</div>
// 	</div>
// </div>
//   )
}



 