import React from "react";
import StudentCard from "../student-card/StudentCard";

const StudentList = ({ studentList }) => {
  return (
    <>
      {studentList.map((student, index) => (
        <StudentCard student={student} key={index} />
      ))}
    </>
  );
};

export default StudentList;
