import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Hamburger from "../../../components/Hamburger/Hamburger";
import openBoardData from "../openBoardData";

import styles from "./openBoard.module.css";

const OpenBoard = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [allItems, setAllItems] = useState(openBoardData);
  const [selectedCategory, setSelectedCategory] = useState("전체 게시판");
  const myUserName = "이영희"; // 임시 유저 이름
  const navigate = useNavigate();

  useEffect(() => {
    // 추후 백엔드 API와 연결 시 fetch 요청으로 변경 예정
    setAllItems(openBoardData);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleMyBoardClick = () => {
    setSelectedCategory("나의 게시판");
    setCurrentPage(1);
  };

  const filteredItems = allItems
    .filter((item) => {
      const matchesCategory =
        selectedCategory === "전체 게시판" ||
        selectedCategory === "나의 게시판" ||
        item.board === selectedCategory;

      const matchesMyBoard =
        selectedCategory === "나의 게시판" ? item.author === myUserName : true;

      const matchesSearch =
        filteredSearch === "" ||
        (searchCategory === "title" && item.title.includes(filteredSearch)) ||
        (searchCategory === "author" && item.author.includes(filteredSearch)) ||
        (searchCategory === "content" &&
          item.content.includes(filteredSearch)) ||
        (searchCategory === "all" &&
          (item.title.includes(filteredSearch) ||
            item.author.includes(filteredSearch) ||
            item.content.includes(filteredSearch)));

      return matchesCategory && matchesMyBoard && matchesSearch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  const handlePostClick = (id) => {
    navigate(`/open-board/${id}`);
  };

  return (
    <div className={styles.community}>
      <Header />
      <main className={styles.community_main}>
        <header className={styles.community_header}>
          <div>
            커뮤니티 &gt; <span>오픈게시판</span>
          </div>
        </header>

        {/* 카테고리 선택 */}
        <div className={styles.community_category}>
          <div className={styles.community_category_left}>
            {[
              "전체 게시판",
              "학업 게시판",
              "취업 게시판",
              "프로젝트 게시판",
              "정보 게시판",
            ].map((category) => (
              <div
                key={category}
                className={`${styles.community_category_bg} ${selectedCategory === category ? styles.active : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div
            className={`${styles.community_category_right} ${styles.community_category_bg} ${
              selectedCategory === "나의 게시판" ? styles.active : ""
            }`}
            onClick={handleMyBoardClick}
          >
            나의 게시판
          </div>
        </div>

        {/* 게시글 목록 */}
        <table className={styles.community_table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>댓글</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <tr
                  key={item.id}
                  className={styles.community_pointer}
                  onClick={() => handlePostClick(item.id)}
                >
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>{item.comment}</td>
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

        {/* 검색 필터 */}
        <div className={styles.open_community_search}>
          <select
            className={styles.community_category_select}
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="title">제목</option>
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
        <Hamburger />
      </main>
      <Footer />
    </div>
  );
};

export default OpenBoard;
