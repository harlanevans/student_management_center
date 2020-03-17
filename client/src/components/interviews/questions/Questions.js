import React, { useState, useEffect } from "react";
import { Row, H1, Paragraph, Button } from "../../../styles/Global";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType
} from "../../../styles/QStyle";
import axios from "axios";
import AddQuestion from "./AddQuestion";

const Questions = props => {
  const [questions, setQuestions] = useState([]);
  const [toggleAddQuestions, setToggleAddQuestions] = useState(false);

  useEffect(() => {
    axios.get(`/api/interviews/${props.interview.id}/questions`).then(res => {
      setQuestions(res.data);
    });
  }, []);

  const toggleAdd = () => {
    setToggleAddQuestions(!toggleAddQuestions);
  };

  const addQuestion = question => {
    debugger;
    axios
      .post(`/api/interviews/${props.interview.id}/questions`, question)
      .then(res => {
        setQuestions(res.data);
      });
  };

  const renderQuestions = () => {
    return questions.map(question => (
      <QuestionCont>
        <Row>
          Question:
          <QuestionText>{question.q}</QuestionText>
        </Row>
        <Row>
          Type of Question:
          <QType>{question.qtype}</QType>
        </Row>
        <Row>
          Answer:
          <Answer>{question.answer}</Answer>
        </Row>
      </QuestionCont>
    ));
  };

  // if (!questions) return null;
  return (
    <div>
      <Button onClick={toggleAdd}>Add Questions</Button>
      <Row>
        {toggleAddQuestions ? (
          <AddQuestion addQuestion={addQuestion} toggleAdd={toggleAdd} />
        ) : (
          <></>
        )}
      </Row>
      <Row style={{ padding: "1em 0em" }}>
        <Paragraph>Questions</Paragraph>
      </Row>
      <Row>{renderQuestions()}</Row>
    </div>
  );
};

export default Questions;

const styles = {
  centerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }
};
