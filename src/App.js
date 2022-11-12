// useState
import { useState } from "react";
import "./App.css";

const App = () => {
  // const studentName1 = "";
  // let studentName2 = "Arya Açıkgöz";
  // return içerisinde ternary kullanılabiliyor. for, if vb. kullanılamıyor.
  // expression gerekiyor.
  // useState
  // array olarak geldiği için destructure edilebilir.

  // ilk hali değerin kendisi, ikincisi değeri getiren/değiştiren fonksiyon
  // inputs state
  const [studentInput, setStudentInput] = useState("");
  const [studentCourseInput, setStudentCourseInput] = useState("");
  const [studentInstructorInput, setStudentInstructorInput] = useState("");
  const [studentScoreInput, setStudentScoreInput] = useState("");
  // obj state
  const [student, setStudent] = useState({});
  // error state
  const [nameError, setNameError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [instructorError, setInstructorError] = useState(false);
  const [scoreError, setScoreError] = useState(false);
  // input'taki yazı her değiştiğinde studentInput'a set'lenecek.
  // const [studentName, setStudentName] = useState("");
  // const [studentCourse, setStudentCourse] = useState("");
  // const [studentInstructor, setStudentInstructor] = useState("");
  // const [studentScore, setStudentScore] = useState("");

  // TODO: useState'leri 4'e indir, student objesini oluşturacak bir useState daha kullan.
  // obje oluştur, input'tan gelen değerleri burada tut.
  // input boş girildiği sürece uyarı verecek ve giriş kabul etmeyecek

  const changeStudent = (e) => {
    e.preventDefault();

    // resetting the error
    setNameError(false);
    setInstructorError(false);
    setCourseError(false);
    setScoreError(false);

    if (
      studentInput &&
      studentInstructorInput &&
      studentCourseInput &&
      studentScoreInput
    ) {
      setStudent({
        studentInput,
        studentCourseInput,
        studentInstructorInput,
        studentScoreInput,
      });
      setStudentInput("");
      setStudentCourseInput("");
      setStudentInstructorInput("");
      setStudentScoreInput("");
      setNameError(false);
      setInstructorError(false);
      setCourseError(false);
      setScoreError(false);
    } else {
      !studentInput && setNameError(true);
      !studentInstructorInput && setInstructorError(true);
      !studentCourseInput && setCourseError(true);
      !studentScoreInput && setScoreError(true);
    }
  };

  return (
    <div className="app">
      <h1>Student Manager</h1>
      <form action="" onSubmit={changeStudent}>
        <input
          className={nameError ? "red-outline" : null}
          placeholder="Your Name"
          type="text"
          name=""
          id=""
          onChange={(event) => setStudentInput(event.target.value)}
          value={studentInput}
          // böylelikle state değiştiği zaman input değişecek.
          // yani input state'e bağlanmış oldu.
          // state değiştiği zaman input, input değiştiği zaman da state değişmiş oluyor.
          // buna da two way binding deniyor.
        />
        {nameError && (
          <span className="warning">Student name can't be empty.</span>
        )}
        <input
          className={courseError ? "red-outline" : null}
          placeholder="Enter Course"
          type="text"
          name=""
          id=""
          onChange={(event) => setStudentCourseInput(event.target.value)}
          value={studentCourseInput}
        />
        {courseError && <span className="warning">Course can't be empty.</span>}
        <input
          className={instructorError ? "red-outline" : null}
          placeholder="Enter Instructor"
          type="text"
          name=""
          id=""
          onChange={(event) => setStudentInstructorInput(event.target.value)}
          value={studentInstructorInput}
        />
        {instructorError && (
          <span className="warning">Instructor can't be empty.</span>
        )}
        <input
          className={scoreError ? "red-outline" : null}
          placeholder="Your Score"
          name=""
          id=""
          onChange={(event) => setStudentScoreInput(event.target.value)}
          value={studentScoreInput}
        />
        {scoreError && <span className="warning">Score can't be empty.</span>}
        <button
          type="submit"
          // onClick={
          // () => {
          // studentName2 = "Alp Toker";
          // console.log(studentName2);
          // değer değişti ancak ekrana yansımadı. react'a rerender yapılacağını söylemediğimiz
          // sürece sayfayı yeniden render'lamayacaktır. (useSate, hook)
          // setStudentName("Arya Deneme");
          // changeStudent
          // }
        >
          Submit Student
        </button>
      </form>
      <div className="studentInfo">
        {/* <p>Student: {studentName}</p>
        <p>Course: {studentCourse}</p>
        <p>Instructor: {studentInstructor}</p>
        <p>Score: {studentScore}</p> */}
        <p>Student: {student.studentInput}</p>
        <p>Course: {student.studentCourseInput}</p>
        <p>Instructor: {student.studentInstructorInput}</p>
        <p>Score: {student.studentScoreInput}</p>
      </div>
    </div>
  );
};

export default App;
