const Searchbar = ({func1,func2}) => {
  return (
    <div className="searchbar">
      <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search product..." onChange={(e)=>{func1(e.target.value)}} />
      </div>
      <select name="" id="" className="select" onChange={(e)=>{func2(e.target.value)}}>
        <option value="">Check Category</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrance</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Grocery</option>
      </select>
    </div>
  )
}
export default Searchbar
