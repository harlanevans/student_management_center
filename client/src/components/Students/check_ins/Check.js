import React, { useState } from "react";
import {
  H1,
  Row,
  Paragraph,
  Button,
  RedButton,
  ViewButton
} from "../../../styles/Global";
import {
  CheckIn,
  Bad,
  VeryBad,
  AverageCheck,
  Good,
  VeryGood,
  DatePosted
} from "../../../styles/CheckInS";
const Check = props => {
  const [seeAll, setSeeAll] = useState(false);

  const toggleCheckIn = () => {
    setSeeAll(!seeAll);
  };

  const checkStatus = () => {
    const { status } = props;
    if (status === "1") {
      return <VeryBad>Status</VeryBad>;
    } else if (status === "2") {
      return <Bad>Status</Bad>;
    } else if (status === "3") {
      return <AverageCheck>Status</AverageCheck>;
    } else if (status === "4") {
      return <Good>Status</Good>;
    } else {
      return <VeryGood>Status</VeryGood>;
    }
  };

  const dateCreated = () => {
    //! REFACTOR THIS TO MOMENTJS
    var date = new Date(props.created_at);
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

  return (
    <CheckIn>
      <div style={styles.topRow}>
        <H1>Check-in: {props.id}</H1>
      </div>

      {seeAll ? (
        <div style={styles.topicCol}>
          <div style={styles.topic}>
            <Paragraph style={styles.topicTitle}>Technical</Paragraph>
            <Row>{props.technical}</Row>
          </div>
          <div style={styles.topic}>
            <Paragraph style={styles.topicTitle}>Feeling</Paragraph>
            <Row>{props.feeling}</Row>
          </div>
          <div style={styles.topic}>
            <Paragraph style={styles.topicTitle}>Groups</Paragraph>
            <Row>{props.groups}</Row>
          </div>
          <div style={styles.topic}>
            <Paragraph style={styles.topicTitle}>
              Questions, Concerns, Suggestions
            </Paragraph>
            <Row>{props.qcs}</Row>
          </div>
          <div style={styles.topic}>
            <Paragraph style={styles.topicTitle}>Time Spent</Paragraph>
            <Row>{props.time_spent}</Row>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Row style={styles.toggleButton}>
        <Button onClick={toggleCheckIn}>
          {seeAll ? "Close Check-In" : "View Check-In"}
        </Button>
        <div>
          {/* <ViewButton>Edit</ViewButton>
          <RedButton onClick={() => props.deleteCheckIn(props.id)}>
            Delete
          </RedButton> */}
          <div style={styles.columnStatus}>
            <div style={styles.status}>{checkStatus()}</div>
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: "0.5em" }}>
        <DatePosted>Submitted: {dateCreated()}</DatePosted>
      </Row>
    </CheckIn>
  );
};

export default Check;

const styles = {
  topRow: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    width: "100%",
    padding: ".5em 0em"
  },
  toggleButton: {
    paddingTop: "1em",
    justifyContent: "space-between"
  },
  columnStatus: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%"
  },
  status: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  topicCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%"
  },
  topic: {
    paddingBottom: "1em"
  },
  topicTitle: {
    color: "#46494C"
  }
};
