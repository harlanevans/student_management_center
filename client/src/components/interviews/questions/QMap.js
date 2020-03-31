import React from "react";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType
} from "../../../styles/QStyle";
import { Row, SubTitle, Button } from "../../../styles/Global";


const QMap = props => {
  return (
    <QuestionCont>
      <Row>
        Question:
        <QuestionText>{props.q}</QuestionText>
      </Row>
      <Row>
        Type of Question:
        <QType>{props.qtype}</QType>
      </Row>
      <Row>
        Answer:
        <Answer>{props.answer}</Answer>
      </Row>
    </QuestionCont>
  );
};

export default QMap;
