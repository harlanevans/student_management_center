import React, { useState, useEffect } from "react";
import axios from "axios";
import { SchoolCard, SchoolTitle } from "../../styles/SchoolStyle";
import { ViewButton, Row, H1 } from "../../styles/Global";
import { Link } from "react-router-dom";

const Schools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("/api/schools").then(res => {
      setSchools(res.data);
    });
  }, []);

  const renderSchools = () => {
    return schools.map(school => {
      return (
        <div style={styles.cardMap}>
          <SchoolCard>
            <SchoolTitle>{school.name}</SchoolTitle>
            <Row style={styles.button}>
              <Link to={{ pathname: `/schools/${school.id}` }}>
                <ViewButton>View School</ViewButton>
              </Link>
            </Row>
          </SchoolCard>
        </div>
      );
    });
  };

  return (
    <div style={styles.container}>
      <Row style={styles.textCont}>
        <H1>Schools</H1>
      </Row>
      <>{renderSchools()}</>
    </div>
  );
};

export default Schools;

const styles = {
  container: {
    padding: "2em"
  },
  padding: {
    padding: "1em 0em"
  },
  paddingMore: {
    padding: "2em 0em"
  },
  cardMap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    flex: "50%"
  },
  textCont: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    textAlign: "center"
  },
  button: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "1em"
  }
};
