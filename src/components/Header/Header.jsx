import Logo from "../../assets/Anyang_University_CSE_Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} className="header_left"></img>
      <div className="header_center">
        <li className="header_center_professorInfo">교수 소개</li>
        <li className="header_center_departmentInfo">학과 소개</li>
        <li className="header_center_lectureRoom">강의실</li>
        <li className="header_center_notice">공지 사항</li>
        <li className="header_center_community">커뮤니티</li>
      </div>
      <div className="header_right">
        <li className="header_right_home">Home</li>
        <li className="header_right_AYU">AYU</li>
        <li className="header_right_Login">LOGIN</li>
      </div>
    </div>
  );
};

export default Header;
