import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ResourceBoard from "../../pages/Communities/ResourceBoard/ResourceBoard";
import OpenBoard from "../../pages/Communities/OpenBoard/openBoard";
import OpenBoardDetail from "../../pages/Communities/OpenBoard/openBoardDetail";
import DepartmentInfo from "../../pages/Departments/DepartmentInfo/DepartmentInfo";
import ProfessorInfo from "../../pages/Professors/ProfessorsInfo/ProfessorInfo";
import StudentService from "../../pages/StudentServices/StudentService/StudentService";
import Notfound from "../../pages/Notfound/Notfound";
import LoginPage from "../../pages/Login/LoginPage";
import AcademicCalendar from "../../pages/Notices/AcademicCalendar/AcademicCalendar";
import Announcement from "../../pages/Notices/Announcement/Announcement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/community" element={<OpenBoard />} /> */}
      <Route path="/community" element={<ResourceBoard />} />

      <Route path="/open-board/:id" element={<OpenBoardDetail />} />

      <Route path="/department-Info" element={<DepartmentInfo />} />

      <Route path="/announcement" element={<Announcement />} />
      <Route path="/academic-calendar" element={<AcademicCalendar />} />

      <Route path="/professor-Info" element={<ProfessorInfo />} />

      <Route path="/student-Service" element={<StudentService />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
