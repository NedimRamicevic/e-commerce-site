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
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        fetch('http://localhost:3000/api/products').
        then(res => res.json()).
        then(data => {
            setProducts(data)
        })
    }, [])

  return (
    <div className={ props.gridcol  == '3' ? 'grid grid-cols-3' : 'grid grid-cols-4'}>
         {products &&
              products.map((product:IProduct) => (
                <div key={product.id}>
                    <Product product={product}/>
                </div>

              ))
                
            }
    </div>
  )
}

export default Products