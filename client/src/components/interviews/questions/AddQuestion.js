import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Label,
  Button,
  Row
} from "../../../styles/Global";
import { Count } from "../../../styles/ComStyle";

const AddQuestion = props => {
  const [qtype, setQType] = useState("");
  const [q, setQ] = useState("");
  const [correct_answer, setCorrectAnswer] = useState("");
  const fullQuestion = { qtype: qtype, q: q, correct_answer: correct_answer };

  useEffect(() => {
    if (props.id) {
      setQType(props.qType);
      setQ(props.q);
      setCorrectAnswer(props.correct_answer);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (props.id) {
      props.editQuestion(props.id, fullQuestion);
      props.toggle();
    }
    if (qtype === '') {
      alert("You must choose a question type.")
      return null;
    }
    props.addQuestion(fullQuestion);
    props.toggleAdd();
  };

  return (
    // <div style={styles.container}>

    <Form onSubmit={handleSubmit}>
      <Label>Type Of Question</Label>

      <Select required placeholder="Type" defaultValue='Type...' onChange={e => setQType(e.target.value)}>
        <option disabled defaultValue='Type...'>
          Type...
        </option>
        <option value="Technical">Technical</option>
        <option value="Whiteboard">Whiteboard</option>
        <option value="Open Answer">Open Answer</option>
        <option value="Experience">Experience</option>
        <option value="Social">Social</option>
      </Select>
      {/* <Label>Question</Label> */}
      <Input
        placeholder="What is your question?"
        onChange={e => setQ(e.target.value)}
        value={q}
        type="text"
      />
      {/* <Label>Correct Answer</Label> */}
      <Input
        placeholder="Give an answer to this question"
        onChange={e => setCorrectAnswer(e.target.value)}
        value={correct_answer}
        type="text"
      />
      <Count>For open answers please type *Open*</Count>
      <Row style={{ padding: "1em 0em" }}>
        <Button onSubmit={handleSubmit}>
          {props.id ? "Edit Question" : "Submit"}
        </Button>
      </Row>
    </Form>
    // </div>
  );
};

export default AddQuestion;

// const styles = {
//   container: {
//     padding: '2em 0em',
//     width: '100%'
//   }
// }
