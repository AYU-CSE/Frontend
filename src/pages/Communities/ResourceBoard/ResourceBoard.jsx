import React, { useState, useMemo, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Hamburger from "../../../components/Hamburger/Hamburger";
import resourceBoardData from "../resourceBoardData";
import styles from "../communityCommon.module.css";

const ResourceBoard = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [allItems, setAllItems] = useState(resourceBoardData);

  useEffect(() => {
    // 추후 백엔드 API와 연결 시 fetch 요청으로 변경 예정
    setAllItems(resourceBoardData);
  }, []);

  const filteredItems = useMemo(() => {
    return allItems
      .filter((item) => {
        if (filteredSearch === "") return true;
        switch (searchCategory) {
          case "title":
            return item.title.includes(filteredSearch);
          case "lecture":
            return item.lecture.includes(filteredSearch);
          case "author":
            return item.author.includes(filteredSearch);
          case "content":
            return item.content.includes(filteredSearch);
          default:
            return (
              item.title.includes(filteredSearch) ||
              item.lecture.includes(filteredSearch) ||
              item.author.includes(filteredSearch) ||
              item.content.includes(filteredSearch)
            );
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [allItems, filteredSearch, searchCategory]);

  // 현재 페이지 데이터
  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지 변경
  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setFilteredSearch(searchTerm);
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.community}>
      <Header />
      <main className={styles.community_main}>
        <header className={styles.community_header}>
          <div>
            커뮤니티 &gt; <span>자료실</span>
          </div>
        </header>

        {/* 검색창 */}
        <div className={styles.community_search}>
          <select
            className={styles.community_category_select}
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
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
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <button
            className={styles.community_search_button}
            onClick={handleSearch}
          >
            검색
          </button>
        </div>

        {/* 자료실 테이블 */}
        <table className={styles.community_table}>
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
                <tr key={item.id} className={styles.community_pointer}>
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
                <td colSpan="6" className={styles.community_no_results}>
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* 페이지네이션 */}
        <div className={styles.community_pagination}>
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
                className={currentPage === index + 1 ? styles.active : ""}
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
        <Hamburger />
      </main>
      <Footer />
    </div>
  );
};

export default ResourceBoard;
