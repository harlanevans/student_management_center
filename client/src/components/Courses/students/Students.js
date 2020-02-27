import React, { useState, useEffect } from "react";
import { H1, Paragraph, Button, Row, RedButton } from "../../../styles/Global";
import { Fade } from "react-reveal";
import StudentMap from "./StudentMap";
import StudentForm from "./StudentForm";
import axios from "axios";
import Modal from "./Modal";

const Students = props => {
  const [students, setStudents] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  // const [toggleModal, setToggleModal] = useState(false);
  // const [toDelete, setToDelete] = useState(false);

  useEffect(() => {
    axios.get(`/api/courses/${props.course.id}/students`).then(res => {
      setStudents(res.data);
    });
  }, [props.course.id]);

  const renderStudents = () => {
    return students.map(student => {
      return (
        <StudentMap
          key={student.id}
          {...student}
          deleteStudent={deleteStudent}
          toggleForm
          editStudent={editStudent}
        />
      );
    });
  };
  //! ADD STUDENTS
  const addStudent = student => {
    setStudents([...students, student]);
  };

  //! ADD STUDENTS Toggle Form
  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  //? When click delete, need to await users response for delete
  //?

  const deleteStudent = (id, student) => {
    axios
      .delete(`/api/courses/${props.course.id}/students/${id}`, student)
      .then(res => {
        console.log(res.data);
      });
    setStudents(students.filter(student => student.id !== id));
  };

  const editStudent = (id, student) => {
    axios
      .put(`/api/courses/${props.course.id}/students/${id}`, { student })
      .then(res => {
        const newStudents = students.map(s => {
          if (s.id === id) {
            return res.data;
          }
          return s;
        });
        setStudents(newStudents);
      });
  };

  return (
    <div>
      <Fade>
        <Row style={styles.padding}>
          <Button onClick={toggle}>Add Student</Button>
        </Row>

        <Row style={styles.padding}>
          {students.length === 0 ? (
            <Row style={styles.center}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <H1 style={styles.center}>No Students</H1>
                <Paragraph style={styles.center}>
                  Please add some students to this course.
                </Paragraph>
              </div>
            </Row>
          ) : (
            <H1 style={styles.center}>Students</H1>
          )}
        </Row>

        <Row style={styles.form}>
          {toggleForm ? (
            <StudentForm
              toggleForm={toggle}
              course={props.course}
              addStudent={addStudent}
            />
          ) : (
            <></>
          )}
        </Row>

        <Row style={styles.studentFlex}>{renderStudents()}</Row>
      </Fade>
    </div>
  );
};

export default Students;

const styles = {
  container: {
    padding: "2em"
  },
  padding: {
    padding: "1em 0em"
  },
  studentFlex: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    // width: "100%"
  },
  form: {
    width: "100%"
  },
  center: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%"
  },
  textCont: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    textAlign: 'center',

  }
};
