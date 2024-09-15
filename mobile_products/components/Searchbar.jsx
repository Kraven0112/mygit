const Searchbar = ({func1,func2}) => {
  return (
    <div className="searchbar">
      <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search product...." onChange={(e)=>{func1(e.target.value)}} />
      </div>
      <select name="" id="" className="select" onChange={(e)=>{func2(e.target.value)}} >
        <option value="">Brands</option>
        <option value="Apple">Apple</option>
        <option value="Beats">Beats</option>
        <option value="GadgetMaster">GadgetMaster</option>
        <option value="SnapTech">SnapTech</option>
        <option value="Oppo">Oppo</option>
        <option value="Realme">Realme</option>
        <option value="Samsung">Samsung</option>
        <option value="Vivo">Vivo</option>
      </select>
    </div>
  )
}
export default Searchbar
