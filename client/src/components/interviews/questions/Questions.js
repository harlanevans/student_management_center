import React, { useState, useEffect } from "react";
import { Row, SubTitle, Button } from "../../../styles/Global";

import axios from "axios";
import AddQuestion from "./AddQuestion";
import QMap from "./QMap";

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
    return (
      <div style={styles.qsCont}>
        {questions.map(question => (
          <QMap key={question.id} {...question} />
        ))}
      </div>
    );
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
      <div style={styles.qsCont}>{renderQuestions()}</div>
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
  qsCont: {
    display: "flex",
    flexFlow: "row wrap",
    // justifyContent: "space-evenly",
    // width: "100%",
    width: "100%"
  }
};
