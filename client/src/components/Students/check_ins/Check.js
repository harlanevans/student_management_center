import React from "react";
import { H1, Row, Paragraph } from "../../../styles/Global";
import { CheckIn } from "../../../styles/CheckInS";

const Check = props => {
  
  const checkStatus = () => {
    const { status } = props;
    if (status === "1") {
      return "Color red";
    } else if (status === "2") {
      return "Color orange";
    } else if (status === "3") {
      return "Color yellow";
    } else if (status === "4") {
      return "Color green";
    } else {
      return "Color Blue";
    }
  };
  return (
    <CheckIn>
      <div>
        <Paragraph>Technical</Paragraph>
        <Row>{props.technical}</Row>
      </div>
      <div>
        <Paragraph>Feeling</Paragraph>
        <Row>{props.feeling}</Row>
      </div>
      <div>
        <Paragraph>Groups</Paragraph>
        <Row>{props.groups}</Row>
      </div>
      <div>
        <Paragraph>Questions, Concerns, Suggestions</Paragraph>
        <Row>{props.qcs}</Row>
      </div>
      <div>
        <Paragraph>Time Spent</Paragraph>
        <Row>{props.time_spent}</Row>
      </div>
      <div>
        <Paragraph>Status</Paragraph>
        <Row>{checkStatus()}</Row>
      </div>
    </CheckIn>
  );
};

export default Check;

const styles = {};
