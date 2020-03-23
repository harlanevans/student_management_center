import React, { useState } from "react";
import { Form, Input, Select, Label, Button, Row } from "../../../styles/Global";

const AddQuestion = (props) => {
  const [qtype, setQType] = useState("");
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState("");
  const fullQuestion = {qtype: qtype, q: q, answer: answer}

  const handleSubmit = e => {
    e.preventDefault()
    props.addQuestion(fullQuestion)
    props.toggleAdd()
  }

  return (
    // <div style={styles.container}>

      <Form onSubmit={handleSubmit}>
        <Label>Type Of Question</Label>

        <Select placeholder="Type" onChange={e => setQType(e.target.value)}>
          <option disabled selected>
            Type...
          </option>
          <option value="technical">Technical</option>
          <option value="whiteboard">Whiteboard</option>
          <option value="open_answer">Open Answer</option>
          <option value="experience">Experience</option>
          <option value="social">Social</option>
        </Select>
        <Label>Question</Label>
      <Input
        placeholder="What is your question?"
        onChange={e => setQ(e.target.value)}
        value={q}
      />
        <Label>Answer</Label>
        <Input
          placeholder="Give an answer to this question"
          onChange={e => setAnswer(e.target.value)}
          value={answer}
          />
          <Row>
      <Button onSubmit={handleSubmit}>Add Question</Button>
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