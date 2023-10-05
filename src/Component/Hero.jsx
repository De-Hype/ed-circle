import heroGirl from "../assets/heroGirl.png";
import ring from "../assets/ring.svg";
import laptop from "../assets/laptop.svg";
import board from "../assets/board.svg";
import briefcase from '../assets/briefcase.svg';
import idea from '../assets/idea.svg';
import speak from '../assets/speak.svg'
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero_container">
        <div className="hero_mobile">
          <img src={heroGirl} alt="" />
        </div>
        <div className="hero_left">
          <h4 className="hero_text">
            Up Your <span>Skills</span>
            <br />
            To <span>Advance</span> Your <br />
            <span>Career</span> Path
          </h4>
          <p className="hero_paragraph">
            Provides you with the latest online learning system and material{" "}
            <br />
            that help your knowledge growing.
          </p>
          <div className="hero_call_actions">
            <button id="get_started">Get Started</button>
            <button id="free_trial">Get Free Trial</button>
          </div>
        </div>
        <div className="hero_right">
          <div className="first_hero_circle"></div>
          <div className="hero_image-background">
            <img src={heroGirl} alt="" className="hero_image" />
          </div>
          <div className="hero_floating_objects">
            <div id="floating_hero_obj-1">
              <img src={ring} alt="" className="float-icons" />
              <h3 className="float_text text_gap">5K+</h3>
              <p className="float_short_text">Online Courses</p>
            </div>

            <div id="floating_hero_obj-2">
              <img src={laptop} alt="" className="float-icons_bg" />
              <div className="floating_hero_obj-2_text_wrapper">
                <h3 className="float_text">2K+</h3>
                <p className="float_short_text">Video Courses</p>
              </div>
            </div>

            <div id="floating_hero_obj-3">
              <img src={board} alt="" className="float-icons_bg" />
              <div className="floating_hero_obj-3_text_wrapper">
                <p className="float_short_text">Tutors</p>
                <h3 className="float_text">250+</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_bottom">
        <div className="hero_bottom_box">
          <img src={speak} alt="" />
          <p className="hero_bottom_box_text">Public Speaking</p>
        </div>
        <div className="hero_bottom_box">
          <img src={briefcase} alt="" />
          <p className="hero_bottom_box_text">Career Oriented</p>
        </div>
        <div className="hero_bottom_box">
          <img src={idea} alt="" />
          <p className="hero_bottom_box_text">Creative Thinking</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
