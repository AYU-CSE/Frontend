import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Anyang_University_CSE_Logo.png";
import Logo2 from "../../assets/Anyang_University_CSE_Logo2.png";
import "./Nav.css";

const Nav = ({ bgWhiteColor = false }) => {
  const [isHover, setIsHover] = useState(true);
  const [logo, setLogo] = useState(Logo1);
  const [headerHeight, setHeaderHeight] = useState(110);
  const minHeight = 70; // 축소된 최소 높이
  const maxHeight = 150; // 기본 최대 높이
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    setLogo(Logo1);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setLogo(Logo2);
    setIsMenuOpen(false);
  };

  const handleCategoryEnter = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(
        maxHeight - (scrollY / 30) * (maxHeight - minHeight),
        minHeight
      );
      setHeaderHeight(newHeight);

      if (scrollY > 30) {
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
    <div className={`nav-container ${isMenuOpen ? "blur-background" : ""}`}>
      <div
        className={`Nav ${isHover ? "Nav_hover" : "Nav_shrink"}
      ${bgWhiteColor ? " bgWhite" : "var(--color-main)"} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // // 스크롤 옵션 적용
        // style={{
        //   height: `${headerHeight}px`,
        // }}
      >
        <Link to={"/"} className="nav_left">
          <img src={logo} alt="Logo"></img>
        </Link>
        <ul className="nav_center">
          <li onMouseEnter={handleCategoryEnter}>
            <Link to={"/professor-Info"}>교수 소개</Link>
            <ul className="dropdown">
              <li>
                <Link to={"/professors"}>교수진</Link>
              </li>
              <li>
                <Link to={"/past-professor"}>역대 교수</Link>
              </li>
            </ul>
          </li>
          <li onMouseEnter={handleCategoryEnter}>
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
          <li onMouseEnter={handleCategoryEnter}>
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
          <li onMouseEnter={handleCategoryEnter}>
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
          <li onMouseEnter={handleCategoryEnter}>
            <Link to={"/community"}>커뮤니티</Link>
            <ul className="dropdown">
              <li>
                <Link to={"/openboard"}>오픈 게시판</Link>
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
            <Link to={"/login"} className="nav_right_LOGIN">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
