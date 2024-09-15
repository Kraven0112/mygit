import { useEffect, useState } from "react"
import Productcard from "./Productcard.jsx"

const Allproduct = ({query,category}) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products)
      })
      .catch((error) => console.log(error))
  }, [])


  return(
    <div className="card-container">
        {
            product.filter((product)=>{
              return product.brand.includes(category)
            })
            .filter((product) =>{
              return product.title.toLowerCase().includes(query)
            })
            .map((product)=>{
                return <Productcard key={product.title} image={product.thumbnail} title={product.title} brand={product.brand} rating={product.rating} price={product.price} category={product.category}  />
            })
        }
    </div>
  )
}

export default Allproduct
