export default function Header() {
  return (
      <div className="header-container">
        <header id="header">
          <a href="#" target="_blank" className="logo">Lumax</a>
          <a href="/login" className="header-login-btn">
            <i className="fa-regular fa-user"></i>Login
          </a>
        </header>
      </div>
  )
}