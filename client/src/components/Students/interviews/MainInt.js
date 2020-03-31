import React, { useState, useEffect } from "react";
import {
  Row,
  H1,
  SubTitle,
  Paragraph,
  Select,
  Form,
  Button
} from "../../../styles/Global";
import { Redirect } from "react-router-dom";
import axios from "axios";

const MainInt = props => {
  const [interviews, setInterviews] = useState([]);
  const [student, setStudent] = useState({});
  const [intChoice, setIntChoice] = useState();
  const [studentInterviews, setStudentInterviews] = useState({});
  const [stuInt, setStuInt] = useState({});
  const [intLoaded, setIntLoaded] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get("/api/get_interviews").then(res => setInterviews(res.data));
    axios.get(`/api/students/${id}`).then(res => setStudent(res.data));
    axios.get(`/api/students/${id}/student_interviews`).then(res => setStudentInterviews(res.data));
  }, []);

  const iterateInts = () => {
    return interviews.map(i => (
      <option value={i.id} key={i.id}>
        {i.name}
      </option>
    ));
  };

  const intForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Select
          value={intChoice}
          defaultValue="Interview..."
          onChange={e => setIntChoice(e.target.value)}
          required
        >
          <option value="Interview..." disabled>
            Interview...
          </option>
          {iterateInts()}
        </Select>
        <div>
          <Button onSubmit={handleSubmit}>Choose Interview</Button>
        </div>
      </Form>
    );
  };

  // http://localhost:3000/students/1/student_interviews
  const handleSubmit = e => {
    e.preventDefault();
    postInt()
  };

  const postInt = () => {
    const student_interview = {
      interview_id: intChoice,
      student_id: student.id
    };
    axios
      .post(`/api/students/${student.id}/student_interviews`, student_interview)
      .then(res => {
        setStuInt(res.data);
      });
    // change ternary to true and then redirect in render
    loaded()
  };

  const loaded = () => {
    return setIntLoaded(!intLoaded);
  };

  if (!student || !interviews) return null;
  // if (something is true) redirect to the student_interview page
  if (intLoaded === true)
    return (
      <Redirect
        to={{
          pathname: "/student_interview",
          stu_int: stuInt,
          student: student,
        }}
      />
    );
  return (
    <div style={styles.container}>
      <Row style={styles.centerRow}>
        <H1>
          New Interview For {student.first_name} {student.last_name}
        </H1>
      </Row>
      <Row>{intForm()}</Row>
      <Row>{intLoaded ? "Chosen" : "not Chosen"}</Row>
    </div>
  );
};

export default MainInt;

const styles = {
  centerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    padding: "2em"
  }
};