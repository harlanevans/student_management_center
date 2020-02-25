import React, { useState, useEffect } from "react";
import { Button, RedButton, Row, H1 } from "../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";
import Students from "./students/Students";
// useLayoutEffect

const CoursePage = props => {
  const [course, setCourse] = useState(null);
  // const [students, setStudents] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/courses/${id}`).then(res => {
      setCourse(res.data);
    });
  }, [props.match.params.id]);

  if (!course) return null;
  return (
    <div style={styles.container}>
      <Row>
        <H1>{course.title}</H1>
      </Row>
      <Students course={course} />
    </div>
  );
};

export default CoursePage;

  const styles = {
    container: {
      padding: "2em"
    },
    center: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  };
