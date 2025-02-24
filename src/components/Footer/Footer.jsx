import "./Footer.css";
import Logo from "../../assets/Anyang_University_CSE_Logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_top">
        <img src={Logo} className="footer_left"></img>
        <div className="footer_right">
          <p>
            안양캠퍼스 14028 경기 안양시 만악구 삼덕로 37번길 22 (안양동,
            안양대학교) | TEL 031-467-0700
          </p>
          <p>
            강화캠퍼스 23038 인천광역시 강화군 불은면 중앙로 602-14 | TEL
            032-930-6000
          </p>
          <p>COPYRIGHT(C) ANYANG UNIVERSITY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
      <div className="footer_bottom"></div>
    </div>
  );
};

export default Footer;
