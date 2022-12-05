// useState
import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import StudentList from "./components/student-list/StudentList";
import SearchBar from "./components/search-bar/SearchBar";
import axios from "axios";

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

  const addStudent = (e) => {
    e.preventDefault();

    // resetting the error obj props
    // student ve error objelerindeki prop isimleri aynı olduğundan, prop'ların değeri değişecek.
    // initial olarak true olan key değerleri, eğer boş string gelmişse falsy olacak. böylelikle else bloğuna ihtiyaç duymadan kontrolü
    // sağlamış oluyoruz.
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

  // app.js'te kullandığımız component'lere "set" methodlarını yollamak sayfanın
  // sadece state'inde değişiklik meydana gelen component'leri re-render'laması
  // mantığına ters geldiğinden, set methodunu bir fonksiyon ile göndermek
  // daha tutarlı ve mantıklı.
  // tanımlanan fonksiyon set methodunu kullanarak istediğimiz
  // state değişikliğini yapmamızı sağlıyor.
  // callback ile önceki değerler tutuluyor, argüman olarak yollanan prop ile değişikliğin
  // meydana geldiği state değişmiş oluyor. ikisinde de spread var.
  const handleStudentInputProp = (studentProp) =>
    setStudent((prevStudent) => ({ ...prevStudent, ...studentProp }));

  // fuzzy search
  const [filteredStudent, setFilteredStudent] = useState("");
  const getSearchValue = (inputValue) => setFilteredStudent(inputValue);

  // fuzzy search, alternatif yol
  // const [filteredStudentList, setFilteredStudentList] = useState([]);
  // const [inputName, setInputName] = useState("");

  // const handleSearch = (e) => {
  //   setInputName(e);
  //   const formattedSearchValue = e.trim().toLowerCase();
  //   setFilteredStudentList(
  //     studentList.filter((student) =>
  //       student.studentInput.trim().toLowerCase().includes(formattedSearchValue)
  //     )
  //   );
  // };

  // API
  const api = "http://localhost:8000";

  // axios
  const getStudents = async () => {
    try {
      const response = await axios.get(`${api}/students`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents()
      .then((studentData) => setStudentList([...studentData]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Header />
      <Form
        addStudent={addStudent}
        handleError={error}
        handleStudent={student}
        // artık burada setStudent'ı değil, setStudent için yeni değer dönmesi için
        // tanımladığımız fonksiyonu gönderdim.
        handleStudentInputProp={handleStudentInputProp}
      />
      <SearchBar
        getSearchValue={getSearchValue}
        // alternatif fuzzy search:
        // handleSearch={handleSearch}
      />
      <StudentList
        studentList={studentList}
        filteredStudent={filteredStudent}
        // alternatif fuzzy search:
        // filteredStudentList={filteredStudentList}
        // inputName={inputName}
      />
    </div>
  );
};

export default App;
