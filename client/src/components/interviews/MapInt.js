import React, { useState, useEffect } from "react";
import { InterviewCard, CardTitle } from "../../styles/IntStyles";
import { Button, RedButton, ViewButton, Row, H1 } from "../../styles/Global";
import { Link } from "react-router-dom";
import NewInterview from "./NewInterview";


const MapInt = props => {
  const [editInterview, setEditInterview] = useState(false);

  const toggleEdit = () => {
    setEditInterview(!editInterview);
  };

  return (
    <InterviewCard>
      <CardTitle>{props.name}</CardTitle>
      <Row style={styles.buttons}>
        <Button onClick={toggleEdit}>Edit</Button>
        <Link to={{ pathname: `/interview/${props.id}` }}>
          <ViewButton>Interview Page</ViewButton>
        </Link>
        <RedButton>Delete</RedButton>
      </Row>
      {editInterview ? (
        <Row>
          <NewInterview />
        </Row>
      ) : (
        <></>
      )}
    </InterviewCard>
  );
};

export default MapInt;

const styles = {
  container: {
    padding: "2em"
  },
  centerRow: {
    display: "flex",
    // flexFlow: "row wrap",
    justifyContent: "center",
    height: "100%",
    padding: "2em 0em"
  },
  buttons: {
    display: "flex",
    flexFlow: "row wrap",
    flex: " 1 1 33%",
    justifyContent: "space-evenly",
    paddingTop: "2em"
  }
};
