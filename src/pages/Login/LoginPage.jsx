import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Logo from "../../assets/Anyang_University_CSE_Logo.png";
import "./LoginPage.css";
import FindIDModal from "./FindIDModal";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(null);
  const [findUser, setFindUser] = useState(false);

  const onSubmit = () => {
    if (!id.trim()) {
      idRef.current.focus();
      return;
    }
    if (!password.trim()) {
      passwordRef.current.focus();
      return;
    }

    console.log("로그인 시도: ", id, password);
    //로그인 로직 추가 (API 요청)
  };

  const onKeydown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
    setFindUser(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFindUser(false);
  };

  if (findUser) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="LoginPage">
      <Link to={"/"} className="logo">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <div className="login_blur"></div>
      <div className="login_body">
        <section className="login_title">로그인</section>
        <input
          className="login_id"
          ref={idRef}
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onKeyDown={onKeydown}
        ></input>
        <input
          className="login_pw"
          ref={passwordRef}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={onKeydown}
        ></input>
        <section className="login_checkbox">
          <input type="checkbox" />
          <p>자동 로그인</p>
        </section>
        <button className="login_button" onClick={onSubmit}>
          로그인
        </button>
        <section className="login_find">
          <button className="login_find_id" onClick={() => openModal("findId")}>
            아이디 찾기
          </button>
          <button
            className="login_find_pw"
            onClick={() => openModal("findPasswd")}
          >
            비밀번호 찾기
          </button>
        </section>
      </div>
      {isModalOpen && (
        <FindIDModal onClose={closeModal} initialMode={modalMode} />
      )}
    </div>
  );
};

export default LoginPage;
