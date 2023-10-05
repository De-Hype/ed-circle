import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./utils/mediaQueries.css";
import "./utils/TabScreen.css";
import './utils/MidScreen.css';
import './utils/PhoneScreen.css'
import Account from "./Pages/Account";
import Courses from "./Pages/Courses";
import CoursesResult from "./Pages/CoursesResult";
import Home from "./Pages/Home";
import InstructorLogIn from "./Pages/InstructorLogIn";
import InstructorRegister from "./Pages/InstructorRegister";
import JoinUs from "./Pages/JoinUs";
import Payment from "./Pages/Payment";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/search"} element={<CoursesResult />} />
          <Route exact path={"/auth"} element={<JoinUs />} />
          <Route
            exact
            path={"/tutor/register"}
            element={<InstructorRegister />}
          />
          <Route exact path={"/tutor/login"} element={<InstructorLogIn />} />
          <Route exact path={"/account"} element={<Account />} />
          <Route exact path={"/courses"} element={<Courses />} />
          <Route exact path={"/payment"} element={<Payment />} />
          <Route exact path={"/checkout"} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
