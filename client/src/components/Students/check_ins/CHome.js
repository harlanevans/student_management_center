import React, { useState, useEffect } from "react";
import CiForm from "./CiForm";
import { H1, Row, RedButton, } from "../../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";

const CHome = props => {
  const [student, setStudent] = useState();
  // const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/students/${id}`).then(res => {
      setStudent(res.data);
    });
  }, [props.match.params]);

  

  // const toggle = () => {
  //   setToggleForm(!toggleForm);
  // };

  if (!student) return null;
  return (
    <div style={styles.container}>
      <H1>
        New Check-In for {student.first_name} {student.last_name}
      </H1>
      <Row style={styles.rowPadding}>
        <Link to={{ pathname: `/student/${student.id}` }}>
          <RedButton>Back To Student Page</RedButton>
        </Link>
      </Row>
      <CiForm student={student}/> 
    </div>
  );
};

export default CHome;

const styles = {
  container: {
    padding: "2em"
  },
  rowPadding: {
    padding: "1em 0em"
  }
};
