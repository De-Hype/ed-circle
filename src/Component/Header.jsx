import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import searchBtn from "../assets/searchBtn.svg";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () =>{
    setOpen(!open)
  }
  
  return (
    <div className="Header">
      <div className="header-navigations">
        <img src={logo} alt="" />
        <div className="header_search_box">
          <img src={searchIcon} alt="" className="icon" />
          <input
            type="text"
            name="searchText"
            id="searchText"
            placeholder="Want to learn?"
          />
          <img src={searchBtn} alt="" className="search_btn" />
        </div>
        <div className="header_nav_text">
          <p className="header-links">Program</p>
          <p className="header-links">Enterprise</p>
          <p className="header-links">Universities</p>
        </div>
      </div>
      <div className="header-call-to-actions">
        <Link to="/auth" className="header-cta">
          Sign in
        </Link>

        <Link to="/auth" className="create_account">
          Create free account
        </Link>
      </div>
      <AiOutlineMenu onClick={handleMenu} className="icon" />
      {open ? (
        <div className="header_mobile_screen">
          <div className="top">
            <img src={logo} alt="" />
            <AiOutlineClose className="icon" onClick={handleMenu} />
          </div>
          <div className="header_mobile_screen_links">
            <p className="header-links">Program</p>
            <p className="header-links">Enterprise</p>
            <p className="header-links">Universities</p>
          </div>
        </div>
      ) : <></>}
    </div>
  );
};

export default Header;
