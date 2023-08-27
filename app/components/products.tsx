import React from 'react'
import Product from './product'
import IProduct from '../types/product'
import { useEffect, useState } from 'react'

async function getProducts() {

  
  const res = await fetch('http://localhost:3000/api/products',
  {
    cache: "no-store",
  }
  )
  const data = await res.json()
  
  
  
  return data
}
function Products(props: any) {
   const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState<IProduct[]>([])

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
    useEffect(() => {
        fetch('http://localhost:3000/api/products').
        then(res => res.json()).
        then(data => {
            setProducts(data)
            setTimeout(() => {
              setIsLoading(false)
            }, 500);
        })
    }, [])

  return (
    <div className={ props.gridcol  == '3' ? 'grid grid-cols-3' : 'grid grid-cols-4'}>
         {isLoading ? (
                list.map((x) => (
                  <div className='text-white' key={x}>
                      <Product product={fake}/>
                  </div>
                ))  
         )
              :(products.map((product:IProduct) => (
                <div key={product.id}>
                    <Product product={product}/>
                </div>

              )))
                
            }
    </div>
  )
}

export default Products