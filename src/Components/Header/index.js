import Logo from "../Logo";
function Header(props) {
  return (
    <div className="header-container">
      <header>
        <Logo />
        <nav>
          <a>Courses</a>
          <div className="challenges-btn">Challenges
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <a
            href="/login"
            className="login-btn"
          >
            Login
            <i className="fa-solid fa-right-to-bracket"></i>
          </a>
        </nav>
      </header>
    </div>
  )
}
export default Header;