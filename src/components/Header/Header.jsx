import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Anyang_University_CSE_Logo.png";
import Logo2 from "../../assets/Anyang_University_CSE_Logo2.png";
import "./Header.css";

const Header = ({ bgWhiteColor = false }) => {
  const [isHover, setIsHover] = useState(true);
  const [logo, setLogo] = useState(Logo1);
  const [headerHeight, setHeaderHeight] = useState(110);
  const minHeight = 50; // 축소된 최소 높이
  const maxHeight = 110; // 기본 최대 높이

  const handleMouseEnter = () => {
    setIsHover(true);
    setLogo(Logo1);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setLogo(Logo2);
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

  console.log("bgWhiteColor:", bgWhiteColor);

  return (
    <div
      className={`Header ${isHover ? "Header_hover" : "Header_shrink"}
      ${bgWhiteColor ? " bgWhite" : "var(--color-main)"} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // // 스크롤 옵션 적용
      // style={{
      //   height: `${headerHeight}px`,
      // }}
    >
      <Link to={"/"} className="header_left">
        <img src={logo} alt="Logo"></img>
      </Link>
      <ul className="header_center">
        <li>
          <Link to={"/professor-Info"}>교수 소개</Link>
        </li>
        <li>
          <Link to={"/department-Info"}>학과 소개</Link>
        </li>
        <li>
          <Link to={"/student-Service"}>강의실</Link>
        </li>
        <li>
          <Link to={"/notices"}>공지 사항</Link>
        </li>
        <li>
          <Link to={"/community"}>커뮤니티</Link>
        </li>
      </ul>
      <ul className="header_right">
        <li>
          <Link to={"/"} className="header_right_home">
            HOME
          </Link>
        </li>
        <li>
          <Link to={"https://www.anyang.ac.kr/"} className="header_right_AYU">
            AYU
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="header_right_LOGIN">
            LOGIN
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
