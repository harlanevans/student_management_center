import React, { useState } from "react";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType
} from "../../../styles/QStyle";
import {
  // SubTitle,
  // Button,
  RedButton,
  ViewButton
} from "../../../styles/Global";

import AddQuestion from "./AddQuestion";

const QMap = props => {

  const [toggle, setToggle] = useState(false);
  return (
    <QuestionCont>
      <div style={styles.cont}>
        <div style={styles.rowCenter}>
          <div style={styles.columns}>
            <div style={styles.paddingRight}>Question Type:</div>
            <QType>{props.qtype}</QType>
          </div>
        </div>
        <div style={styles.rowCenter}>
          <div style={styles.columns}>
            <div style={styles.paddingRight}>Question:</div>
            <QuestionText>{props.q}</QuestionText>
          </div>
        </div>

        <div style={styles.rowCenter}>
          <div style={styles.columns}>
            <div style={styles.paddingRight}>Correct Answer: </div>
            <Answer>{props.correct_answer}</Answer>
          </div>
        </div>
      </div>

      <div style={styles.buttondiv}>
        <ViewButton onClick={() => setToggle(!toggle)}>{toggle ? "Cancel" : "Edit"}</ViewButton>
        <RedButton onClick={() => props.deleteQ(props.id)}>Delete</RedButton>
      </div>

      <div style={{ paddingTop: ".5em" }}>
        {toggle && (
          <AddQuestion
            toggle={setToggle}
            {...props}
            editQuestion={props.editQuestion}
          />
        )}
      </div>
    </QuestionCont>
  );
};

export default QMap;

const styles = {
  buttondiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: ".5em"
  },
  rowCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    // border: "solid 2px blue",
    paddingBottom: ".5em",
    margin: ".5em 0em"
  },
  columns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%"
    // border: "solid 2px red",
  },

  paddingRight: {
    paddingRight: ".25em"
  },
  italic: {
    fontStyle: "italic"
  },
  cont: {
    // border: "solid 1px purple",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
};
