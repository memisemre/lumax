export default function Header(props) {
  return (
    <div className="header-container">
      <header id="header">
        <a href="#" target="_blank" className="logo">Lumax</a>
        <button className="header-login-btn" onClick={handleClick}>
          <i className="fa-regular fa-user"></i>Login
        </button>
      </header>
    </div>
  )
}
function handleClick(){
  console.log("osman")
}