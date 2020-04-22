import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentContext = React.createContext();
export const StudentConsumer = StudentContext.Consumer;

export const StudentProvider = (props) => {
  const [student, setStudent] = useState({});
  const [studentInterviews, setStudentInterviews] = useState([]);
  const [studentAnswers, setStudentAnswers] = useState([]);
  const [studentCheckIns, setStudentCheckIns] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const stated = {
    student,
    studentInterviews,
    studentAnswers,
    studentCheckIns,
    loaded,
  };

  const getStudent = (id) => {
    axios
      .get(`/api/students/${id}`)
      .then((res) => setStudent(res.data))
      .then(getStuChecks(id))
      .catch((res) => console.log(res));
  };

  const getStuChecks = (id) => {
    axios
      .get(`/api/students/${id}/checkins`)
      .then((res) => setStudentCheckIns(res.data))
      .then(getStuAnswers(id))
      .catch((res) => console.log(res));
  };

  const getStuAnswers = (id) => {
    axios
      .get(`/api/students/${id}/answers`)
      .then((res) => setStudentAnswers(res.data))
      .then(getStuInt(id))
      .catch((res) => console.log(res));
  };

  const getStuInt = (id) => { 
    axios
      .get(`/api/students/${id}/student_interviews`)
      .then((res) => setStudentInterviews(res.data))
      .then(resAccepted())
      .catch((res) => console.log(res));
  };

  const resAccepted = () => {
    setLoaded(true);
  };

  return (
    <StudentContext.Provider
      value={{
        ...stated,
        getStuAnswers: getStuAnswers,
        getStudent: getStudent,
        setStudent: (student) => setStudent(student),
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};
