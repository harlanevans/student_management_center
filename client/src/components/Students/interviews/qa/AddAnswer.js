import React, { useState, useEffect } from "react";
import { Form, Input, Row, Button } from "../../../../styles/Global";

const AddAnswer = () => {
  const [answer, setAnswer] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row style={styles.inputRow}>
          <Input
            placeholder="Student Answer"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            type="text"
          />
          <div style={styles.button}>
            <Button onClick={handleSubmit}>Submit Answer</Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default AddAnswer;

const styles = {
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
};
