'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../../components/product'



function ProductPAge({params}: any) {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const fake = {
        id: 1,
        title: '',
        category: '',
        price: 1,
        description: '',
        image: '/vercel.svg',
        rating: '',
        quantity: 1,
    }
    useEffect(() => {
        fetch(`http://localhost:3000/api/products`).
        then(res => res.json()).
        then(data => {
            const pr = data.filter((product: any) => product.id == params.id)
            setProduct(pr[0])
            setTimeout(() => {
                setLoading(false)
              }, 500);
        })
    }, [params.id])

  return (
    <div>
        {loading ? (<div className='text-white'><Product product={fake}/></div>) : (<div>
            <Product product={product} />
        </div>)}
    </div>
  )
}

export default ProductPAge