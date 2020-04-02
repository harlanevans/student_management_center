import React, { useState, useEffect } from "react";
import { Form, Input, Select, Label, Button, Row } from "../../../styles/Global";

const AddQuestion = (props) => {
  const [qtype, setQType] = useState("");
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState("");
  const fullQuestion = { qtype: qtype, q: q, answer: answer }
  
  useEffect(() => {
    if (props.id) {
      setQType(props.qType)
      setQ(props.q)
      setAnswer(props.answer)
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (props.id) {
      props.editQuestion(props.id, fullQuestion)
      props.toggle()
    }
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
          <option value="Technical">Technical</option>
          <option value="Whiteboard">Whiteboard</option>
          <option value="Open Answer">Open Answer</option>
          <option value="Experience">Experience</option>
          <option value="Social">Social</option>
        </Select>
        <Label>Question</Label>
      <Input
        placeholder="What is your question?"
        onChange={e => setQ(e.target.value)}
        value={q}
        type='text'
        />
        <Label>Answer</Label>
        <Input
          placeholder="Give an answer to this question"
          onChange={e => setAnswer(e.target.value)}
          value={answer}
          type='text'
          />
          <Row style={{padding: '1em 0em'}}>
      <Button onSubmit={handleSubmit}>{props.id ? "Edit Question" : "Submit"}</Button>
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