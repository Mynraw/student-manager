import React from "react";
import StudentCard from "../student-card/StudentCard";

const StudentList = ({
  studentList,
  filteredStudent,
  // filteredStudentList,
  // inputName,
  getStudentId,
}) => {
  return (
    <>
      {studentList
        .filter(
          (student) =>
            student.studentName
              .trim()
              .toLowerCase()
              .includes(filteredStudent.trim().toLowerCase()) ||
            student.studentInstructor
              .trim()
              .toLowerCase()
              .includes(filteredStudent.trim().toLowerCase()) ||
            student.studentCourse
              .trim()
              .toLowerCase()
              .includes(filteredStudent.trim().toLowerCase()) ||
            student.studentScore
              .toString()
              .trim()
              .toLowerCase()
              .includes(filteredStudent.trim().toLowerCase())
        )
        .map((student) => (
          <StudentCard
            student={student}
            key={student.id}
            getStudentId={getStudentId}
          />
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
