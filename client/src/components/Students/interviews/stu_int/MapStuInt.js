import React, { useEffect, useState } from "react";
import { Row, SubTitle, ViewButton } from "../../../../styles/Global";
import axios from "axios";
import { Link } from "react-router-dom";
import { DatePosted } from "../../../../styles/CheckInS";

const MapStuInt = (props) => {
  // const [student, setStudent] = useState({})
  const [interview, setInterview] = useState({});
  const [showInt, setShowInt] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/interviews/${props.int.interview_id}`)
      .then((res) => setInterview(res.data))
      .then(
        axios
          .get(`/api/interviews/${props.int.interview_id}/questions`)
          .then((res) => setQuestions(res.data))
      );
    // debugger
  }, []);

  const dateCreated = () => {
    //! REFACTOR THIS TO MOMENTJS
    var date = new Date(props.int.created_at);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let dayOfWeek = days[date.getDay()];
    let hour = date.getHours();
    var ampm = hour >= 12 ? "PM" : "AM";
    let min = date.getMinutes();
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    min = min < 10 ? "0" + min : min;
    var strTime = hour + ":" + min + " " + ampm;
    var fullDate = month + "/" + day + "/" + year;
    return `${fullDate} at ${strTime} (${dayOfWeek})`;
  };

  if (!interview) return null;
  return (
    <div
      style={{
        border: "solid 2px black",
        borderRadius: "3px",
        margin: "1em 0em",
        padding: "1em",
      }}
    >
      <Row>
        <Link
          to={{
            pathname: `/student_interview/${props.int.id}`,
            state: {
              student: props.student,
              interview: interview,
              questions: questions,
              stu_int: props.int,
              answers: props.answers
            },
          }}
          className="card-link"
        >
          <SubTitle className="borderCenterOther">{interview.name}</SubTitle>
        </Link>
      </Row>
      <Row style={styles.viewButton}>
        {showInt ? (
          <ViewButton onClick={() => setShowInt(!showInt)}>
            Hide Interview <span>&#8593;</span>
          </ViewButton>
        ) : (
          <ViewButton onClick={() => setShowInt(!showInt)}>
            Show Interivew <span>&#8595;</span>
          </ViewButton>
        )}
      </Row>
      <div>{showInt && <div>Interview Stuff</div>}</div>
      <Row style={{ paddingTop: "0.5em" }}>
        <DatePosted>Submitted: {dateCreated()}</DatePosted>
      </Row>
    </div>
  );
};

export default MapStuInt;

const styles = {
  viewButton: {
    paddingTop: "1em",
  },
};
