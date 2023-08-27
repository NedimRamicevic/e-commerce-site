'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../../components/product'



function ProductPAge({params}: any) {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/api/products`).
        then(res => res.json()).
        then(data => {
            const pr = data.filter((product: any) => product.id == params.id)
            setProduct(pr[0])
            setLoading(false)
            console.log(pr)
        })
    }, [params.id])

  return (
    <div>
        {loading ? (<div>Loading...</div>) : (<div>
            <Product product={product} />
        </div>)}
    </div>
  )
}

export default ProductPAge