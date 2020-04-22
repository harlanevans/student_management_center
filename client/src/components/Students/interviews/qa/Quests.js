import React, { useState, useEffect } from "react";
import { QCard } from "../../../../styles/QStyle";
import { Form, Input, Button, Row, Label } from "../../../../styles/Global";
import AddAnswer from "./AddAnswer";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType,
} from "../../../../styles/QStyle";
import axios from "axios";

const Quests = (props) => {
  const [answer, setAnswer] = useState();
  const [thereIsAnswer, setThereIsAnswer] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    getQuestionsAnswers();
  }, [props.student.studentAnswers]);

  const getQuestionsAnswers = () => {
    const qAnswers = props.student.studentAnswers.filter((answer) => {
      if (answer.question_id === props.question.id) {
        console.log("match for id ", answer.question_id, props.question.id);
        return answer;
      }
      console.log("no match");
      return null;
    });
    setAnswer(qAnswers);
    if (qAnswers.length !== 0) {
      setThereIsAnswer(true);
    }
  };

  const answeredView = () => {
    return answer.map((answer) => {
      const {  q } = props.question;
      return (
        <QCard style={styles.cont}>
          <Row style={styles.rowPadding}>
            Question:
            <QuestionText style={styles.paddingLeft}>{q}</QuestionText>
          </Row>
          <Row style={styles.rowPadding}>
            Student Answer:
            <QuestionText style={styles.paddingLeft}>
              {answer.student_answer}
            </QuestionText>
          </Row>
          <Row style={styles.rowPadding}>
            Correct?
            <QuestionText style={styles.paddingLeft}>
              {answer.correct === true ? "Correct" : "Incorrect"}
            </QuestionText>
          </Row>
          <Row>
            <Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? "Cancel" : "Edit"}</Button>
          </Row>
          {toggleEdit ? (
            <Row>
              <AddAnswer answer={answer} toggleEdit={setToggleEdit} editAnswer={props.editAnswer}/>
            </Row>

          ): (
            <></>
          )}
        </QCard>
      );
    });
  };

  const questionView = () => {
    const {  q } = props.question;
    return (
      <QCard style={styles.cont}>
        <Row style={styles.rowPadding}>
          Question:
          <QuestionText style={styles.paddingLeft}>{q}</QuestionText>
        </Row>
        <Row style={styles.rowPadding}>
          <AddAnswer
            question_id={props.question.id}
            student_id={props.student.student.id}
            addAnswer={props.addAnswer}
            thereIsAnswer={setThereIsAnswer}
          />
        </Row>
      </QCard>
    );
  };

  // if (!answer) return null;
  return <>{thereIsAnswer ? <>{answeredView()}</> : <>{questionView()}</>}</>;
};

export default Quests;

const styles = {
  cont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  paddingLeft: {
    paddingLeft: ".5em",
  },
  rowPadding: {
    paddingBottom: ".5em",
  },
};
