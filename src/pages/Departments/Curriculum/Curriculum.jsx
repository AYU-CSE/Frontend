// 교과목 소개
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import CurriculumTable from "./CurriculumTable";
const Curriculum = () => {
  return (
    <div>
      <div className="Text">
      <p style={{ display: "inline-block", fontSize: "30px", fontWeight: "bold" }}>학과 소개</p>
      <p style={{ display: "inline-block", margin: "0 10px", fontWeight: "bold", fontSize: "30px" }}>&gt;</p>
      <p style={{ display: "inline-block", fontSize: "20px", fontWeight: "bold" }}>교과 과정 안내</p>
      </div>
      <Nav/>
      <CurriculumTable/>
      <Footer/>
    </div>
  )
};

export default Curriculum;
