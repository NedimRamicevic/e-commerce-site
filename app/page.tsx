
import Product from './components/product'
import IProduct from './types/product'

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products',
  {
    cache: "no-store",
  }
  )
  const data = await res.json()



  return data
}


export default async function Home() {
  const products = await getProducts()


  return (
    
    <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-3'>
            {products &&
              products.map((product:IProduct) => (
               Product(product)
              ))
                
            }
            </div>

    </div>)
  
}
