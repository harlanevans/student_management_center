import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, H1, Button } from "../../styles/Global";
import { Skill, Average, LowAverage, HighAverage } from "../../styles/Student";
import Comments from "./comments/Comments";
import CForm from "./comments/CForm";
import StudentForm from "../Courses/students/StudentForm";

const StudentPage = props => {
  const [student, setStudent] = useState();
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/students/${id}`).then(res => {
      setStudent(res.data);
    });
  }, []);

  const toggleEdit = () => {
    setToggleForm(!toggleForm);
  };

  const changeAvg = () => {
    const average = (student.technical + student.social + student.effort) / 3;
    var roundedAverage = Math.round(average * 10) / 10;
    if (roundedAverage <= 2.4) {
      return <LowAverage>Average: {roundedAverage}</LowAverage>;
    } else if (roundedAverage > 2.5 && roundedAverage <= 3.6) {
      return <Average>Average: {roundedAverage}</Average>;
    } else {
      return <HighAverage>Average: {roundedAverage}</HighAverage>;
    }
  };

  const editStudent = (id, student) => {
    axios.put(`/api/students/${id}`, { student }).then(res => {
      const newStudent = res.data;
      setStudent(newStudent);
    });
  };

  if (!student) return null;
  return (
    <div style={styles.container}>
      <Row style={styles.center}>
        <H1>
          {student.first_name} {student.last_name}
        </H1>
      </Row>
      <div style={styles.padding}>
        <Row style={styles.skills}>
          <Skill style={styles.smallPadding}>
            Technical: {student.technical}
          </Skill>
          <Skill style={styles.smallPadding}>Effort: {student.effort}</Skill>
          <Skill style={styles.smallPadding}>Social: {student.social}</Skill>
        </Row>
      </div>
      <div style={styles.padding}>
        <Row style={styles.center}>{changeAvg()}</Row>
      </div>
      <Row>
        <Button onClick={toggleEdit}>Edit Student</Button>
      </Row>
      {toggleForm ? (
        <StudentForm
          singleStudent={student}
          editSingleStudent={editStudent}
          toggleEditForm={toggleEdit}
        />
      ) : (
        <></>
      )}
      <div style={styles.padding}></div>
      <hr />
      <div style={styles.mainRow}>
        <div style={styles.colOne}>
          <Comments student={student} />
        </div>
        <div style={styles.colTwo}>Student To Do's / Notes</div>
      </div>
    </div>
  );
};

export default StudentPage;

const styles = {
  container: {
    padding: "2em"
  },
  smallPadding: {
    padding: "0em .5em"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  padding: {
    padding: "1em 0em"
  },
  mainRow: {
    padding: "1em 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  colOne: {
    padding: "1em 0em",
    width: "50%"
  },
  colTwo: {
    padding: "1em 0em",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};
