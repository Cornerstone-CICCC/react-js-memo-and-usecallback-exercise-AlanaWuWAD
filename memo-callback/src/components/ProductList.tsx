import { useCallback, useState } from 'react'
import GetProductsButton from './GetProductsButton'


const ProductList = () => {
    const [product, setProduct] = useState([])

    const fetchProduct = useCallback( async () => {
        try{
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            setProduct(data.products)
            console.log(data.products)
        } catch(err) {
            console.log(err)
        }
    },[])

  return (
    <div>
        <GetProductsButton onDisplay={fetchProduct}/>
        {
            product.map((item, i) => (
                <li key={i}>
                    {item.title}
                </li>
            ))
        }
    </div>
  )
}

export default ProductList