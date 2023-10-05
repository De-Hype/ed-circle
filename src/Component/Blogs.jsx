import User_Delight from "../assets/User_Delight.png";
import Agile_Devlopment_Blog from '../assets/Agile_Devlopment_Blog.png'
const Blogs = () => {
  return (
    <div className="Blog">
      <h4 className="sub_heading">Our recent blogs</h4>
      <div className="Blogs_Containers">
        <div className="Blog_container_divided">
          <div className="Blog_container_divided_box">
            <img src={User_Delight} alt="" />
            <div className="Blog_container_divided_box_wrapper">
              <h5 className="Blog_container_divided_box_wrapper_date">
                November 16, 2014
              </h5>
              <h3 className="Blog_container_divided_box_wrapper_title">
                Three Pillars of Users Delight
              </h3>
              <p className="Blog_container_divided_box_wrapper_text">
                Delight can be experienced viscerally, behaviourally, and
                reflectively. A great design is ...
              </p>
              <div className="Blog_container_divided_box_wrapper_tags">
                <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="red"
                >
                  Research
                </h4>
                <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="green"
                >
                  UI UX
                </h4>
              </div>
            </div>
          </div>

          <div className="Blog_container_divided_box">
            <img src={User_Delight} alt="" />
            <div className="Blog_container_divided_box_wrapper">
              <h5 className="Blog_container_divided_box_wrapper_date">
                September 24, 2017
              </h5>
              <h3 className="Blog_container_divided_box_wrapper_title">
                UX Mapping Methods
              </h3>
              <p className="Blog_container_divided_box_wrapper_text">
                Visual-design principles can be applied consistently throughout
                the process of creating a polished UX map...
              </p>
              <div className="Blog_container_divided_box_wrapper_tags">
                <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="red"
                >
                  Research
                </h4>
                <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="green"
                >
                  UI Design
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="Blog_container_united">
          <img src={Agile_Devlopment_Blog} alt="" />
          <div className="Blog_container_united_box_wrapper">
            <h5 className="Blog_container_divided_box_wrapper_date">
              March 13, 2014
            </h5>
            <h3 className="Blog_container_divided_box_wrapper_title">
            Agile Development Projects and Usability
              </h3>
              <p className="Blog_container_divided_box_wrapper_text">
              Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. 
              </p>
              <div className="Blog_container_divided_box_wrapper_tags">
              <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="Purple"
                >
                  Programming
                </h4>
                <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="light_blue"
                >
                  Research
                </h4>
                <h4
                  className="Blog_container_divided_box_wrapper_tag_text"
                  id="red"
                >
                  Developments
                </h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
