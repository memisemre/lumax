import Logo from "../../Components/Logo";
import SVG from "../../Assets/img/404.svg";
function NotFound() {
  return (
    <div className="notfound-page-container">
      <div className="content">
        <div className="left-side">

          <Logo />
          <h1> 404 </h1>
          <h3> Page Not Found !</h3>
          <a
            className="btn"
            href="/"
          >
            Go HomePage
          </a>
        </div>
        <div className="right-side">
          <img src={SVG} />
        </div>
      </div>
    </div>
  )
}
export default NotFound;