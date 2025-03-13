// 교수 소개 (main)
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Professors from "../../../components/Professors/Professors";
import "./ProfessorInfo.css";

const ProfessorInfo = () => {

  return (
    <div className="ProfessorInfo">
    <Nav/>
      <div className="Text">
      <p style={{ display: "inline-block", fontSize: "30px", fontWeight: "bold" }}>교수 소개</p>
      <p style={{ display: "inline-block", margin: "0 10px", fontWeight: "bold", fontSize: "30px" }}>&gt;</p>
      <p style={{ display: "inline-block", fontSize: "20px", fontWeight: "bold" }}>교수진</p>
      </div>
      <Professors/>
    <Footer/>
    </div>
  );
};

export default ProfessorInfo;
