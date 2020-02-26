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

const Courses = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [courses, setCourses] = useState([]);
  // const value = useContext(MyContext);

  useEffect(() => {
    axios.get("/api/courses").then(res => {
      setCourses(res.data);
    });
  }, []);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  const renderCourses = () => {
    return courses.map(course =>(
      <div style={styles.cardMap}>
       <CourseMap key={course.id} {...course} deleteCourse={deleteCourse} editCourse={editCourse}/>
      </div>
       ));
  };

  const addCourse = course => {
    setCourses([...courses, course]);
  };

  const deleteCourse = id => {
    axios.delete(`/api/courses/${id}`)
    .then(res => {
      console.log(res.data)
    })
    setCourses(courses.filter(course => course.id !== id))

  }

  const editCourse = (id, title) => {
    axios.put(`/api/courses/${id}`, {title })
    .then(res => {
      const newCourses = courses.map(c => {
        if (c.id === id) {
          return res.data;
        }
        return c;
      })
      setCourses( newCourses )
    })
  }

  return (
    <div style={styles.container}>
      <Fade>
        <H1>Courses Page</H1>
        <Paragraph style={styles.padding}>
          You can either add a new course, or select one of the two below.
        </Paragraph>
        <Paragraph>There should only ever be two courses.</Paragraph>
        <Row style={styles.paddingMore}>
          <Button onClick={toggle}>Add Course</Button>
        </Row>
        {toggleForm ? (
          <CourseForm addCourse={addCourse} editCourse={editCourse} toggleForm={toggle} />
        ) : (
          <></>
        )}
        <Row>
          {courses.length > 0 ? (
            <>{renderCourses()}</>
          ) : (
            <Paragraph>You currently have no courses.</Paragraph>
          )}
        </Row>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    flex: '50%',
  }
};
