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
  const [answers, setAnswers] = useState([]);

  const completeAnswer = {
    student_answer: student_answer,
    correct: correct,
    question_id: props.question_id,
    student_id: props.student_id,
  };

  useEffect(() => {
    if (props.answer) {
      const { student_answer, correct } = props.answer;
      // debugger
      setStudentAnswer(student_answer);
      setCorrect(correct);
    }
  }, [props.answer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.answer) {
      props.editAnswer(props.answer.id, completeAnswer);
      props.toggleEdit();
    } else {
      axios
        .post(`/api/students/${props.student_id}/answers`, completeAnswer)
        .then((res) => {
          props.addAnswer(res.data);
        });
    }
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
    debugger;
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
