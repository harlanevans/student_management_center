import React, { useState } from "react";
import {
  H1,
  Paragraph,
  Button,
  Row,
  RedButton,
  Input,
  Form,
  Label
} from "../../../styles/Global";
import { Text, Count, Select } from "../../../styles/CheckInS";
import axios from 'axios';

const CiForm = (props) => {
  const [feeling, setFeeling] = useState("");
  const [technical, setTechnical] = useState("");
  const [groups, setGroups] = useState("");
  const [qcs, setQcs] = useState("");
  const [feedback, setFeedback] = useState("");
  const [time_spent, setTimeSpent] = useState("");
  const [status, setStatus] = useState("");

  const handleSelectChange = event => {
    setStatus({ value: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const checkin = { feeling, technical, groups, qcs, feedback, time_spent, status: status.value };
    debugger
    axios.post(`/api/students/${props.student.id}/checkins`, checkin)
    .then(res => {
      window.location.href = `/student/${props.student.id}`
    })
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const comment = { author, body, tag: tag.value };
  //   axios
  //     .post(`/api/students/${props.student.id}/comments`, comment)
  //     .then(res => {
  //       props.addComment(res.data);
  //       props.toggleForm();
  //     });
  // };

  return (
    <div style={styles.container}>
      <Form onSubmit={handleSubmit}>
        <Label>How are you feeling about the course?</Label>
        <Text
          type="text"
          value={feeling}
          onChange={e => setFeeling(e.target.value)}
          required
        />
        <Label>How do you feel you are doing technically?</Label>
        <Text
          type="text"
          value={technical}
          onChange={e => setTechnical(e.target.value)}
          required
        />
        <Label>How are you doing working with groups?</Label>
        <Text
          type="text"
          value={groups}
          onChange={e => setGroups(e.target.value)}
          required
        />
        <Label>Time spent outside of class coding?</Label>
        <Text
          type="text"
          value={time_spent}
          onChange={e => setTimeSpent(e.target.value)}
          required
        />
        <Label>Questions? Concerns? Suggestions?</Label>
        <Text
          type="text"
          value={qcs}
          onChange={e => setQcs(e.target.value)}
          required
        />
        <Label>Our Feedback</Label>
        <Text
          type="text"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          required
        />
        <Label>Check-In Overall Status</Label>
        <Select onChange={handleSelectChange} required>
          <option disabled selected>
            Status...
          </option>
          <option value="1">1 (Very Bad)</option>
          <option value="2">2 (Bad)</option>
          <option value="3">3 (Average)</option>
          <option value="4">4 (Good)</option>
          <option value="5">5 (Very Good)</option>
        </Select>
        <Row>
          <Button onSubmit={handleSubmit}>Submit</Button>
        </Row>
      </Form>
    </div>
  );
};

export default CiForm;

const styles = {
  container: {
    padding: "2em"
  }
};
