import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Anyang_University_CSE_Logo.png";
import Logo2 from "../../assets/Anyang_University_CSE_Logo2.png";
import "./Nav.css";

const Nav = ({ bgWhiteColor = false }) => {
  const { isLogin } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(true);
  const [isDropdownOpen, setIsDropdwonOpen] = useState(false);
  const [logo, setLogo] = useState(Logo1);

  const handleMouseEnter = () => {
    setIsHover(true);
    setLogo(Logo1);
  };

  const handleMouseLeave = () => {
    if (window.scrollY === 0) return;
    setIsHover(false);
    setLogo(Logo2);
  };

  const handleMouseEnterNav = () => {
    setIsDropdwonOpen(true);
  };

  const handleMouseLeaveNav = () => {
    setIsDropdwonOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHover(false);
        setLogo(Logo2);
      } else {
        setIsHover(true);
        setLogo(Logo1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-container">
      <div
        className={`Nav 
          ${isHover ? "Nav_hover" : "Nav_shrink"} 
          ${isDropdownOpen ? "Nav_expand" : ""}
          ${bgWhiteColor ? " bgWhite" : "var(--color-main)"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={"/"} className="nav_left">
          <img src={logo} alt="Logo"></img>
        </Link>

        <ul
          className="nav_center"
          onMouseEnter={handleMouseEnterNav}
          onMouseLeave={handleMouseLeaveNav}
        >
          <li>
            <Link to={"/professor-Info"}>교수 소개</Link>
            <ul className={"dropdown"}>
              <li>
                <Link to={"/professor-Info"}>교수진</Link>
              </li>
              <li>
                <Link to={"/past-professor"}>역대 교수</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/department-Info"}>학과 소개</Link>
            <ul className="dropdown">
              <li>
                <Link to={"/department"}>학과 안내</Link>
              </li>
              <li>
                <Link to={"/curriculum"}>교과목 소개</Link>
              </li>
              <li>
                <Link to={"/lab"}>LAB</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/student-Service"}>학생 서비스</Link>
            <ul className="dropdown">
              <li>
                <Link to={"/lecture-room"}>강의실</Link>
              </li>
              <li>
                <Link to={"/study-room"}>열람실 및 스터디룸</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/notices"}>공지</Link>
            <ul className="dropdown">
              <li>
                <Link to={"/announcement"}>공지사항</Link>
              </li>
              <li>
                <Link to={"/events"}>행사</Link>
              </li>
              <li>
                <Link to={"/academic-calendar"}>학사일정</Link>
              </li>
              <li>
                <Link to={"/internship"}>인턴</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/open-board"}>커뮤니티</Link>
            <ul className="dropdown">
              <li>
                <Link to={"/open-board"}>오픈 게시판</Link>
              </li>
              <li>
                <Link to={"/resources"}>자료실</Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="nav_right">
          <li>
            <Link to={"/"} className="nav_right_home">
              HOME
            </Link>
          </li>
          <li>
            <Link to={"https://www.anyang.ac.kr/"} className="nav_right_AYU">
              AYU
            </Link>
          </li>
          <li>
            {isLogin ? (
              <Link to={"/login"} className="nav_right_LOGIN">
                LOGIN
              </Link>
            ) : (
              <button className="nav_right_LOGOUT">LOGOUT</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
