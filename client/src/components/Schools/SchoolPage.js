import React, { useEffect, useState} from 'react';
import axios from 'axios'
import { Row, H1, SchoolH1 } from '../../styles/Global';
import Courses from '../Courses/Courses';

const SchoolPage = (props) => {
  const [school, setSchool] = useState()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`/api/schools/${id}`).then(res => {
      setSchool(res.data);
    });
    axios.get(`/api/schools/${id}/courses`).then(res => {
      setCourses(res.data)
    })
  }, [props.match.params.id]);

 if (!school) return null;
  return(
    <div style={styles.container}>
      <Row style={styles.textCont}>
        <SchoolH1 style={styles.underline}>
      {school.name}
        </SchoolH1>
      </Row>
      <Courses school={school}/>
    </div>
  )
}

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
    textAlign: 'center',

  },
  underline: {
    borderBottom: "solid 1px gray"
  }
};
