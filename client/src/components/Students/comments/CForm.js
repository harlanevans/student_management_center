import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  FormButton,
  Select,
  Text,
  Count
} from "../../../styles/ComStyle";
import { Row } from "../../../styles/Global";
import axios from "axios";

const CForm = props => {
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [author, setAuthor] = useState("");

  const handleSelectChange = event => {
    setTag({ value: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const comment = { author, body, tag: tag.value };
    axios
      .post(`/api/students/${props.student.id}/comments`, comment)
      .then(res => {
        props.addComment(res.data);
        props.toggleForm();
      });
  };
  // const bodyCount = () => {
  //   const charCount = body.length;
  //   if (charCount < 200) {
  //     return <Count>{body.length} / 200</Count>;
  //   } else {
  //     return <Count style={{ color: "#6E0D25" }}>{body.length} / 200</Count>;
  //   }
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Row style={styles.space}>
        <Input
          placeholder="Author..."
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        {/* Maybe do tags as checkboxes instead of a select? */}
        <Select onChange={handleSelectChange} required>
          <option>Tag...</option>
          <option value="Update">Update</option>
          <option value="Concern">Concern</option>
          <option value="Progress">Progress</option>
          <option value="Other">Other</option>
        </Select>
      </Row>
      <Text
        placeholder="Comment... 200 characters max."
        required
        maxlength="200"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: "1em"
        }}
      >
        <Count>
          *Once a comment is submitted it cannot be edited or deleted
        </Count>
        {body.length < 200 ? (
          <Count>{body.length} / 200</Count>
        ) : (
          <Count style={{ color: "#6E0D25" }}>{body.length} / 200</Count>
        )}
      </Row>
      <Row>
        <FormButton onSubmit={handleSubmit}>Submit</FormButton>
      </Row>
      <Row style={styles.padding}></Row>
    </Form>
  );
};

export default CForm;

const styles = {
  space: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  },
  padding: {
    
  }
};
