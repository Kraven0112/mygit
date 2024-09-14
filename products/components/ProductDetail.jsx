import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const [single, setSingle] = useState({})
  const params = useParams()
  const productname = params.detail

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        data.products.map((product) => {
          if(!product.brand){
            product.brand = product.title
          }
          if (product.title === productname) {
            setSingle({
              image: product.thumbnail,
              productname: product.title,
              category: product.category,
              price: product.price,
              brand: product.brand,
              rating: product.rating,
              description : product.description
            })
          }
        })
      })
      .catch((error) => console.log(error))
  }, [productname])



  return (
    <>
    <button className="back" onClick={()=>{history.back()}}><i className="fa-solid fa-arrow-left"></i>Back</button>
      <div className="detail">
       <div className="detailimage">
       <img src={single.image} alt="" />
       </div>
        <h1>{single.productname}</h1>
        <p><b className="bold">Brand</b> :{single.brand}</p>
        <p><b className="bold">Category</b> : {single.category}</p>
        <p><b className="bold">Price</b> : ${single.price}</p>
        <p>
          <b className="bold">Rating</b> : {single.rating}
          {single.rating <= 3 && "⭐⭐⭐"} {single.rating >= 3 && "⭐⭐⭐⭐"}
        </p>
        <p><b className="bold">Description</b> :{single.description}</p>
      </div>
    </>
  )
}
export default ProductDetail
