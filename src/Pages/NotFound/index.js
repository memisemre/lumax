import Logo from "../../Components/Logo";

function NotFound(){
  return (
    <div className="notfound-page-container">
      <div className="content">
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
    </div>
  )
}
export default NotFound;