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
  const [answers, setAnswers] = useState([]);
  const [gotData, setGotData] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/student_interviews/${props.stu_int.id}/answers`)
      .then((res) => {
        setAnswers(res.data);
        if (answers) {
          setGotData(true)
          debugger
        }
      })
      // .then(
      //   setTimeout(() => {
      //     debugger
      //     if (gotData === true) {
      //       getQuestionsAnswers();
      //     }
      //   }, 1000)
      // )

      // axios
      //   .get(`/api/student_interviews/${props.stu_int.id}/answers`)
      //   .then((res) => {
      // setAnswers(props.answers);
      // });
      .catch((err) => console.log(err));
  }, []);

  const answerSubmitted = (subAnswer) => {
    setAnswer(subAnswer);
    checkSubmittedAnswerIn();
  };

  const checkSubmittedAnswerIn = () => {
    axios
      .get(`/api/student_interviews/${props.stu_int.id}/answers`)
      .then((res) => {
        setAnswers(res.data);
        if (res.data) {
          newFilter();
        }
      });
    // setTimeout(() => {
    //   newFilter();
    // }, 5000);
  };

  const newFilter = () => {
    // if (answers.length !== 0) {

    const newAnswer = answers.filter((a) => {
      if (a.id === answer.id) {
        return a;
      }
      return null;
    });
    // }
    setAnswer(newAnswer);
    if (answers.length !== 0) {
      setThereIsAnswer(true);
    }
  };

  const getQuestionsAnswers = () => {
    console.log("hit 2");
    const qAnswers = answers.filter((answer) => {
      if (answer.question_id === props.id) {
        return answer;
      }
      return null;
    });
    setAnswer(qAnswers);
    if (qAnswers.length !== 0) {
      setThereIsAnswer(true);
    }
  };

  const answeredView = () => {
    return (
      <QCard style={styles.cont}>
        <Row style={styles.rowPadding}>
          Question Type:
          <QType style={styles.paddingLeft}>{props.qtype}</QType>
        </Row>
        <Row style={styles.rowPadding}>
          Question:
          <QuestionText style={styles.paddingLeft}>{props.q}</QuestionText>
        </Row>
        <Row style={styles.rowPadding}>
          Student Answer:
          <QuestionText style={styles.paddingLeft}>
            {answer[0].student_answer}
          </QuestionText>
        </Row>
      </QCard>
    );
  };

  const questionView = () => {
    return (
      <QCard style={styles.cont}>
        <Row style={styles.rowPadding}>
          Question Type:
          <QType style={styles.paddingLeft}>{props.qtype}</QType>
        </Row>
        <Row style={styles.rowPadding}>
          Question:
          <QuestionText style={styles.paddingLeft}>{props.q}</QuestionText>
        </Row>
        <Row style={styles.rowPadding}>
          <AddAnswer
            question_id={props.id}
            stu_int_id={props.stu_int.id}
            addAnswers={props.addAnswers}
            answerSubmitted={answerSubmitted}
          />
        </Row>
      </QCard>
    );
  };

  if (!answers) return null;
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
