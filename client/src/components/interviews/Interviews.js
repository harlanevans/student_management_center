import React, { useState, useEffect } from "react";
import { Row, H1, Button, RedButton, ViewButton } from "../../styles/Global";
import axios from "axios";
import NewInterview from "./NewInterview";
import { InterviewCard, CardTitle } from "../../styles/IntStyles";
import MapInt from "./MapInt";

const Interviews = () => {
  const [interviews, setInterviews] = useState([]);
  const [newInterview, setNewInterview] = useState(false);

  useEffect(() => {
    axios.get("/api/interviews").then(res => {
      setInterviews(res.data);
    });
  }, []);

  const toggle = () => {
    setNewInterview(!newInterview);
  };

  const addInterview = interview => {
    setInterviews([...interviews, interview]);
  };

  const editInterview = (id, name) => {
    axios.put(`/api/interviews/${id}`, { name }).then(res => {
      const newArray = interviews.map(i => {
        if (i.id === id) {
          return res.data;
        }
        return i;
      });
      setInterviews(newArray);
    });
  };

  const deleteInterview = id => {
    debugger;
    axios.delete(`/api/interviews/${id}`, id).then(res => {
      console.log(res.data);
    });
    setInterviews(interviews.filter(i => i.id !== id));
  };

  const renderInterviews = () =>
    interviews.map(i => (
      <MapInt
        key={i.id}
        {...i}
        editInterview={editInterview}
        deleteInterview={deleteInterview}
      />
    ));

  return (
    <div style={styles.container}>
      <Row style={styles.centerRow}>
        <H1>Interviews</H1>
      </Row>
      <Row>
        <Button onClick={toggle}>New Interview</Button>
      </Row>
      {newInterview ? (
        <NewInterview toggleForm={toggle} addInterview={addInterview} />
      ) : (
        <></>
      )}
      <Row style={styles.centerRow}>{renderInterviews()}</Row>
    </div>
  );
};

export default Interviews;

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
