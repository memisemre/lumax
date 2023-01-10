export default function Header(props) {
  const isLoggingIn = props.checkUserLogin === "loggingIn";
  const notLogged = props.checkUserLogin === "notLoggedIn"
  if (isLoggingIn) {
    return (
      <div className="header-container">
        <header id="header" className="container" style={{ justifyContent: "center" }}>
          <a href="#" target="_blank" className="logo">Lumax</a>
        </header>
      </div >
    )
  }
  else if (notLogged) {
    return (
      <div className="header-container">
        <header id="header" className="container">
          <a href="#" target="_blank" className="logo">Lumax</a>
          <a href="/login" className="header-login-btn">
            <i className="fa-regular fa-user"></i>Login
          </a>
        </header>
      </div>
    )
  }
}