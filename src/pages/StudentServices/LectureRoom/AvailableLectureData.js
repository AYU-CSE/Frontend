const lectureData = [ //MON TUE WEN THU FRI
    {
      room: "301호",
      floor: "3층",
      lectures: [
        { name: "프로그래밍입문", professor: "김성규", section: 1, grade: 1, day: "MON", time: "16:00", period: 1, status: "강의중" },
        { name: "프로그래밍입문", professor: "김성규", section: 1, grade: 1, day: "WEN", time: "16:00", period: 2, status: "강의중" },

        { name: "데이터베이스프로그래밍", professor: "김성규", grade: 3, day: "MON", time: "17:00", period: 1, status: "강의중" },
        { name: "데이터베이스프로그래밍", professor: "김성규", grade: 3, day: "THU", time: "16:00", period: 2, status: "강의중" },

        { name: "임베디드제어시스템", professor: "권희용", grade: 3, day: "TUE", time: "14:00", period: 1, status: "강의중" },
        { name: "임베디드제어시스템", professor: "권희용", grade: 3, day: "THU", time: "11:00", period: 2, status: "강의중" },

        { name: "프로그래밍입문", professor: "김성규", grade: 1, day: "MON", time: "16:00", period: 1, status: "강의중" },

        { name: "캡스톤디자인I", professor: "박성순", section: 1, grade: 4, day: "WEN", time: "12:00", period: 3, status: "강의중" },
        { name: "캡스톤디자인I", professor: "박성순", section: 2, grade: 4, day: "WEN", time: "13:00", period: 3, status: "강의중" },
        
        { name: "데이터구조", professor: "송인식", grade: 2, section: 1, day: "FRI", time: "09:00", period: 3, status: "강의중" },

      ]
    },
    {
      room: "306호",
      floor: "3층",
      lectures: [
        { name: "리눅스시스템", professor: "하은용", grade: 2, section: 1, day: "TUE", time: "11:00", period: 2, status: "강의중" },
        { name: "리눅스시스템", professor: "하은용", grade: 2, section: 1, day: "WEN", time: "11:00", period: 1, status: "강의중" },
        { name: "리눅스시스템", professor: "하은용", grade: 2, section: 2, day: "WEN", time: "14:00", period: 1, status: "강의중" },
        { name: "리눅스시스템", professor: "하은용", grade: 2, section: 2, day: "THU", time: "11:00", period: 2, status: "강의중" },

        { name: "전공세미나I", professor: "하은용", grade: 2, day: "WEN", time: "11:00", period: 1, status: "강의중" },

        { name: "컴퓨터구조", professor: "송인식", grade: 2, section: 1, day: "THU", time: "14:00", period: 3, status: "강의중" },
        { name: "컴퓨터구조", professor: "송인식", grade: 2, section: 2, day: "FRI", time: "13:00", period: 3, status: "강의중" },
      ]
    },
    {
      room: "601호",
      floor: "6층",
      lectures: [
      ]
    },
    {
        room: "606호",
        floor: "6층",
        lectures: [
          { name: "프로그래밍언어구성론", professor: "황진경", grade: 3, day: "THU", time: "15:00", period: 3, status: "강의중" },
        ]
      }
  ];
  
  export default lectureData;
  