import React from "react";
import { QCard } from "../../../../styles/QStyle";
import { Form, Input, Button, Row, Label } from "../../../../styles/Global";
import AddAnswer from "./AddAnswer";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType
} from "../../../../styles/QStyle";

const Quests = props => {


  const addAnswer = () => {
    
  }


  return (
    <QCard>
      <Row>
        Type of Question:
        <QType style={styles.paddingLeft}>{props.qtype}</QType>
      </Row>
      <Row>
        Question:
        <QuestionText style={styles.paddingLeft}>{props.q}</QuestionText>
      </Row>
      <Row>
        <AddAnswer />
      </Row>
    </QCard>
  );
};

export default Quests;

const styles = {
  cont: {},
  paddingLeft: {
    paddingLeft: ".5em"
  }
};
