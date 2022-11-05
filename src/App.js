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
  const [studentName, setStudentName] = useState("");
  // ilk hali değerin kendisi, ikincisi değeri getiren/değiştiren fonksiyon
  const [studentInput, setStudentInput] = useState("");
  // input'taki yazı her değiştiğinde studentInput'a set'lenecek.
  const [studentCourse, setStudentCourse] = useState("");
  const [studentCourseInput, setStudentCourseInput] = useState("");
  const [studentInstructor, setStudentInstructor] = useState("");
  const [studentInstructorInput, setStudentInstructorInput] = useState("");
  const [studentScore, setStudentScore] = useState("");
  const [studentScoreInput, setStudentScoreInput] = useState("");

  const changeStudent = (e) => {
    e.preventDefault();
    // input'taki değerleri almalarını sağladık.
    setStudentName(studentInput);
    setStudentCourse(studentCourseInput);
    setStudentInstructor(studentInstructorInput);
    setStudentScore(studentScoreInput);
    // submit'ten sonra input'ların boşalması için
    setStudentInput("");
    setStudentCourseInput("");
    setStudentInstructorInput("");
    setStudentScoreInput("");
  };

  return (
    <div className="App">
      <h1>Student Manager</h1>
      {/* <h2>{studentName1 || studentName2}</h2> */}
      <div className="studentInfo">
        <p>Student: {studentName}</p>
        <p>Course: {studentCourse}</p>
        <p>Instructor: {studentInstructor}</p>
        <p>Score: {studentScore}</p>
      </div>
      <form action="" onSubmit={changeStudent}>
        <input
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
        <input
          placeholder="Enter Course"
          type="text"
          name=""
          id=""
          onChange={(event) => setStudentCourseInput(event.target.value)}
          value={studentCourseInput}
        />
        <input
          placeholder="Enter Instructor"
          type="text"
          name=""
          id=""
          onChange={(event) => setStudentInstructorInput(event.target.value)}
          value={studentInstructorInput}
        />
        <input
          placeholder="Your Score"
          type="text"
          name=""
          id=""
          onChange={(event) => setStudentScoreInput(event.target.value)}
          value={studentScoreInput}
        />
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
    </div>
  );
};

export default App;
