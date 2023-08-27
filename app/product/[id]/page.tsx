'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../../components/product'
import ProductDetail from '@/app/components/product-detail'
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

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
    },[params])

  return (
    <div>
        { loading  ? (<div className='text-white'><Product product={fake}/></div>) :   (<div>
            <ProductDetail addProduct={addProduct} product={product} />
        </div>)}
    </div>
  )
}

export default ProductPAge