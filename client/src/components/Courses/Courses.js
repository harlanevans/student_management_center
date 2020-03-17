import React, { useState, useEffect } from "react";
import {
  H1,
  Paragraph,
  Row,
  Button,
  Input,
  FormButton
} from "../../styles/Global";
import { Fade } from "react-reveal";
import axios from "axios";
import CourseForm from "./CourseForm";
import CourseMap from "./CourseMap";

const Courses = props => {
  const [toggleForm, setToggleForm] = useState(false);
  const [courses, setCourses] = useState([]);
  // const value = useContext(MyContext);

  useEffect(() => {
    if (props.school) {
      axios.get(`/api/schools/${props.school.id}/courses`).then(res => {
        setCourses(res.data);
      });
    } else {
      axios.get(`/api/courses`).then(res => {
        setCourses(res.data);
      });
    }
  }, [props.school]);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  const renderCourses = () => {
    return (
      <div style={styles.cardMap}>
        {courses.map(course => (
          <CourseMap
            key={course.id}
            {...course}
            deleteCourse={deleteCourse}
            editCourse={editCourse}
          />
        ))}
      </div>
    );
  };

  const addCourse = course => {
    setCourses([...courses, course]);
  };

  const deleteCourse = id => {
    axios.delete(`/api/schools/${props.school.id}/courses/${id}`).then(res => {
      console.log(res.data);
    });
    setCourses(courses.filter(course => course.id !== id));
  };

  const editCourse = (id, title) => {
    axios
      .put(`/api/schools/${props.school.id}/courses/${id}`, { title })
      .then(res => {
        const newCourses = courses.map(c => {
          if (c.id === id) {
            return res.data;
          }
          return c;
        });
        setCourses(newCourses);
      });
  };

  return (
    <div style={styles.container}>
      <Fade>
        <Row style={styles.textCont}>
          <H1>{props.school ? `Courses for ${props.school.name}` : 'All Courses'}</H1>
        </Row>
        {props.school ? (
          <>
          <Row style={styles.textCont}>
            <Paragraph style={styles.padding}>
              You can either add a new course, or select one of the two below.
            </Paragraph>
          </Row>
        <Row style={styles.paddingMore}>
          <Button onClick={toggle}>Add Course</Button>
        </Row>
        </>
        ) : (
          <Row style={styles.textCont}>
              <Paragraph style={styles.padding}>These are all of the courses for all schools.</Paragraph>
          </Row>
        )}
        {toggleForm ? (
          <CourseForm
            addCourse={addCourse}
            editCourse={editCourse}
            toggleForm={toggle}
            school={props.school}
          />
        ) : (
          <></>
        )}
        <div>
          {courses.length > 0 ? (
            <>{renderCourses()}</>
          ) : (
            <Row style={styles.textCont}>
              <Paragraph>You currently have no courses.</Paragraph>
            </Row>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Courses;

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
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    width: "100%",
    flex: "50%"
  },
  textCont: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  }
};
