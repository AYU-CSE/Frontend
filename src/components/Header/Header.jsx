import Logo from "../../assets/Anyang_University_CSE_Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  const handleIsHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div className="Header">
      <img src={Logo} className="header_left"></img>
      <div className="header_center">
        <li>
          <Link className="header_center_professorInfo" to={"/professor-Info"}>
            교수 소개
          </Link>
        </li>
        <li>
          <Link
            className="header_center_departmentInfo"
            to={"/department-Info"}
          >
            학과 소개
          </Link>
        </li>
        <li>
          <Link className="header_center_lectureRoom" to={"/student-Service"}>
            강의실
          </Link>
        </li>
        <li>
          <Link className="header_center_notice" to={"/notices"}>
            공지 사항
          </Link>
        </li>
        <li>
          <Link className="header_center_community" to={"/community"}>
            커뮤니티
          </Link>
        </li>
      </div>
      <div className="header_right">
        <li>
          <Link className="header_right_home" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="header_right_AYU" to={"https://www.anyang.ac.kr/"}>
            AYU
          </Link>
        </li>
        <li>
          <Link className="header_right_Login" to={"/login"}>
            LOGIN
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
