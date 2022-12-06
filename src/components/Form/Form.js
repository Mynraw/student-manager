import React from "react";

const Form = ({
  handleError,
  handleStudent,
  addStudent,
  handleStudentInputProp,
}) => {
  return (
    <form action="" onSubmit={(e) => addStudent(e)}>
      <input
        className={!handleError.studentName ? "red-outline" : null}
        placeholder="Your Name"
        type="text"
        name=""
        id=""
        onChange={(event) =>
          // set methodu yerine gönderilen fonksiyon.
          // içerisine argüman olarak input'taki target value'yi alıyor.
          handleStudentInputProp({
            studentName: event.target.value,
          })
        }
        value={handleStudent.studentName}
        // böylelikle state değiştiği zaman input değişecek.
        // yani input state'e bağlanmış oldu.
        // state değiştiği zaman input, input değiştiği zaman da state değişmiş oluyor.
        // buna da two way binding deniyor.
      />
      {!handleError.studentName && (
        <span className="warning">Student name can't be empty.</span>
      )}
      <input
        className={!handleError.studentCourse ? "red-outline" : null}
        placeholder="Enter Course"
        type="text"
        name=""
        id=""
        onChange={(event) =>
          handleStudentInputProp({
            studentCourse: event.target.value,
          })
        }
        value={handleStudent.studentCourse}
      />
      {!handleError.studentCourse && (
        <span className="warning">Course can't be empty.</span>
      )}
      <input
        className={!handleError.studentInstructor ? "red-outline" : null}
        placeholder="Enter Instructor"
        type="text"
        name=""
        id=""
        onChange={(event) =>
          handleStudentInputProp({
            studentInstructor: event.target.value,
          })
        }
        value={handleStudent.studentInstructor}
      />
      {!handleError.studentInstructor && (
        <span className="warning">Instructor can't be empty.</span>
      )}
      <input
        className={!handleError.studentScore ? "red-outline" : null}
        placeholder="Your Score"
        name=""
        id=""
        onChange={(event) =>
          handleStudentInputProp({
            studentScore: event.target.value,
          })
        }
        value={handleStudent.studentScore}
      />
      {!handleError.studentScore && (
        <span className="warning">Score can't be empty.</span>
      )}
      <button type="submit">Submit Student</button>
    </form>
  );
};

export default Form;
