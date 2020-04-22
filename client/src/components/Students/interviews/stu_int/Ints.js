// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Row, SubTitle } from "../../../../styles/Global";
// import MapStuInt from "./MapStuInt";
// import { Link } from "react-router-dom";

// const Ints = (props) => {
//   const [interviews, setInterviews] = useState([]);

//   useEffect(() => {
//     const { id } = props.student;
//     axios
//       .get(`/api/students/${id}/student_interviews`)
//       .then((res) => setInterviews(res.data));
//   }, [props.student]);



//   if (!interviews) return null;
//   return <div>{renderInts()}</div>;
// };

// export default Ints; 
