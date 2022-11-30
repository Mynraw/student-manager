import React from "react";

const Form = ({
  handleError,
  handleStudent,
  changeStudent,
  handleStudentInputProp,
}) => {
  return (
    <form action="" onSubmit={(e) => changeStudent(e)}>
      <input
        className={!handleError.studentInput ? "red-outline" : null}
        placeholder="Your Name"
        type="text"
        name=""
        id=""
        onChange={(event) =>
          // set methodu yerine gönderilen fonksiyon.
          // içerisine argüman olarak input'taki target value'yi alıyor.
          handleStudentInputProp({
            studentInput: event.target.value,
          })
        }
        value={handleStudent.studentInput}
        // böylelikle state değiştiği zaman input değişecek.
        // yani input state'e bağlanmış oldu.
        // state değiştiği zaman input, input değiştiği zaman da state değişmiş oluyor.
        // buna da two way binding deniyor.
      />
      {!handleError.studentInput && (
        <span className="warning">Student name can't be empty.</span>
      )}
      <input
        className={!handleError.studentCourseInput ? "red-outline" : null}
        placeholder="Enter Course"
        type="text"
        name=""
        id=""
        onChange={(event) =>
          handleStudentInputProp({
            studentCourseInput: event.target.value,
          })
        }
        value={handleStudent.studentCourseInput}
      />
      {!handleError.studentCourseInput && (
        <span className="warning">Course can't be empty.</span>
      )}
      <input
        className={!handleError.studentInstructorInput ? "red-outline" : null}
        placeholder="Enter Instructor"
        type="text"
        name=""
        id=""
        onChange={(event) =>
          handleStudentInputProp({
            studentInstructorInput: event.target.value,
          })
        }
        value={handleStudent.studentInstructorInput}
      />
      {!handleError.studentInstructorInput && (
        <span className="warning">Instructor can't be empty.</span>
      )}
      <input
        className={!handleError.studentScoreInput ? "red-outline" : null}
        placeholder="Your Score"
        name=""
        id=""
        onChange={(event) =>
          handleStudentInputProp({
            studentScoreInput: event.target.value,
          })
        }
        value={handleStudent.studentScoreInput}
      />
      {!handleError.studentScoreInput && (
        <span className="warning">Score can't be empty.</span>
      )}
      <button type="submit">Submit Student</button>
    </form>
  );
};

export default Form;
