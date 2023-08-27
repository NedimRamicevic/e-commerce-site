'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../../components/product'
import ProductDetail from '@/app/components/product-detail'
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
import IProduct from '@/app/types/product'


const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Allproducts"))
    const products = querySnapshot.docs.map((doc) => doc.data()) as IProduct[]
    return products
}
const onLikeClick = async (product: IProduct) => {
 
    const docRef = await setDoc(doc(db, "Allproducts", product.id.toString()), {
        ...product,
        isLiked: !product.isLiked ,
    });
    
}

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
    const [product, setProduct] = useState<IProduct>()
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
        getProducts().
        then(data => {
            const pr = data.filter((product: any) => product.id == params.id)
            setProduct(pr[0])
            setTimeout(() => {
                setLoading(false)
              }, 500);
        })
    },)

  return (
    <div>
        { loading  ? (<div className='text-white'><Product product={fake}/></div>) :   (<div>
            <ProductDetail onLikeClick={onLikeClick} addProduct={addProduct} product={product} />
        </div>)}
    </div>
  )
}

export default ProductPAge