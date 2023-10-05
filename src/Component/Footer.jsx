import Twitter from "../assets/Twitter.svg";
import Linkedn from "../assets/Linkedn.svg";
import white_logo from "../assets/white_logo.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_top">
        <div className="footer_logo_text">
          <img src={white_logo} alt="" />
          <h3 className="footer_logo_div_text">
            Top learning experiences that create more <br /> talent in the
            world.
          </h3>
        </div>
        <div className="footer_top_sections">
          <div className="footer_top_sections_group">
            <h4 className="footer_top_sections_title">Product</h4>
            <div className="footer_top_sections_links">
              <h4 className="footer_top_sections_links_tag">Overview</h4>
              <h4 className="footer_top_sections_links_tag">Features</h4>
              <h4 className="footer_top_sections_links_tag">Solutions</h4>
              <h4 className="footer_top_sections_links_tag">Tutorials</h4>
              <h4 className="footer_top_sections_links_tag">Pricing</h4>
            </div>
          </div>

          <div className="footer_top_sections_group">
            <h4 className="footer_top_sections_title">Company</h4>
            <div className="footer_top_sections_links">
              <h4 className="footer_top_sections_links_tag">About Us</h4>
              <h4 className="footer_top_sections_links_tag">Careers</h4>
              <h4 className="footer_top_sections_links_tag" id="press">Press <span>New</span> </h4>
              <h4 className="footer_top_sections_links_tag">News</h4>
            </div>
          </div>

          <div className="footer_top_sections_group">
            <h4 className="footer_top_sections_title">Social</h4>
            <div className="footer_top_sections_links">
              <h4 className="footer_top_sections_links_tag">Twitter</h4>
              <h4 className="footer_top_sections_links_tag">Linkedln</h4>
              <h4 className="footer_top_sections_links_tag">Github</h4>
              <h4 className="footer_top_sections_links_tag">Dribble</h4>
            </div>
          </div>

          <div className="footer_top_sections_group">
            <h4 className="footer_top_sections_title">Legal</h4>
            <div className="footer_top_sections_links">
              <h4 className="footer_top_sections_links_tag">Terms</h4>
              <h4 className="footer_top_sections_links_tag">Privacy</h4>
              <h4 className="footer_top_sections_links_tag">Cookies</h4>
              <h4 className="footer_top_sections_links_tag">Contact</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_bottom">
        <h4 className="footer_bottom_text disapear">
          © 2023 Ed-Circle. All rights reserved.
        </h4>
        <h4 className="footer_bottom_text">
          Designed By
          <a href="" className="footer_Links">
            Shoiab
          </a>
          & Built By
          <a className="footer_Links" href="">
            David Hype
          </a>
        </h4>
        <div className="footer_bottom_socials">
          <img src={Twitter} alt="" />
          <img src={Linkedn} alt="" />
          <img src={Twitter} alt="" />
          <img src={Twitter} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
