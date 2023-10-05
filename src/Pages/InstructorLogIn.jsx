import logo from "../assets/logo.svg";
const InstructorLogIn = () => {
  return (
    <div className="Authentication">
      <div className="Authentication_container">
        <div className="Authentication_logo">
          <img src={logo} alt="" className="Auth_logo" />
          <h2 className="Auth_heading">Log In</h2>
        </div>
        <form>

          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username Or Email Address"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
          />
          
          <input
            type="submit"
            id="register-btn"
            value="Log In As Instructor"
          />
        </form>
        <p className="auth_link_wrapper">
          <a href="" className="auth_links">
            Register as instructor
          </a>
        </p>
      </div>
    </div>
  )
}

export default InstructorLogIn