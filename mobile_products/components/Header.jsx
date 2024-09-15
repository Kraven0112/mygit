const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <h1 className="heading-title">Digital</h1>
        </div>
        <nav className="nav-container">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Products</a>
          <a href="#">Blogs</a>
        </nav>
        <button
          className="mode"
          onClick={(e) => {
            const header = document.querySelector(".header")
            const body = document.body
            if (e.target.innerHTML === "Light") {
              body.style.backgroundColor = "black"
              body.style.color = "white"
              e.target.innerHTML = "Dark"
              header.style.borderBottom = "1px solid white"
            } else {
              body.style.backgroundColor = "white"
              body.style.color = "black"
              e.target.innerHTML = "Light"
              header.style.borderBottom = "1px solid black"
            }
          }}
        >
          Light
        </button>
      </div>
    </header>
  )
}
export default Header
