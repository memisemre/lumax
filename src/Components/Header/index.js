export default function Header(props) {
  return (
    <div className="header-container">
      <header id="header">
        <button className="header-language">EN</button>
        <a href="#" target="_blank" className="logo">Lumax</a>
        <button className="header-login-btn">
          <i className="fa-regular fa-user"></i>Login
        </button>
      </header>
    </div>
  )
}