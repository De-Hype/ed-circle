import Footer from "../Component/Footer";
import Header from "../Component/Header";
import results from "../assets/results.png";

const CoursesResult = () => {
  return (
    <>
      <Header />
      <div className="Courses_Results">
        <h4 className="Course_result_heading">
          Search Results For <span>Figma For Beginners</span>
        </h4>
        <div className="Course_Search_Results">
          <div className="Course_Search_Results_box">
            <img src={results} alt="" />
            <div className="Course_Search_Results_box_wrapper">
              <h4 className="Course_Search_Results_box_title">
                Figma Design For Beginners
              </h4>
              <p className="Course_Search_Results_box_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus, saepe sit sint aut, nisi ratione dignissimos
                similique cum aspernatur hic quo reiciendis quisquam quidem
                nobis numquam, aperiam ab in veritatis?
              </p>
              <div className="tag_groups">
                <span className="tags">UI</span>
                <span className="tags">UX</span>
              </div>
              <h4 className="Course_Search_Results_box_text_instructor">
                David Malan
              </h4>
            </div>
          </div>

          <div className="Course_Search_Results_box">
            <img src={results} alt="" />
            <div className="Course_Search_Results_box_wrapper">
              <h4 className="Course_Search_Results_box_title">
                Figma Design For Beginners
              </h4>
              <p className="Course_Search_Results_box_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus, saepe sit sint aut, nisi ratione dignissimos
                similique cum aspernatur hic quo reiciendis quisquam quidem
                nobis numquam, aperiam ab in veritatis?
              </p>
              <div className="tag_groups">
                <span className="tags">UI</span>
                <span className="tags">UX</span>
              </div>
              <h4 className="Course_Search_Results_box_text_instructor">
                David Malan
              </h4>
            </div>
          </div>

          
          <div className="Course_Search_Results_box">
            <img src={results} alt="" />
            <div className="Course_Search_Results_box_wrapper">
              <h4 className="Course_Search_Results_box_title">
                Figma Design For Beginners
              </h4>
              <p className="Course_Search_Results_box_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus, saepe sit sint aut, nisi ratione dignissimos
                similique cum aspernatur hic quo reiciendis quisquam quidem
                nobis numquam, aperiam ab in veritatis?
              </p>
              <div className="tag_groups">
                <span className="tags">UI</span>
                <span className="tags">UX</span>
              </div>
              <h4 className="Course_Search_Results_box_text_instructor">
                David Malan
              </h4>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesResult;
