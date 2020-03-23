import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, H1, SchoolH1, ViewButton } from "../../styles/Global";
import Courses from "../Courses/Courses";

const SchoolPage = props => {
  const [school, setSchool] = useState();
  // const [courses, setCourses] = useState([]);
  const [showCourses, setShowCourses] = useState(true);

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/schools/${id}`).then(res => {
      setSchool(res.data);
    });
    // axios.get(`/api/schools/${id}/courses`).then(res => {
    //   setCourses(res.data);
    // });
  }, [props.match.params]);

  const toggleCoursesPage = () => {
    setShowCourses(!showCourses);
  };

  if (!school) return null;
  return (
    <div style={styles.container}>
      <Row style={styles.textCont}>
        <SchoolH1 style={styles.underline}>{school.name}</SchoolH1>
      </Row>
      <ViewButton onClick={toggleCoursesPage}>{showCourses ? "Hide Courses" : "Show Courses"}</ViewButton>
      {showCourses ? <Courses school={school} /> : <> </>}
      <Row>
        <H1>Tasks</H1>
        {/* <SchoolTasks /> */}
      </Row>
    </div>
  );
};

export default SchoolPage;

const styles = {
  container: {
    padding: "2em"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  textCont: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    textAlign: "center"
  },
  underline: {
    borderBottom: "solid 1px gray"
  }
};
