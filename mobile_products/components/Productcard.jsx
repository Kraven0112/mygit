import {Link} from 'react-router-dom'
const Productcard = ({image,title,price,brand,rating,category}) => {
    return(
        <Link to={`/${title}`} className="card">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>Brand : {brand}</p>
            <p>Category : {category}</p>
            <p>Price : ${price}</p>
            <p>Ratinf : {rating} {rating >= 3 && "⭐⭐⭐⭐"} {rating <= 3 && "⭐⭐⭐"} </p>
        </Link>
    )
}

export default Productcard