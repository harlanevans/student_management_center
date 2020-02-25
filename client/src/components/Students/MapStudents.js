import React from "react";
import { StudentCardAll, NameAll } from "../../styles/Student";
import { Link } from "react-router-dom";

const MapStudents = props => {
  return (
    <StudentCardAll>
      <Link to={{ pathname: `/student/${props.id}` }} class="student-link">
        <NameAll style={styles.center}>
          {props.first_name} {props.last_name}
        </NameAll>
      </Link>
    </StudentCardAll>
  );
};

export default MapStudents;

const styles = {
  center: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center"
  },
  colorWhite: {
    color: "white"
  }
};
