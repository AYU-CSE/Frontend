import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./Community.css";

// 커뮤니티 (자료실)
const Community = () => {
  return (
    <div className="community">
      <Header />
      <main className="community_main">
        <header className="community_header">
          <div>커뮤니티 &gt; <span>자료실</span></div>
        </header>

        {/* 검색창 */}
        <div className="community_search">
          <select className="category_select">
            <option value="all">전체</option>
            <option value="title">제목</option>
            <option value="author">작성자</option>
          </select>
          <input type="text" placeholder="검색어를 입력해 주세요" />
          <button className="search_button">검색</button>
        </div>

        {/* 자료실 테이블 */}
        <section className="community_table_section">
          <table className="community_table">
            <thead>
              <tr>
                <th>No.</th>
                <th>제목</th>
                <th>과목명</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((_, index) => (
                <tr key={index} className="community_pointer">
                  <td>{index}</td>
                  <td>SDL 소스코드 📝</td>
                  <td>객체지향프로그래밍</td>
                  <td>이상홍</td>
                  <td>2025-02-15</td>
                  <td>124</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
