import React, { useState,  } from "react";
import { InterviewCard, CardTitle } from "../../styles/IntStyles";
import { Button, RedButton, ViewButton, Row,} from "../../styles/Global";
import { Link } from "react-router-dom";
import NewInterview from "./NewInterview";

const MapInt = props => {
  const [editInterviewForm, setEditInterviewForm] = useState(false);

  const toggleEdit = () => {
    setEditInterviewForm(!editInterviewForm);
  };

  return (
    <InterviewCard>
      <Link to={{ pathname: `/interview/${props.id}`, }} className="card-link">
        <CardTitle >
          <div className="borderCenterOther">
        {props.name}
        </div>
        </CardTitle>
      </Link>
      <Row style={styles.buttons}>
        <Button onClick={toggleEdit}>Edit</Button>
        <Link to={{ pathname: `/interview/${props.id}` }}>
          <ViewButton>Interview Page</ViewButton>
        </Link>
        <RedButton onClick={() => props.deleteInterview(props.id)}>Delete</RedButton>
      </Row>
      {editInterviewForm ? (
        <Row>
          <NewInterview
            editInterview={props.editInterview}
            interview={props}
            toggleEdit={toggleEdit}
          />
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
