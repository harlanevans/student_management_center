import React, { useEffect, useState } from "react";
import { Row, Button, SubTitle, ViewButton } from "../../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";
import Quests from "./qa/Quests";

const StuInt = (props) => {
  const [interview, setInterview] = useState({});
  const [student, setStudent] = useState({});
  const [studentInterview, setStudentInterview] = useState({});
  const [intQuestions, setIntQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // const { interview_id, student_id } = props.location.studentInterview;
    const { id, student_id } = props.match.params;
    axios
      .get(`/api/students/${student_id}/student_interviews/${id}`)
      .then((res) => {
        setStudentInterview(res.data);
      });
    axios
      .get(`/api/student_interviews/${id}/answers`)
      .then((res) => {
        setAnswers(res.data);
      })
      .then(
        setTimeout(() => {
          getOther();
        }, 1000)
      )
      .catch((res) => console.log(res));
  }, []);

  const getOther = () => {
    const { interview_id, student_id } = props.match.params;
    axios.get(`/api/interviews/${interview_id}`).then((res) => {
      setInterview(res.data);
    });
    axios.get(`/api/students/${student_id}`).then((res) => {
      setStudent(res.data);
    });
    axios.get(`/api/interviews/${interview_id}/questions`).then((res) => {
      setIntQuestions(res.data);
    });
  };

  const addAnswers = (answer) => {
    setAnswers(answer, ...answers);
    console.log(answers);
  };

  const renderIntQuestions = () => {
    if (!intQuestions) return null;
    return intQuestions.map((q) => (
      <Quests
        key={q.id}
        {...q}
        stu_int={studentInterview}
        addAnswers={addAnswers}
        answers={answers}
      />
    ));
  };

  // if (!student || !interview || !studentInterview) return null;
  return (
    <div style={styles.container}>
      <Row>
        <Link to={{ pathname: `/student/${student.id}` }}>
          <ViewButton>Back to {student.first_name}'s Page</ViewButton>
        </Link>
      </Row>
      <Row style={styles.centerRow}>
        <SubTitle>
          {student.first_name}'s {interview.name}
        </SubTitle>
      </Row>
      <div style={styles.qsCont}>{renderIntQuestions()}</div>
      <Row>
        <Button>Finish Interivew</Button>
      </Row>
    </div>
  );
};

export default StuInt;

const styles = {
  container: {
    padding: "2em",
  },
  centerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1em 0em",
  },
  qsCont: {
    display: "flex",
    flexFlow: "row wrap",
    // justifyContent: "space-evenly",
    // width: "100%",
    width: "100%",
  },
};
