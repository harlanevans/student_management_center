import React, { useState, useEffect } from "react";
import {
  Form,
  Text,
  Row,
  Button,
  CheckBox,
  Label,
} from "../../../../styles/Global";
import axios from "axios";

const AddAnswer = (props) => {
  const [student_answer, setStudentAnswer] = useState();
  const [correct, setCorrect] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState({});
  const [answers, setAnswers] = useState([])

  const completeAnswer = {
    student_answer: student_answer,
    correct: correct,
    question_id: props.question_id,
    student_interview_id: props.stu_int_id,
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/student_interviews/${props.stu_int_id}/answers`, completeAnswer)
      .then((res) => {
        props.addAnswers(res.data)
        props.answerSubmitted(completeAnswer)
        setSubmittedAnswer(completeAnswer)
        setAnswerSubmitted(true);
      });
  };

  const formView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Row style={styles.inputRow}>
          <Text
            placeholder="Student Answer"
            value={student_answer}
            onChange={(e) => setStudentAnswer(e.target.value)}
            // type="text"
            style={{ width: "25vw" }}
          />
        </Row>
        <Row style={{ padding: ".25em 0em" }}>
          <Label>Correct?</Label>
          <CheckBox
            type="checkbox"
            value="correct"
            onChange={(e) => setCorrect(!correct)}
            checked={correct}
          />
        </Row>
        <div style={styles.button}>
          <Button onClick={handleSubmit}>Submit Answer</Button>
        </div>
      </Form>
    );
  };

  const answerView = () => {
    debugger
    return <div>{submittedAnswer.answer}</div>;
  };

  return <div>{answerSubmitted ? answerView() : formView()}</div>;
};

export default AddAnswer;

const styles = {
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "25%",
  },
  inputRow: {
    display: "flex",
    flexFlow: "row wrap",
    // width: "100%"
  },
};
