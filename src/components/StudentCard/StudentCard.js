import React from "react";

const StudentCard = ({ student }) => {
  return (
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
  );
};

export default StudentCard;
