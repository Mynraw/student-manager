// useState
import { useState } from "react";
import "./App.scss";

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
  const [students, setStudents] = useState([]);
  // error state
  const [nameError, setNameError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [instructorError, setInstructorError] = useState(false);
  const [scoreError, setScoreError] = useState(false);

  const changeStudent = (e) => {
    e.preventDefault();

    // resetting the error states
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
      // get values as obj
      setStudents([
        ...students,
        {
          studentInput,
          studentCourseInput,
          studentInstructorInput,
          studentScoreInput,
        },
      ]);
      // !!!! useState async çalışır!
      // bundan dolayı students hep bir önceki durumunu konsola yazdırıyor.
      // console.log(students);
      // state'teki async'e birden fazla işlem gelirse hangi state'ini baz alacak?
      // önüne geçmek için prev. değeri callback olarak içerisine yollayarak
      // o state'teki değeri baz almasını sağlayabiliriz.
      // örn:
      // setStudents(prevStudentList => [
      //   ...prevStudentList,
      //   {
      //     studentInput,
      //     studentCourseInput,
      //     studentInstructorInput,
      //     studentScoreInput,
      //   },
      // ])

      // set default
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
        <button type="submit">Submit Student</button>
      </form>
      <div className="student-area">
        {students.map((student, index) => (
          <div className="student-info" key={index}>
            <p>
              Student: <span className="">{student.studentInput}</span>
            </p>
            <p>
              Course: <span>{student.studentCourseInput}</span>
            </p>
            <p>
              Instructor: <span>{student.studentInstructorInput}</span>
            </p>
            <p>
              Score: <span>{student.studentScoreInput}</span>q
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
