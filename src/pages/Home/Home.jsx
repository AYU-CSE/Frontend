import { useState, useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

const Home = () => {
  const [scale, setScale] = useState(1); // 글자 크기
  const [textColor, setTextColor] = useState("#000000"); // 기본 글자 색상 (검은색)
  const [bgColor, setBgColor] = useState(
    "radial-gradient(circle, white, #d1e3ff)"
  );
  const [fadeInSection2, setFadeInSection2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const transitionPoint = 600; //스크롤시 최대 크기
      const resetThreshold = 100;

      //글자 크기 (최대 1.5배)
      const newScale = Math.min(1 + scrollY * 0.002, 3);

      //배경색 변화
      const fadeRatio = Math.min(scrollY / transitionPoint, 1);
      const newBgColor =
        scrollY <= resetThreshold
          ? "radial-gradient(circle, white, #d1e3ff)"
          : `linear-gradient(#b0cfff, #b0cfff)`;

      //글자색 변화 (section_2 색상으로 변화)
      const newTextColor =
        scrollY <= resetThreshold
          ? "#000000"
          : `rgb(${176 - fadeRatio * 26}, ${207 - fadeRatio * 33}, 255)`;

      //section_2 투명도 (section_1 사라질 때 section_2 등장)
      const newFadeInSection2 = Math.min(scrollY / transitionPoint, 1);

      setScale(newScale);
      setBgColor(newBgColor);
      setTextColor(newTextColor);
      setFadeInSection2(newFadeInSection2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Home">
      <Nav bgWhiteColor={true} />
      <section
        className="section_1"
        style={{
          transform: `scale(${scale})`,
          color: textColor,
          background: bgColor,
        }}
      >
        <h1>컴퓨터공학과</h1>
        <p>미래 정보와 첨단 산업사회를 능동적으로 선도함으로써 </p>
        <p>인류 사회의 발전에 기여하는 전문 인력의 양성</p>
      </section>
      <section
        className="section_2"
        style={{
          opacity: fadeInSection2,
        }}
      >
        section_2
      </section>
      <Footer bgColor={true} />
    </div>
  );
};

export default Home;
