import Logo from "../Logo";

function LoginAnimation() {
  return (
    <div className="login-animation-container">
      <div className="content">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="logo-container">
        <Logo />

      </div>
    </div>
  )
}
export default LoginAnimation;