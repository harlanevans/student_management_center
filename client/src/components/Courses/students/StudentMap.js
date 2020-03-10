import React, { useState, useEffect } from "react";
import {
  StudentCard,
  Name,
  Skill,
  Average,
  LowAverage,
  HighAverage,
  Count
} from "../../../styles/Student";
import { Row, RedButton, Button, ViewButton } from "../../../styles/Global";
import StudentForm from "./StudentForm";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentMap = props => {
  const average = (props.technical + props.social + props.effort) / 3;
  const [toggleForm, setToggleForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [student, setStudent] = useState();

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  useEffect(() => {
    axios.get(`/api/students/${props.id}`).then(res => {
      setStudent(res.data);
    });
  }, []);

  const toggleLoaded = () => {
    setIsLoaded(!isLoaded);
  };

  const changeAvg = () => {
    var roundedAverage = Math.round(average * 10) / 10;
    if (roundedAverage <= 2.4) {
      return <LowAverage>Avg: {roundedAverage}</LowAverage>;
    } else if (roundedAverage > 2.5 && roundedAverage < 3.7) {
      return <Average>Avg: {roundedAverage}</Average>;
    } else {
      return <HighAverage>Avg: {roundedAverage}</HighAverage>;
    }
  };

  const increase = () => {
    toggleLoaded();
    axios
      .put(`/api/students/${student.id}`, {
        student: { times_helped: student.times_helped + 1 }
      })
      .then(res => {
        const newStudent = res.data;
        setStudent(newStudent);
      });
  };

  const decrease = () => {
    toggleLoaded();
    axios
      .put(`/api/students/${student.id}`, {
        student: { times_helped: student.times_helped - 1 }
      })
      .then(res => {
        const newStudent = res.data;
        setStudent(newStudent);
      });
  };


  if (!student) return null;
  return (
    <StudentCard>
      <Row style={styles.skillRow}>
        <Name>
          <Link to={{ pathname: `/student/${props.id}` }} className="card-link">
            <div className="borderCenterOther">
              {student.first_name} {props.last_name}
            </div>
          </Link>
        </Name>
        {changeAvg()}
      </Row>
      <Row style={styles.skillRow}>
        <Skill>Technical: {props.technical}</Skill>
        <Skill>Effort: {props.effort}</Skill>
        <Skill>Group: {props.social}</Skill>
      </Row>
      <Row style={styles.skillRow}>
        <div style={styles.bottomCol}>
          <Button onClick={toggle}>Edit</Button>
        </div>
        {/* <Link to={`/student/${props.id}`}>
        <ViewButton>Student Page</ViewButton>
        </Link> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Skill>Times Helped</Skill>
          <Row>
            <Count onClick={decrease}>-</Count>
            <Skill style={{ padding: "0em .5em" }}>
              {student.times_helped === null || undefined
                ? "0"
                : student.times_helped}
            </Skill>
                <Count onClick={increase}>+</Count>
          </Row>
        </div>
        <div style={styles.bottomCol}>
          <RedButton
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to delete this student? \nThis will delete all comments and tasks associated to this student."
                )
              )
                props.deleteStudent(student.id);
            }}
          >
            Delete
          </RedButton>
        </div>
      </Row>
      <Row>
        {toggleForm ? (
          <StudentForm
            student={props}
            toggleEdit={toggle}
            editStudent={props.editStudent}
          />
        ) : (
          <></>
        )}
      </Row>
    </StudentCard>
  );
};

export default StudentMap;

const styles = {
  skillRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: ".5em 0em"
  },
  bottomCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }
};
