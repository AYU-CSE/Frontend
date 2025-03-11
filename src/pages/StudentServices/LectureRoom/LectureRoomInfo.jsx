import { useState, useEffect } from "react";

const LectureRoomInfo = () => {
    return (
        <div className="LectureRoomInfo">
            <div className="LectureInfo">
                <div className="lecture-room-num">호실</div>
                <div className="lecture-department">과목</div>
                <div className="lecture-time">시간</div>
                <div className="lecture-statement">강의중</div>
            </div>
            <button className="LectureSchedule" />
        </div>
    );
};

export default LectureRoomInfo;