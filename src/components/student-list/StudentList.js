import React from "react";
import StudentCard from "../student-card/StudentCard";

const StudentList = ({
  studentList,
  filteredStudent,
  // filteredStudentList,
  // inputName,
}) => {
  return (
    <>
      {studentList
        .filter((student) =>
          student.studentInput
            .trim()
            .toLowerCase()
            .includes(filteredStudent.trim().toLowerCase())
        )
        .map((student, index) => (
          <StudentCard student={student} key={index} />
        ))}
      {/* alternatif yol */}
      {/* {inputName.length
        ? filteredStudentList.map((student, index) => (
            <StudentCard student={student} key={index} />
          ))
        : studentList.map((student, index) => (
            <StudentCard student={student} key={index} />
          ))} */}
    </>
  );
};

export default StudentList;
