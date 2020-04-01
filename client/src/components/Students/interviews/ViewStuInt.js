import React, { useEffect, useState } from "react";
import { Row, SubTitle } from "../../../styles/Global";
import axios from "axios";
import { Link } from 'react-router-dom'

const ViewStuInt = props => {
  // const [student, setStudent] = useState({})
  const [interview, setInterview] = useState({});

  useEffect(() => {
    axios
      .get(`/api/interviews/${props.interview_id}`)
      .then(res => setInterview(res.data));
  }, []);

  if (!interview) return null;
  return (
    <div>
      <Row>
        <Link
          to={{
            pathname: `/student/${props.student_id}/interview/${props.interview_id}/student_interview/${props.id}`
          }}
          className="card-link"
        >
          <SubTitle className="borderCenterOther">{interview.name}</SubTitle>
        </Link>
      </Row>
    </div>
  );
};

export default ViewStuInt;
