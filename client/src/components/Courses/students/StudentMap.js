import React, { useState } from "react";
import { StudentCard, Name, Skill, Average, LowAverage, HighAverage } from "../../../styles/Student";
import { Row, RedButton, Button, ViewButton } from "../../../styles/Global";
import StudentForm from "./StudentForm";
import { Link } from "react-router-dom";

const StudentMap = props => {
  const average = (props.technical + props.social + props.effort) / 3;
  const [toggleForm, setToggleForm] = useState(false);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  // const findClassAverage = () => {
  //   let average = 0;
  //   let studentAverage;
  //   let totalAverage;
  //   students.map(s => {
  //     studentAverage = (s.technical + s.effort + s.social) / 3;
  //     average = average + studentAverage;
  //   });
  //   if (length > 0) {
  //     totalAverage = average / length
  //     var roundedAverage = Math.round(totalAverage * 10) / 10;
  //     return `Class Average: ${roundedAverage} / 5`;
  //   } else {
  //     return "No Average Available";
  //   }
  // };

  const changeAvg = () => { 
    var roundedAverage = Math.round(average * 10) / 10;
    if (roundedAverage <= 2.4) {
      return <LowAverage>Avg: {roundedAverage}</LowAverage>
    } else if (roundedAverage > 2.5 && roundedAverage <= 3.6 ){
      return <Average>Avg: {roundedAverage}</Average>;
    } else {
      return <HighAverage>Avg: {roundedAverage}</HighAverage>;
    }
  }

  return (
    <StudentCard>
      <Row style={styles.skillRow}>
        <Name>
          <Link to={{ pathname: `/student/${props.id}`}} className='card-link'>
          <div className='borderCenterOther'>
          {props.first_name} {props.last_name}
          </div>
          </Link>
        </Name>
        {changeAvg()}
      </Row>
      <Row style={styles.skillRow}>
        <Skill>Technical: {props.technical}</Skill>
        <Skill>Effort: {props.effort}</Skill>
        <Skill>Social: {props.social}</Skill>
      </Row>
      <Row style={styles.skillRow}>
        <Button onClick={toggle}>Edit</Button>
        <Link to={`/student/${props.id}`}>
        <ViewButton>Student Page</ViewButton>
        </Link>
        <RedButton
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this student? \nThis will delete all comments and tasks associated to this student."))
              props.deleteStudent(props.id);
          }}
        >
          Delete
        </RedButton>
      </Row>
      <Row>
        {toggleForm ? (
          <StudentForm
            student={props}
            toggleEdit={toggle}
            editStudent={props.editStudent}
          />
        ) : (
          <></>
        )}
      </Row>
    </StudentCard>
  );
};

export default StudentMap;

const styles = {
  skillRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: ".5em 0em"
  },

};
