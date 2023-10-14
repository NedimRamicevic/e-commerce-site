import React from 'react'
import Product from './product'
import IProduct from '../types/product'
import { useEffect, useState } from 'react'
import ProductService  from '../network/ProductService'


    

const getProducts = async () => {
    const data = await ProductService.getAllProdcuts()
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
        getProducts().then((products) => {
            setProducts(products)
            setIsLoading(false)
        })
    },)

  return (
    <div className={ props.gridcol  == '3' ? 'grid grid-cols-3 gap-5' : 'grid grid-cols-4 gap-4'}>
         {isLoading ? (
                list.map((x) => (
                  <div className='text-white' key={x}>
                      <Product product={fake}/>
                  </div>
                ))  
         )
              :(products.map((product:IProduct) => (
                <div key={product.id}>
                    <Product  product={product}/>
                </div>

              )))
                
            }
    </div>
  )
}

export default Products