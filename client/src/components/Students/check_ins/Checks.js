import React, { useState, useEffect } from "react";
import { Row, Paragraph } from "../../../styles/Global";
import axios from "axios";
import Check from "./Check";

const Checks = props => {
  const [checks, setChecks] = useState([]);
  // const [checkId, setCheckId] = useState();

  useEffect(() => {
    axios.get(`/api/students/${props.student.id}/checkins`).then(res => {
      setChecks(res.data);
    });
  }, [props.student.id]);

  // const addCheckIn = checkin => {
  //   setChecks([checkin, ...checks]);
  // };

  //TODO Need to compare check in id's so that the lesser one will = 1, greater = 2 
  const renderCheckIns = () => {
    if (checks.length === 0)
      return (
        <Paragraph>You currently have no check-ins for this student</Paragraph>
      );
    return checks.map(check => {
      return (
        <Check
          key={check.id}
          {...check}
          deleteCheckIn={deleteCheckIn}
          // checkId={checkId}
        />
      );
    });
  };

  const deleteCheckIn = (id, checkin) => {
    axios
      .delete(`/api/students/${props.student.id}/checkins/${id}`, checkin)
      .then(res => {
        console.log(res.data);
      });
    setChecks(checks.filter(checkin => checkin.id !== id));
  };

  return (
    <div>
      <Row>{renderCheckIns()}</Row>
    </div>
  );
};

export default Checks;
