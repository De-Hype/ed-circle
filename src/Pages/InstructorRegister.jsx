import logo from "../assets/logo.svg";
const InstructorRegister = () => {
  return (
    <div className="Authentication">
      <div className="Authentication_container">
        <div className="Authentication_logo">
          <img src={logo} alt="" className="Auth_logo" />
          <h2 className="Auth_heading">Join Us</h2>
        </div>
        <form>
          <input type="text" placeholder="Full Name" name="name" />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
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
          <div className="country_select">
            <select name="" id="">
              <option value="">--Country--</option>
            </select>
            <select name="" id="">
              <option value="">--State--</option>
            </select>
          </div>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
          />
          <input
            type="submit"
            id="register-btn"
            value="Register As Instructor"
          />
        </form>
        <p className="auth_link_wrapper">
          <a href="" className="auth_links">
            Log in as instructor
          </a>
        </p>
      </div>
    </div>
  );
};

export default InstructorRegister;
