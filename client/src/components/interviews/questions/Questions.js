import React, { useState, useEffect } from "react";
import { Row, SubTitle, Button } from "../../../styles/Global";
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
  }, [props.interview.id]);

  const toggleAdd = () => {
    setToggleAddQuestions(!toggleAddQuestions);
  };

  const addQuestion = question => {
    axios
      .post(`/api/interviews/${props.interview.id}/questions`, question)
      .then(res => {
        setQuestions([question, ...questions]);
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

  if (!questions) return null;
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
      <Row style={styles.centerRow}>
        <SubTitle>Questions</SubTitle>
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
    justifyContent: "center",
    padding: "1em 0em"
  },
  
};
