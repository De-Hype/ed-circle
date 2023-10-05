import code from "../assets/code.svg";
import trend from "../assets/trend.svg";
import experience from "../assets/experience.svg";
import right from "../assets/right.svg";
import { AiOutlineCaretRight, AiOutlineVerticalRight } from "react-icons/ai";
const Services = () => {
  return (
    <div className="Services">
      <h4 className="sub_heading">Our Services</h4>
      <h4 className="heading">Fostering a playful & engaging learning</h4>
      <h4 className="heading">environment</h4>
      <div className="Services_Offered">
   
        <div className="services_box">
          <div className="image_box">
            <img src={experience} id="experience" alt="" />
            <h4 className="service_box_services">User Experience</h4>
          </div>
          <p className="service_box_paragraph">
            Lessons on design that cover the most recent developments.
          </p>
          <div className="services_learn">
            <h4 className="learn_more">Learn More</h4>
            <img src={right} alt="" />
          </div>
        </div>
        
        <div className="services_box-differ">
          <div className="image_box">
            <img src={code} alt="" id="code"/>
            <h4 className="service_box_services">Web Development</h4>
          </div>
          <p className="service_box_paragraph">
            Classes in development that cover the most recent advancements in
            web.
          </p>
          <div className="services_learn">
            <h4 className="learn_more">Learn More</h4>
            <AiOutlineCaretRight className="icon"/>

          </div>
        </div>

        <div className="services_box-differ">
          <div className="image_box">
            <img src={trend} alt=""id="trend" />
            <h4 className="service_box_services">Marketing</h4>
          </div>
          <p className="service_box_paragraph">
            Marketing courses that cover the most recent marketing trends.
          </p>
          <div className="services_learn">
            <h4 className="learn_more">Learn More</h4>
            <AiOutlineCaretRight className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
