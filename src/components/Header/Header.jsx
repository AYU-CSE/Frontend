import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Anyang_University_CSE_Logo.png";
import Logo2 from "../../assets/Anyang_University_CSE_Logo2.png";
import "./Header.css";

const Header = () => {
  const [isHover, setIsHover] = useState(true);
  const [logo, setLogo] = useState(Logo1);

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
      if (window.scrollY > 200) {
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
    <div
      className={isHover ? "Header Header_hover" : "Header Header_shrink"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
