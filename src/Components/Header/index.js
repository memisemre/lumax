import Logo from "../Logo";
function Header(props) {
  return (
    <div className="header-container">
      <header>
        <Logo />
        <nav>
          <a>Courses</a>
          <a>Challenges
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <a
            href="/login"
            className="login-btn"
          >
            Login
            <i class="fa-solid fa-right-to-bracket"></i>
          </a>
        </nav>
      </header>
    </div>
  )
}
export default Header;