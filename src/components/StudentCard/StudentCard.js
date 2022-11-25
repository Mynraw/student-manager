import React from "react";
import PersonImg from "../../images/person-img.png";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <div className="img-container">
        <img src={PersonImg} alt="person" />
      </div>
      <div className="student-info">
        <p>
          Student: <span>{student.studentInput}</span>
        </p>
        <p>
          Course: <span>{student.studentCourseInput}</span>
        </p>
        <p>
          Instructor: <span>{student.studentInstructorInput}</span>
        </p>
        <p>
          Score: <span>{student.studentScoreInput}</span>
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
