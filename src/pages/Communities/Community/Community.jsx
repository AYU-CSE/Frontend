import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./Community.css";

const Community = () => {
  const itemsPerPage = 15;
  const totalItems = 40; // 전체 데이터 개수 (나중에 백에서 받아와야 함)

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // 검색창에 입력한 값
  const [filteredSearch, setFilteredSearch] = useState(""); // 실제 검색 실행된 값

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 게시글 데이터
  const allItems = [...Array(totalItems)].map((_, index) => ({
    id: index + 1,
    title: "SDL 소스코드",
    lecture: "객체지향프로그래밍",
    author: "이상홍",
    date: "2025-02-15",
    views: 124,
  }));

  // 검색어를 포함하는 데이터 필터링
  const filteredItems = allItems.filter(
    (item) => item.id.toString().includes(filteredSearch) // 검색된 값이 포함된 항목만 필터링
  );

  // 현재 페이지의 데이터 필터링
  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지 이동
  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  // 검색 실행
  const handleSearch = () => {
    setFilteredSearch(searchTerm);
    setCurrentPage(1);
  };

  // 엔터 키 입력 시 검색
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="community">
      <Header />
      <main className="community_main">
        <header className="community_header">
          <div>
            커뮤니티 &gt; <span>자료실</span>
          </div>
        </header>

        {/* 검색창 */}
        <div className="community_search">
          <select className="category_select">
            <option value="all">전체</option>
            <option value="title">제목</option>
            <option value="lecture">강의명</option>
            <option value="author">작성자</option>
            <option value="content">내용</option>
          </select>
          <input
            type="text"
            placeholder="검색어 입력"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress} // 엔터 키 감지
          />
          <button className="search_button" onClick={handleSearch}>
            검색
          </button>
        </div>

        {/* 자료실 테이블 */}
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
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <tr key={item.id} className="community_pointer">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.lecture}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no_results">
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* 페이지네이션 */}
        <div className="community_pagination">
          {currentPage > 1 && (
            <a href="#" onClick={(e) => handlePageChange(e, currentPage - 1)}>
              &lt;
            </a>
          )}

          {[...Array(Math.ceil(filteredItems.length / itemsPerPage))].map(
            (_, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => handlePageChange(e, index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </a>
            )
          )}

          {currentPage < Math.ceil(filteredItems.length / itemsPerPage) && (
            <a href="#" onClick={(e) => handlePageChange(e, currentPage + 1)}>
              &gt;
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
