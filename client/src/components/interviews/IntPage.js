import React, { useState, useEffect } from "react";
import { H1, Row, Button, ViewButton } from "../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";
import Questions from "./questions/Questions";

const IntPage = props => {
  const [int, setInt] = useState();

  useEffect(() => {
    const { id } = props.match.params;
    if (id) {
      axios.get(`/api/interviews/${id}`).then(res => {
        setInt(res.data);
      });
    }
  }, [props.match.params]);

  if (!int) return null;
  return (
    <div style={styles.container}>
      <Row style={{ padding: "0em 0em" }}>
        <Link to="/interviews">
          <ViewButton>Interview Page</ViewButton>
        </Link>
      </Row>
      <Row style={styles.center}>
        <H1>{int.name}</H1>
      </Row>
      <div>
        <Questions interview={int}/>
      </div>
    </div>
  );
};

export default IntPage;

const styles = {
  container: {
    padding: "2em"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};
