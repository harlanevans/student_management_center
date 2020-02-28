import React, { useState, useEffect } from "react";
import { Button, RedButton, Row, H1, Paragraph } from "../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";
import Students from "./students/Students";
// useLayoutEffect

const CoursePage = props => {
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/courses/${id}`).then(res => {
      setCourse(res.data);
    });
    axios.get(`/api/courses/${id}/students`).then(res => {
      setStudents(res.data)
    });
  }, [props.match.params.id]);


  const length = students.length;

  const findClassAverage = () => {

    let average = 0;
    let studentAverage;
    let totalAverage;
    students.map(s => {
      studentAverage = (s.technical + s.effort + s.social) / 3;
      average = average + studentAverage;
    });
    if (length > 0) {
      totalAverage = average / length;
      var roundedAverage = Math.round(totalAverage * 10) / 10;
      return `Class Average: ${roundedAverage} / 5`;
    } else {
      return "No Average Available";
    }
  };



  if (!course) return null;
  return (
    <div style={styles.container}>
      <Row style={styles.textCont}>
        <H1>{course.title}</H1>
      </Row>
      <Row style={styles.textCont}>
        <Paragraph style={{padding: '1em 0em'}}>
        {findClassAverage()}
        </Paragraph>
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
    },
    textCont: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      textAlign: 'center',

    }
  };
