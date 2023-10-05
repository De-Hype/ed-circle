import arrowRight from "../assets/arrowRight.svg";
import star from "../assets/star.svg";
import Avatar_One from "../assets/Avatar_One.png";
import Avatar_Two from "../assets/Avatar_Two.png";
import shoaib from "../assets/shoaib.png";

const Explore = () => {
  return (
    <div className="Explore">
      <h3 className="sub_heading">Explore Programs</h3>
      <h3 className="heading">Our Most Popular Programs</h3>
      <p className="paragraph">
        Let's join our famous class, the knowledge provided will definitely be
        useful for you.
      </p>
      <div className="explore_items">
        <div className="explore_box">
          <img src={shoaib} className="explore_box_image-1" alt="" />
          <div className="explore_box_items">
            <h3 className="explore_box_item_subheading">Design</h3>
            <div className="explore_box_heading_div">
              <h3 className="explore_box_item_heading">Figma UI UX Design</h3>
              <img src={arrowRight} alt="" />
            </div>
            <h3 className="explore_box_item_paragraph">
              Use Figma to get a job in UI Design, User Interface, User
              Experience design.
            </h3>
            <div className="explore_box_ratings">
              <h4 className="explore_ratings_number">4.3</h4>
              <div className="rating_group_starts">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h4 className="explore_rating_people_amount">(16,325)</h4>
            </div>
            <div className="explore_box_bottom">
              <div className="explore_bottom_tutor_details">
                <img src={Avatar_One} alt="" />
                <div className="explore_bottom_tutor_info">
                  <h3 className="explore_bottom_tutor_name">Jane Cooper</h3>
                  <h4 className="explore_bottom_tutor_enroll">2001 Enrolled</h4>
                </div>
              </div>
              <h3 className="explore_bottom_tutor_price">$17.84</h3>
            </div>
          </div>
        </div>

        <div className="explore_box">
          <img src={shoaib} className="explore_box_image-1" alt="" />
          <div className="explore_box_items">
            <h3 className="explore_box_item_subheading">Design</h3>
            <div className="explore_box_heading_div">
              <h3 className="explore_box_item_heading">Learn With Shoaib</h3>
              <img src={arrowRight} alt="" />
            </div>
            <h3 className="explore_box_item_paragraph">
              Design Web Sites and Mobile Apps that Your Users Love and Return
              to Again.
            </h3>
            <div className="explore_box_ratings">
              <h4 className="explore_ratings_number">3.9</h4>
              <div className="rating_group_starts">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h4 className="explore_rating_people_amount">(832)</h4>
            </div>
            <div className="explore_box_bottom">
              <div className="explore_bottom_tutor_details">
                <img src={Avatar_Two} alt="" />
                <div className="explore_bottom_tutor_info">
                  <h3 className="explore_bottom_tutor_name">Jenny Wilson</h3>
                  <h4 className="explore_bottom_tutor_enroll">2001 Enrolled</h4>
                </div>
              </div>
              <h3 className="explore_bottom_tutor_price">$8.99</h3>
            </div>
          </div>
        </div>

        <div className="explore_box">
          {/* <div className="explore_box_image-1"></div> */}
          <img src={shoaib} className="explore_box_image-1" alt="" />
          <div className="explore_box_items">
            <h3 className="explore_box_item_subheading">Design</h3>
            <div className="explore_box_heading_div">
              <h3 className="explore_box_item_heading">
                Building User Interface..
              </h3>
              <img src={arrowRight} alt="" />
            </div>
            <h3 className="explore_box_item_paragraph">
              Learn how to apply User Experience (UX) principles to your website
              designs.
            </h3>
            <div className="explore_box_ratings">
              <h4 className="explore_ratings_number">4.2</h4>
              <div className="rating_group_starts">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h4 className="explore_rating_people_amount">(125)</h4>
            </div>
            <div className="explore_box_bottom">
              <div className="explore_bottom_tutor_details">
                <img src={Avatar_One} alt="" />
                <div className="explore_bottom_tutor_info">
                  <h3 className="explore_bottom_tutor_name">Esther Howard</h3>
                  <h4 className="explore_bottom_tutor_enroll">2001 Enrolled</h4>
                </div>
              </div>
              <h3 className="explore_bottom_tutor_price">$11.70</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="explore_div_cta">
        <button className="explore_cta">Explore All Programs</button>
      </div>
    </div>
  );
};

export default Explore;
