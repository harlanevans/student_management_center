import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  H1,
  Button,
  RedButton,
  ViewButton,
  SubTitle
} from "../../styles/Global";
import {
  Skill,
  Average,
  LowAverage,
  HighAverage,
  Count
} from "../../styles/Student";
import Comments from "./comments/Comments";
import { Link, withRouter } from "react-router-dom";
import StudentForm from "../Courses/students/StudentForm";
import Checks from "./check_ins/Checks";
import ColorKeys from "../shared/ColorKeys";
import StudentTasks from "./tasks/StudentTasks";
import { AuthConsumer } from "../../providers/AuthProvider";

const StudentPage = props => {
  const [student, setStudent] = useState();
  const [toggleForm, setToggleForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState()

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/students/${id}`).then(res => {
      setStudent(res.data);
    });
    setUser(props.auth.user)
  }, [props.match.params, props.auth.user]);

  const toggleEdit = () => {
    setToggleForm(!toggleForm);
  };

  const changeAvg = () => {
    const average = (student.technical + student.social + student.effort) / 3;
    var roundedAverage = Math.round(average * 10) / 10;
    if (roundedAverage <= 2.4) {
      return <LowAverage>Average: {roundedAverage}</LowAverage>;
    } else if (roundedAverage > 2.5 && roundedAverage < 3.7) {
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

  const toggleLoaded = () => {
    setIsLoaded(!isLoaded);
  };

  const increase = () => {
    toggleLoaded();
    axios
      .put(`/api/students/${props.match.params.id}`, {
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
      .put(`/api/students/${props.match.params.id}`, {
        student: { times_helped: student.times_helped - 1 }
      })
      .then(res => {
        const newStudent = res.data;
        setStudent(newStudent);
      });
  };

  if (!student) return null;
  return (
    <div style={styles.container}>
      <Row>
        <Link to={{ pathname: `/courses/${student.course_id}` }}>
          <RedButton>Course Page</RedButton>
        </Link>
      </Row>
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
      <div>
        <Row style={styles.center}>{changeAvg()}</Row>
      </div>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
            // width: '25%',
            // height: '100%',
          }}
        >
          <Button onClick={toggleEdit}>Edit Student</Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "25%"
            // height: '100%',
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "1em"
            }}
          >
            <Skill>Times Helped</Skill>
          </Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%"
            }}
          >
            <Count onClick={decrease}>-</Count>
            <Skill>
              {student.times_helped === null || undefined
                ? "0"
                : student.times_helped}
            </Skill>
            <Count onClick={increase}>+</Count>
          </div>
        </div>
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
      {/* COMMENTS */}
      <div style={styles.mainRow}>
        <div style={styles.colOne}>
          <Comments student={student} user={user} />
        </div>

        {/* TASKS */}
        <div style={styles.colTwo}>
          <SubTitle>Tasks</SubTitle>
          <StudentTasks studentId={student.id} user={user} />
        </div>
      </div>

      <div style={styles.padding}></div>
      <div style={styles.padding}></div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        <ColorKeys />
      </div>
      <div style={styles.mainRow}>
        <div style={styles.colOne}>
          <SubTitle>Check Ins</SubTitle>
          <div style={styles.padding}>
            <Link to={{ pathname: `/check_in/${student.id}` }}>
              <ViewButton>Add Check-In</ViewButton>
            </Link>
          </div>
          <Checks student={student} user={user} />
        </div>
        <div style={styles.colTwo}>
          <SubTitle>Interviews</SubTitle>
        </div>
      </div>
    </div>
  );
};

export const ConnectedStudentPage = props => {
  return (
    <AuthConsumer>
      {auth => <StudentPage {...props} auth={auth} />}
    </AuthConsumer>
  );
};

export default withRouter(ConnectedStudentPage);

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
    // padding: "1em 0em",
    width: "45%"
  },
  colTwo: {
    // padding: "1em 0em",
    width: "50%"
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center"
  },
  keyColors: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
