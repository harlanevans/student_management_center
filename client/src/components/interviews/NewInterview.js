import React, { useState, useEffect } from "react";
import { Row, H1, Form, Input, Button } from "../../styles/Global";
import axios from 'axios';

const NewInterview = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/interviews', {name}).then(res => {
      props.addInterview(res.data)
      props.toggleForm()
      setName('')
    })
  };

  return (
    <div style={styles.container}>
      {/* <div style={{padding: '2em 0em'}}></div> */}
      <Form onSubmit={handleSubmit}>
        <Input value={name} placeholder="Interview Name" name="name" required onChange={(e) => setName(e.target.value)} type='text'/>
        <div style={caches.startRow}>
        <Button onSubmit={handleSubmit}>Create Interview</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewInterview;

const styles = {
  container: {
    padding: "2em"
  },
  startRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }
};
