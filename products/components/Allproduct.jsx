import { useEffect, useState } from "react"
import Productcard from "./Productcard"

const Allproduct = ({query,category}) => {
  const [allproducts, setProduct] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="card-container">
      {allproducts.filter((product)=>{
        return product.category.includes(category)
      })
      .filter((product) =>{
        return product.title.toLowerCase().includes(query)
      })
      .map((product) => {
        return (
          <Productcard
            key={product.id}
            image={product.thumbnail}
            productname={product.title}
            category={product.category}
            price={product.price}
            rating={product.rating}
            brand={product.brand}
          />
        )
      })}
    </div>
  )
}

export default Allproduct
