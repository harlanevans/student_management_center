import React, { useEffect, useState } from "react";
import { Row, SubTitle } from "../../../styles/Global";
import axios from "axios";

const ViewStuInt = props => {
  // const [student, setStudent] = useState({})
  const [interview, setInterview] = useState({});

  useEffect(() => {
    axios
      .get(`/api/interviews/${props.interview}`)
      .then(res => setInterview(res.data));
  }, []);

  if (!interview) return null;
  return (
    <div>
      <Row>
        <SubTitle>{interview.name}</SubTitle>
      </Row>
    </div>
  );
};

export default ViewStuInt;
