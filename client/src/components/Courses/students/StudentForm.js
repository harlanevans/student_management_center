import React, { useEffect, useState } from "react";
import {
  H1,
  Paragraph,
  Button,
  Row,
  RedButton,
  Input,
  Form,
  Label,
  Select
} from "../../../styles/Global";
import axios from "axios";

const StudentForm = props => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [technical, setTechnical] = useState("");
  const [effort, setEffort] = useState("");
  const [social, setSocial] = useState("");
  const [skill, setSkill] = useState("");
  //!Sets a student object
  //! to all the state values to pass to edit
  const mainStudent = {
    first_name: first_name,
    last_name: last_name,
    technical: technical,
    effort: effort,
    social: social
  };

  useEffect(() => {
    const { student, singleStudent } = props;
    if (student) {
      const { first_name, last_name, technical, effort, social } = student;
      setFirstName(first_name);
      setLastName(last_name);
      setTechnical(technical);
      setEffort(effort);
      setSocial(social);
    } else if (singleStudent) {
      const {
        first_name,
        last_name,
        technical,
        effort,
        social
      } = singleStudent;
      setFirstName(first_name);
      setLastName(last_name);
      setTechnical(technical);
      setEffort(effort);
      setSocial(social);
    } else {
      setDefaultValue();
    }
  }, []);

  const setDefaultValue = () => {
    if (technical === "") {
      setTechnical(3);
    }
    if (effort === "") {
      setEffort(3);
    }
    if (social === "") {
      setSocial(3);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { student, singleStudent } = props;
    if (singleStudent) {
      props.editSingleStudent(singleStudent.id, mainStudent);
      props.toggleEditForm();
    } else if (student) {
      props.editStudent(student.id, mainStudent);
      props.toggleEdit();
    } else {
      const student = { first_name, last_name, technical, effort, social };
      axios
        .post(`/api/courses/${props.course.id}/students`, student)
        .then(res => {
          props.addStudent(res.data);
          props.toggleForm();
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="First Name"
        name="firstName"
        label="First Name"
        required
        autoFocus
        type="text"
        value={first_name}
        onChange={e => setFirstName(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        label="Last Name"
        required
        type="text"
        value={last_name}
        onChange={e => setLastName(e.target.value)}
      />
      <div>
        <Row style={styles.skills}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Label>Technical</Label>
            <Select
              name="technical"
              label="Technical"
              required
              value={technical}
              onChange={e => setTechnical(e.target.value)}
            >
              <option value="" disabled>
                Technical
              </option>
              <option value="1">1 (Very Low)</option>
              <option value="2">2 (Low)</option>
              <option value="3" selected>
                3 (Average)
              </option>
              <option value="4">4 (Great)</option>
              <option value="5">5 (Very Great)</option>
            </Select>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Label>Effort</Label>
            <Select
              name="effort"
              label="Effort"
              value={effort}
              required
              onChange={e => setEffort(e.target.value)}
            >
              <option value="" disabled>
                Effort
              </option>
              <option value="1">1 (Very Low)</option>
              <option value="2">2 (Low)</option>
              <option value="3" selected>
                3 (Average)
              </option>
              <option value="4">4 (Great)</option>
              <option value="5">5 (Very Great)</option>
            </Select>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Label>Social</Label>
            <Select
              name="social"
              label="Social"
              required
              value={social}
              onChange={e => setSocial(e.target.value)}
            >
              <option value="" disabled>
                Social
              </option>
              <option value="1">1 (Very Low)</option>
              <option value="2">2 (Low)</option>
              <option value="3" selected>
                3 (Average)
              </option>
              <option value="4">4 (Great)</option>
              <option value="5">5 (Very Great)</option>
            </Select>
          </div>
        </Row>
      </div>
      {/* <Label>Technical</Label>
      <Input
        placeholder="Technical Skill"
        name="technical"
        label="Technical Skill"
        type="number"
        min="1"
        max="5"
        value={technical}
        onChange={e => setTechnical(e.target.value)}
        />
      <Input
        placeholder="Effort Level"
        name="effort"
        label="Effort Level"
        type="number"
        min="1"
        max="5"
        value={effort}
        onChange={e => setEffort(e.target.value)}
      />
      <Input
        placeholder="Social Skill"
        name="social"
        label="Social Skill"
        type="number"
        min="1"
        max="5"
        value={social}
        onChange={e => setSocial(e.target.value)}
      /> */}
      <Row style={styles.padding}>
        <Button onSubmit={handleSubmit}>Submit</Button>
      </Row>
      <Row style={styles.padding}>
        <RedButton onClick={props.toggleForm}>Cancel</RedButton>
      </Row>
    </Form>
  );
};

export default StudentForm;

const styles = {
  container: {
    padding: "2em"
  },
  padding: {
    padding: "1em 0em"
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%"
  }
};
