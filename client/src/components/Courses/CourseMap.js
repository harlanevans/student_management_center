import React, { useState, useEffect } from "react";
import { CourseCard, CardTitle } from "../../styles/Course";
import { Button, RedButton, Row, ViewButton } from "../../styles/Global";
import { Link } from "react-router-dom";
import CourseForm from "./CourseForm";
import axios from "axios";

const CourseMap = props => {
  const [students, setStudents] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    axios.get(`/api/courses/${props.id}/students`).then(res => {
      setStudents(res.data);
    });
  }, [props.id]);

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

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <CourseCard style={styles.columnCard}>
      <CardTitle>
        <Link to={{ pathname: `/courses/${props.id}`,}} className="card-link">
          <div className="borderCenterOther">{props.title}</div>
        </Link>
      </CardTitle>
      <CardTitle>
        <Row style={styles.centerRow}>Students: {length}</Row>
      </CardTitle>
      <CardTitle>
        <Row>{findClassAverage()}</Row>
      </CardTitle>
      <Row style={styles.buttonRow}>
        <Button onClick={toggle}>Edit</Button>
        <Link to={{ pathname: `/courses/${props.id}`}}>
          <ViewButton>View Course</ViewButton>
        </Link>
        <RedButton
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${props.title}? \nThis will delete all students, comments, and tasks for this course. \nThis action cannot be undone.`
              )
            )
              props.deleteCourse(props.id);
          }}
        >
          Delete
        </RedButton>
      </Row>
      {toggleForm ? (
        <CourseForm
          editCourse={props.editCourse}
          {...props}
          toggleEdit={toggle}
        />
      ) : (
        <></>
      )}
    </CourseCard>
  );
};

export default CourseMap;

const styles = {
  buttonRow: {
    padding: "1em 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: '100%'
  },
  centerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};
