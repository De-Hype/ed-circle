import { AiTwotoneCheckCircle } from "react-icons/ai";
import Tutor from '../assets/undraw/Tutor.svg';
import Student from '../assets/undraw/Student.svg'
const JoinUs = () => {
  return (
    <div className="JoinUs">
        <div className="Join_container">
            <div className="join_us_wrapper">
                <img src={Tutor} alt="" />
                <AiTwotoneCheckCircle className="icon"/>
                <h4 className="join_us_heading">
                    I want to log in as an Instructor
                </h4>
            </div>
            <div className="join_us_wrapper">
                <img src={Student} alt="" />
            <AiTwotoneCheckCircle className="icon"/>
                <h4 className="join_us_heading">
                    I want to log in as a Student
                </h4>
            </div>
        </div>
    </div>
  )
}

export default JoinUs