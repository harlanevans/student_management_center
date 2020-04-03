import React, { useEffect, useState } from "react";
import { Row, Button, SubTitle } from "../../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";
import Quests from './Quests';

const StuInt = props => {
  const [interview, setInterview] = useState({});
  const [student, setStudent] = useState({});
  const [studentInterview, setStudentInterview] = useState({})
  const [intQuestions, setIntQuestions] = useState([])

  useEffect(() => {
    // const { interview_id, student_id } = props.location.studentInterview;
    const { id, student_id } = props.match.params;
    axios.get(`/api/students/${student_id}/student_interviews/${id}`).then(res => {
      setStudentInterview(res.data)
    })
    getOther()
  }, []);

  const getOther = () => {
    const { interview_id, student_id } = props.match.params;
    axios.get(`/api/interviews/${interview_id}`).then(res => {
      setInterview(res.data);
    });
    axios.get(`/api/students/${student_id}`).then(res => {
      setStudent(res.data);
    });
    axios.get(`/api/interviews/${interview_id}/questions`).then(res => {
      setIntQuestions(res.data)
    });
  }

  const renderIntQuestions = () => {
    // if (!intQuestions) return null;
    return intQuestions.map(q => (
      <div style={styles.qsCont}>
        <Quests key={q.id} {...q} />
      </div>
    )

    )
  }

  if (!student || !interview || !studentInterview)  return null;
  return (
    <div style={styles.container}>
        <Row>
      <Link to={{ pathname: `/student/${student.id}` }}>
        <Button>Back to {student.first_name}'s Page</Button>
      </Link>
      </Row>
      <Row style={styles.centerRow}>
        <SubTitle>{student.first_name}'s {interview.name}</SubTitle>
      </Row>
      <>
        {renderIntQuestions()}
      </>
    </div>
  );
};

export default StuInt;

const styles = {
  container: {
    padding: "2em"
  },
  centerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: '1em 0em'
  },
  qsCont: {
    display: "flex",
    flexFlow: "row wrap",
    // justifyContent: "space-evenly",
    // width: "100%",
    width: "100%"
  }
};
