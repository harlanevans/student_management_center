import React, { useState, useEffect } from "react";
import { H1, Paragraph, Row } from "../../styles/Global";
import { Fade } from "react-reveal";
import StudentForm from "../Courses/students/StudentForm";
import axios from "axios";
import MapStudents from "./MapStudents";
import { Link } from "react-router-dom";

const StudentsAll = () => {
  const [students, setStudents] = useState([]);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    axios.get("/api/students").then(res => {
      setStudents(res.data);
    });
  }, []);

  // const studentsAsc = () => {
  //   axios.get("/api/students/asc").then(res => {
  //     setStudents(res.data);
  //   });
  // };

  // const studentDesc = () => {
  //   axios.get("/api/students/asc").then(res => {
  //     setStudents(res.data);
  //   });
  // };


  //! Handle change for select for student sort order
  const handleChange = event => {
    setSelect({ value: event.target.value });
  };

  const renderStudents = () => {
    return students.map(student => {
      return <MapStudents key={student.id} {...student} />;
    });
  };

  return (
    <div style={styles.container}>
      <Fade>
        <Row style={styles.center}>
          <H1 style={styles.padding}>All Students Page</H1>
        </Row>
        <Row style={styles.studentFlex}>{renderStudents()}</Row>
        {/* <select onChange={handleChange}>
          <option>Sort By...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
          <option value="date_added">Date Added</option>
        </select> */}
      </Fade>
    </div>
  );
};

export default StudentsAll;

const styles = {
  container: {
    padding: "2em"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  studentFlex: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    width: "100%"
  },
  padding: {
    padding: "1em 0em"
  }
};
