import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, SubTitle } from "../../../styles/Global";
import ViewStuInt from "./ViewStuInt";
import { Link } from "react-router-dom";

const Ints = props => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const { id } = props.student;
    axios
      .get(`/api/students/${id}/student_interviews`)
      .then(res => setInterviews(res.data));
  }, [props.student]);

  const renderInts = () => {
    return interviews.map(int => <ViewStuInt key={int.id} {...int} />);
  };

  if (!interviews) return null;
  return (
    <div
      style={{
        border: "solid 2px black",
        borderRadius: "3px",
        margin: "1em 0em",
        padding: "1em"
      }}
    >
      {renderInts()}
    </div>
  );
};

export default Ints;
