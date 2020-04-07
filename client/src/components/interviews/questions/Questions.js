import React, { useState, useEffect } from "react";
import { Row, SubTitle, Button, Paragraph } from "../../../styles/Global";

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
  }, [props.interview.id, questions.length]);

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

  const deleteQ = id => {
    axios
      .delete(`/api/interviews/${props.interview.id}/questions/${id}`)
      .then(res => {
        setQuestions(questions.filter(q => q.id !== id));
      });
  };

  const editQuestion = (id, question) => {
    axios
      .put(`/api/interviews/${props.interview.id}/questions/${id}`, question)
      .then(res => {
        const newQs = questions.map(q => {
          if (id === q.id) return res.data;
          return q;
        });
        setQuestions(newQs);
      });
  };

  const renderQuestions = () => {
    return (
      <div style={styles.qsCont}>
        {questions.map(question => (
          <QMap
            key={question.id}
            {...question}
            deleteQ={deleteQ}
            editQuestion={editQuestion}
          />
        ))}
      </div>
    );
  };

  if (!questions) return null;
  return (
    <div>
      <Row style={styles.buttonRow}>
        <Button onClick={toggleAdd}>New Question</Button>
        <Paragraph>Number of Questions: {questions.length}</Paragraph>
      </Row>
      <Row>
        {toggleAddQuestions && (
          <AddQuestion addQuestion={addQuestion} toggleAdd={toggleAdd} />
        )}
      </Row>
      <Row style={styles.centerRow}>
        <SubTitle>Questions</SubTitle>
      </Row>
      <>{renderQuestions()}</>
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
    justifyContent: "space-evenly",
    width: "100%"
  },
  buttonRow: {
    padding: '1em 1em',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
  }
};
