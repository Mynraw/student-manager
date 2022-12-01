import React from "react";
import StudentCard from "../student-card/StudentCard";

const StudentList = ({ studentList, filteredStudent }) => {
  return (
    <>
      {studentList
        .filter((student) =>
          student.studentInput
            .toLowerCase()
            .includes(filteredStudent.toLowerCase())
        )
        .map((student, index) => (
          <StudentCard student={student} key={index} />
        ))}
    </>
  );
};

export default StudentList;
