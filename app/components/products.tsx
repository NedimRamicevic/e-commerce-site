import React from 'react'
import Product from './product'
import IProduct from '../types/product'
import { useEffect, useState } from 'react'
import { collection, getDocs,doc,setDoc } from 'firebase/firestore'
import { db } from '../../firebase'


const onLikeClick = async (product: IProduct) => {
 
    const docRef = await setDoc(doc(db, "Allproducts", product.id.toString()), {
        ...product,
        isLiked: !product.isLiked ,
    });
    
}
const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Allproducts"))
    const products = querySnapshot.docs.map((doc) => doc.data()) as IProduct[]
    return products
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
                    <Product onLikeClick={onLikeClick} product={product}/>
                </div>

              )))
                
            }
    </div>
  )
}

export default Products