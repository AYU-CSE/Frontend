import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";

import ResourceBoard from "../../pages/Communities/ResourceBoard/ResourceBoard";
import ResourceBoardDetail from "../../pages/Communities/ResourceBoard/ResourceBoardDetail";
import OpenBoard from "../../pages/Communities/OpenBoard/openBoard";
import OpenBoardDetail from "../../pages/Communities/OpenBoard/openBoardDetail";
import EditPost from "../../pages/Communities/EditPost/EditPost";

import Curriculum from "../../pages/Departments/Curriculum/Curriculum";
import DepartmentInfo from "../../pages/Departments/DepartmentInfo/DepartmentInfo";
import Notices from "../../pages/Notices/Notices/Notices";
import ProfessorInfo from "../../pages/Professors/ProfessorsInfo/ProfessorInfo";
import Notfound from "../../pages/Notfound/Notfound";
import LoginPage from "../../pages/Login/LoginPage";
import LectureRoom from "../../pages/StudentServices/LectureRoom/LectureRoom";
import StudyRoom from "../../pages/StudentServices/StudyRoom/StudyRoom";
import TimeTable from "../../pages/StudentServices/LectureRoom/TimeTable";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/open-board" element={<OpenBoard />} />
      <Route path="/open-board/:id" element={<OpenBoardDetail />} />
      <Route path="/resources" element={<ResourceBoard />} />
      <Route path="/resources/:id" element={<ResourceBoardDetail />} />
      <Route path="/community/edit-post" element={<EditPost />} />

      <Route path="/department-Info" element={<DepartmentInfo />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/professor-Info" element={<ProfessorInfo />} />
      <Route path="/lecture-room" element={<LectureRoom />} />
      <Route path="/time-table" element={<TimeTable />} />
      <Route path="/study-room" element={<StudyRoom />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
