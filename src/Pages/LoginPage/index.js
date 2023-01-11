import { useState } from "react";
import LoginFormSVG from "../../Assets/img/loginpage-illustration.svg";
import Logo from "../../Components/Logo";
function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login-page-container">
      <div className="content">
        <div className="form-container">
          <Logo />

          <h3>Welcome Back!</h3>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => console.log(email, password)}
          >
            Sign In
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <p>Don't have an account yet?
            <a href="/signup"> Register Today </a>
          </p>
        </div>

        <div className="right-container">
          <img src={LoginFormSVG} />
        </div>

      </div>
    </div>
  )
}
export default LoginPage;