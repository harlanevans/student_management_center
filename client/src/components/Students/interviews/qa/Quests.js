import React, { useState, useEffect} from "react";
import { QCard } from "../../../../styles/QStyle";
import { Form, Input, Button, Row, Label } from "../../../../styles/Global";
import AddAnswer from "./AddAnswer";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType,
} from "../../../../styles/QStyle";
import axios from 'axios'

const Quests = (props) => {
  const [answers, setAnswers] = useState([])
  

  useEffect(() => {
    // debugger
    axios.get(`/api/questions/${props.id}/answers`).then(
      res => {
        setAnswers(res.data)

      }
      )
    // axios.get(`/api/students/${props.id}/answers`).then((res) => {
    //   setAnswers(res.data);
    // });
  }, [])

  const answeredView = () => {

  }

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
          <AddAnswer question_id={props.id} stu_int_id={props.stu_int.id} addAnswers={props.addAnswers}/>
        </Row>
      </QCard>
    );

  }

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
        <AddAnswer question_id={props.id} stu_int_id={props.stu_int.id} addAnswers={props.addAnswers}/>
      </Row>
    </QCard>
  );
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
