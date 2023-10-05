import logo from "../assets/logo.svg";
import Avatar_One from '../assets/Avatar_One.png'
const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="Reviews_Center">
        <img src={logo} className="review_image" alt="" />
        <h4 className="Reviews_heading">
          Courses was fantastic! It is Master platform for those looking to
          start a new career, or need a refresher.
        </h4>
        <div className="Reviews_Student_Bio">
          <img src={Avatar_One} alt="" />
          <h4 className="Reviews_Student_name">Jacob Jones</h4>
          <h4 className="Reviews_Student_school">Student, National University</h4>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
