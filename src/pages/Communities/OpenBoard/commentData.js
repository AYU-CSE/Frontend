const commentData = [
  {
    id: 1,
    author: "김규일",
    content: "좋은 글 감사합니다!",
    likes: 3,
    replies: [
      { id: 101, author: "이승민", content: "저도 동감합니다!", likes: 1 },
    ],
  },
  {
    id: 2,
    author: "박지훈",
    content: "도움이 많이 됐어요.",
    likes: 2,
    replies: [],
  },
  {
    id: 3,
    author: "이수연",
    content: "이런 정보는 정말 유익하네요. 감사합니다!",
    likes: 5,
    replies: [
      {
        id: 102,
        author: "최민수",
        content: "맞아요! 더 많은 정보 공유 부탁드려요!",
        likes: 2,
      },
      {
        id: 103,
        author: "정희진",
        content: "좋은 내용이네요. 더 깊이 공부해봐야겠어요!",
        likes: 3,
      },
    ],
  },
];

export default commentData;
