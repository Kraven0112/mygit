import {Link} from 'react-router-dom'
const Productcard = ({ image, productname, category, price, rating,brand }) => {
  return (
    <Link to={`/${productname}`} className="card">
      <img src={image} alt="" />
      <h1>{productname}</h1>
      <p>Category : {category}</p>
      <p>Price : ${price}</p>
      <p>Brand : {brand}</p>
      <p>
        Rating : {rating} {rating >= 3 && "⭐⭐⭐⭐"}
        {rating <=3 && "⭐⭐⭐"}
      </p>
    </Link>
  )
}
export default Productcard
