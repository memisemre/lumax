import LoginFormSVG from "../../Assets/img/loginpage-illustration.svg";
import Logo from "../../Components/Logo";
function SignUp() {
  return (
    <div className="signup-page-container">
      <div className="content">

        <div className="form-container">

          <Logo />

          <h3>Register</h3>

          <div className="name-container">

            <input
              type="text"
              placeholder="Name"
            />

            <input
              type="text"
              placeholder="Surname"
            />

          </div>
          
          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>Create Account</button>

          <p>
            Already have an Account?
            <a href="/login">Log In</a>
          </p>
        </div>







        <div className="right-container">
          <img src={LoginFormSVG} />
        </div>

      </div>

    </div>
  )
}
export default SignUp;