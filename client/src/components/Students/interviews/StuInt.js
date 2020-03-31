import React, { useEffect, useState } from "react";
import { Row, Button, SubTitle } from "../../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";

const StuInt = props => {
  const [interview, setInterview] = useState({});
  const [student, setStudent] = useState({});
  const [studentInterview, setStudentInterview] = useState({});

  useEffect(() => {
    // const { interview_id, student_id } = props.location.studentInterview;
    const { id, student_id } = props.match.params;
    axios
      .get(`/api/students/${student_id}/student_interviews/${id}`)
      .then(res => {
        setStudentInterview(res.data);
      })
      .then(
        axios
          .get(`/api/interviews/${studentInterview.interview_id}`)
          .then(res => {
            setInterview(res.data);
          })
      )
      .then(
        axios.get(`/api/students/${studentInterview.student_id}`).then(res => {
          setStudent(res.data);
        })
      );
  }, []);

  const renderIntQuestions = () => {};

  if (!studentInterview) return null;
  return (
    <div>
      <Row>
        <SubTitle>
          {student.first_name}'s {interview.name}
        </SubTitle>
      </Row>
      <Link to={{ pathname: `/student/${student.id}` }}>
        <Button>Back to Student</Button>
      </Link>
    </div>
  );
};

export default StuInt;
