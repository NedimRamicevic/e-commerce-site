import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { collection, getDocs,doc,setDoc } from 'firebase/firestore'
import { db } from '../../firebase'


const addProduct = async (product: any) => {
  //add with custom id
  //get collection ids
  const querySnapshot = await getDocs(collection(db, "products"))
  const ids = querySnapshot.docs.map((doc) => doc.id)
  const savedProducts= querySnapshot.docs.map((doc) => doc.data())
  const savedProduct = savedProducts.filter((p: any) => p.id == product.id)

  if (ids.includes(product.id.toString())) {
      console.log('product exists')
      console.log(product)
      const newq = parseInt(product.quantity) 
      console.log(newq)
      const docRef = await setDoc(doc(db, "products", product.id.toString()), {
          ...product,
          quantity: savedProduct[0].quantity + 1,
      });
  }
  else {
      const docRef = await setDoc(doc(db, "products", product.id.toString()), {
          ...product,
          quantity: 1,
      });
  }
  
  
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

console.log(params.product)
  return (
   
    <div className="bg-gray-100 flex flex-col justify-center min-h-full">
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div
          className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer"
        >
          <div className="overflow-x-hidden rounded-2xl relative">
            <Link href={`/product/${params.product.id}`} >
              <Image
                className="h-40 rounded-2xl w-full object-contain"
                src={ params.product.image }
                alt=''
                width={ 300 }
                height={ 300 }
              />
            </Link>
            <p
              className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
            >
              <svg
              onClick={() => addProduct(params.product)}
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
            <div>
              <Link href={`/product/${params.product.id}`} >
                <p className="text-lg font-semibold text-gray-900 mb-0">
                  {params.product.title }
                </p>
              </Link>
              <p className="text-md text-gray-800 mt-0">
                {params.product.price  }
              </p>
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
}

 