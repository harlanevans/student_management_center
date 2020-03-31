import React from "react";
import { Row, Button, SubTitle } from "../../../styles/Global";
import { Link } from "react-router-dom";

const StuInt = props => {


  return (
    <div>
      <Row>
        <SubTitle>
        Student Interview
        </SubTitle>
        </Row>
      <Link to={{ pathname: `/student/${props.location.student.id}` }}>
        <Button>Back to Student</Button>
      </Link>
    </div>
  );
};

export default StuInt;
