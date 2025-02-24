import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./Community.css";

// 커뮤니티 (main)
const Community = () => {
  return (
    <page>
      <Header/>
      <main className="community_main">
        <header></header>
        <search>

          <div> 검색 카테고리 </div>
          {/* 검색창 */}
          <input type="text" /> 
          <button>검색 버튼</button>
        </search>
      </main>
      <Footer />
    </page>
  );
};

export default Community;
