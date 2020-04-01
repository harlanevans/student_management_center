import React, { useEffect, useState } from "react";
import { Row, Button, SubTitle } from "../../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";

const StuInt = props => {
  const [interview, setInterview] = useState({});
  const [student, setStudent] = useState({});
  const [studentInterview, setStudentInterview] = useState({})

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
  }

  const renderIntQuestions = () => {
    
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

    </div>
  );
};

export default StuInt;

const styles = {
  container: {
    padding: "2em"
  },
  centerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
