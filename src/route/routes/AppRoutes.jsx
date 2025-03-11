import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Community from "../../pages/Communities/Community/Community";
import DepartmentInfo from "../../pages/Departments/DepartmentInfo/DepartmentInfo";
import Notices from "../../pages/Notices/Notices/Notices";
import ProfessorInfo from "../../pages/Professors/ProfessorsInfo/ProfessorInfo";
import StudentService from "../../pages/StudentServices/LectureRoom/LectureRoom"
import Notfound from "../../pages/Notfound/Notfound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/department-Info" element={<DepartmentInfo />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/professor-Info" element={<ProfessorInfo />} />
      <Route path="/student-Service" element={<StudentService />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
