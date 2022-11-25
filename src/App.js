// useState
import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

const App = () => {
  // const studentName1 = "";
  // let studentName2 = "Arya Açıkgöz";
  // return içerisinde ternary kullanılabiliyor. for, if vb. kullanılamıyor.
  // expression gerekiyor.
  // useState
  // array olarak geldiği için destructure edilebilir.
  // ilk hali değerin kendisi, ikincisi değeri getiren/değiştiren fonksiyon

  // obj state
  const [studentList, setStudentList] = useState([]);

  // bir öğrenci objesi oluşturup, içerisinde state'leri tutup fazla sayıda useState kullanmanın
  // önüne geçebiliriz.
  const [student, setStudent] = useState({
    studentInput: "",
    studentCourseInput: "",
    studentInstructorInput: "",
    studentScoreInput: "",
  });

  // error as obj
  const [error, setError] = useState({
    studentInput: true,
    studentCourseInput: true,
    studentInstructorInput: true,
    studentScoreInput: true,
  });

  const changeStudent = (e) => {
    e.preventDefault();

    // resetting the error obj props
    // student ve error objelerindeki prop isimleri aynı olduğundan, prop'ların değeri değişecek.
    // initial olarak true olan key değerleri, eğer boş string gelmişse falsy olacak. böylelikle else içerisinde error ile oynayabileceğiz.
    setError({
      ...student,
    });

    if (Object.values(student).every((value) => value)) {
      // get values as obj
      setStudentList((prevStudentList) => [...prevStudentList, student]);

      // reset the inputs
      setStudent({
        studentInput: "",
        studentCourseInput: "",
        studentInstructorInput: "",
        studentScoreInput: "",
      });
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
    }
    // if bloğu öncesinde setError'e student'ı spread ettiğimizden ekstra else kontrolüne gerek kalmamış oldu.
    // else {
    //   Object.keys(student).forEach((key) => {
    //     if (!student[key]) {
    //       setError((prevStudent) => ({
    //         ...prevStudent,
    //         [key]: student[key],
    //       }));
    //     }
    //   });
    // }
  };

  return (
    <div className="app">
      <Header />
      <Form
        changeStudent={changeStudent}
        setStudent={setStudent}
        handleError={error}
        handleStudent={student}
      />
      <div className="student-area">
        {studentList.map((student, index) => (
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
              Score: <span>{student.studentScoreInput}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
