import React, { useState, useEffect } from "react";
import { Input, FormButton, Row } from "../../styles/Global";
import axios from "axios";

const CourseForm = props => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (props.id) {
      setTitle(props.title);
    }
  }, [props.id, props.title]);

  const handleSubmit = e => {
    e.preventDefault();
    if (props.id) {
      props.editCourse(props.id, title);
      props.toggleEdit();
    } else {
      axios.post(`/api/schools/${props.school.id}/courses`, { title }).then(res => {
        props.addCourse(res.data);
        props.toggleForm();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Course Title"
        name="title"
        label="Title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Row style={styles.padding}>
        <FormButton>Submit</FormButton>
      </Row>
    </form>
  );
};

export default CourseForm;

const styles = {
  container: {
    padding: "2em"
  },
  padding: {
    padding: "1em 0em"
  }
};
