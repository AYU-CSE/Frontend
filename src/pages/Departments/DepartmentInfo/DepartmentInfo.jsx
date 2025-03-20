// 학과 소개 (main)
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Department from "../Department/Department";
import IdolTalent from "../Department/IdolTalent";
import Direction from "../Department/Direction";
import Course from "../Department/Course";
import Qualifications from "../Department/Qualifications";
import "./DepartmentInfo.css"

const DepartmentInfo = () => {
  return (
    <div className="DepartmentInfo">
      <Nav/>
      <div className="Text">
      <p style={{ display: "inline-block", fontSize: "30px", fontWeight: "bold" }}>학과 소개</p>
      <p style={{ display: "inline-block", margin: "0 10px", fontWeight: "bold", fontSize: "30px" }}>&gt;</p>
      <p style={{ display: "inline-block", fontSize: "20px", fontWeight: "bold" }}>학과 안내</p>
      </div>
      <Department/>
      <IdolTalent/>
      <Direction/>
      <Course/>
      <Qualifications/>
      <Footer/>
    </div>
  )
};

export default DepartmentInfo;
