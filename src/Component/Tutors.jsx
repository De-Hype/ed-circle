import Avatar_One from "../assets/Avatar_One.png";
import Twitter from "../assets/Twitter.svg";
import Linkedn from "../assets/Linkedn.svg";
const Tutors = () => {
  return (
    <div className="Tutors">
      <h4 className="sub_heading">Tutors</h4>
      <h4 className="heading">Meet The Heroes</h4>
      <h4 className="paragraph">
        On Ed-Circle, instructors from all over the world instruct millions of
        students. We
      </h4>
      <h4 className="paragraph">offer the knowledge and abilities.</h4>
      <div className="Tutors_boxes_container">
        <div className="Tutor_box ">
          <div className="Tutor_box_details">
            <img src={Avatar_One} alt="" />
            <h4 className="tutor_box_name">Theresa Webb</h4>
            <h4 className="tutor_box_bio">Application Support Analyst Lead</h4>
          </div>
          <div className="Tutor_socials">
            <h4 className="Tutor_Work_experience">
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </h4>
            <div className="Tutor_socials_">
              <img src={Twitter} alt="" />
              <img src={Linkedn} alt="" />
            </div>
          </div>
        </div>

        <div className="Tutor_box disapear">
          <div className="Tutor_box_details">
            <img src={Avatar_One} alt="" />
            <h4 className="tutor_box_name">Courtney Henry</h4>
            <h4 className="tutor_box_bio">
              Director, Undergraduate Analytics and Planning
            </h4>
          </div>
          <div className="Tutor_socials">
            <h4 className="Tutor_Work_experience">
              Lead engineering teams at Figma, Pitch, and Protocol Labs.
            </h4>
            <div className="Tutor_socials_">
              <img src={Twitter} alt="" />
              <img src={Linkedn} alt="" />
            </div>
          </div>
        </div>

        <div className="Tutor_box">
          <div className="Tutor_box_details">
            <img src={Avatar_One} alt="" />
            <h4 className="tutor_box_name">Albert Flores</h4>
            <h4 className="tutor_box_bio">Career Educator</h4>
          </div>
          <div className="Tutor_socials">
            <h4 className="Tutor_Work_experience">
              Former PM for Linear, Lambda School, and On Deck.
            </h4>
            <div className="Tutor_socials_">
              <img src={Twitter} alt="" />
              <img src={Linkedn} alt="" />
            </div>
          </div>
        </div>

        <div className="Tutor_box disapear">
          <div className="Tutor_box_details">
            <img src={Avatar_One} alt="" />
            <h4 className="tutor_box_name">Marvin McKinney</h4>
            <h4 className="tutor_box_bio">
              Co-op & Internships Program & Operations Manager
            </h4>
          </div>
          <div className="Tutor_socials">
            <h4 className="Tutor_Work_experience">
              Former frontend dev for Linear, Coinbase, and Postscript.
            </h4>
            <div className="Tutor_socials_">
              <img src={Twitter} alt="" />
              <img src={Linkedn} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
