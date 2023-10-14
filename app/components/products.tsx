import React from 'react'
import Product from './product'
import IProduct from '../types/product'
import ProductService  from '../network/ProductService'
import BaseService from '../network/BaseService'
import useSWR from 'swr'

    

// const fetcher = () => fetch("https://northwind.vercel.app/api/products").then((res) => res.json());
const fetcher = () => ProductService.getAllProducts();

function Products(props: any) {
  const { data, error, isLoading } = useSWR(
    "products",
    fetcher
  );

    const fake = {
      id: 1,
      title: '',
      category: '',
      price: 1,
      description: '',
      image: '/next.svg',
      rating: '',
      quantity: 1,
  }
  const list = [1,2,3,4,5,6,7,8,9,10]
  if (error) return <div>failed to load</div>
  console.log('naaaabeeeer',data)
  return (
    <div className={ props.gridcol  == '3' ? 'grid grid-cols-3 gap-5' : 'grid grid-cols-4 gap-4'}>
         {isLoading ? (
                list.map((x) => (
                  <div className='text-white' key={x}>
                      <Product product={fake}/>
                  </div>
                ))  
         )
              :(data.map((product:IProduct) => (
                <div key={product.id}>
                    <Product  product={product}/>
                </div>

              )))
                
            }
    </div>
  )

 
}

export default Products