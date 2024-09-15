import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Productdetail = () => {
  const param = useParams()
  const mobiletitle = param.product

  const [single, setProduct] = useState({})

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((response) => response.json())
      .then((data) => {
        data.products.map((product) => {
          if (product.title === mobiletitle) {
            setProduct({
              title: product.title,
              category: product.category,
              brand: product.brand,
              price: product.price,
              image: product.thumbnail,
              rating: product.rating,
              description: product.description,
            })
          }
        })
      })
      .catch((error) => console.log(error))
  }, [mobiletitle])

  console.log(single)

  return (
    <>
      <button
        className="back"
        onClick={() => {
          history.back()
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>Back
      </button>
      <div className="detail">
        <div className="detailimage">
          <img src={single.image} alt="" />
        </div>
        <h1>{single.title}</h1>
        <p>
          <span className="bold">Brand : </span>
          {single.brand}
        </p>
        <p>
          <span className="bold">Category : </span>
          {single.category}
        </p>
        <p>
          <span className="bold">Price : </span>
          {single.price}
        </p>
        <p>
          <span className="bold">Rating : </span>
          {single.rating} {single.rating >= 3 && "⭐⭐⭐⭐"}{" "}
          {single.rating <= 3 && "⭐⭐⭐"}
        </p>
        <p>
          <span className="bold">Description : </span>
          {single.description}
        </p>
      </div>
    </>
  )
}
export default Productdetail
