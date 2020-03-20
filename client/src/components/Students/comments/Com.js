import React from "react";
import { Row, H1, Button, RedButton } from "../../../styles/Global";
import {
  CommentCard,
  Author,
  Body,
  TagOther,
  TagConcern,
  TagUpdate,
  TagProgress,
  DatePosted
} from "../../../styles/ComStyle";

const Com = props => {
  const tagColor = () => {
    const tagValue = props.tag;
    if (tagValue === "Other") {
      return <TagOther>{props.tag}</TagOther>;
    } else if (tagValue === "Update") {
      return <TagUpdate>{props.tag}</TagUpdate>;
    } else if (tagValue === "Concern") {
      return <TagConcern>{props.tag}</TagConcern>;
    } else {
      return <TagProgress>{props.tag}</TagProgress>;
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

  // const deleteAndEdit = () => (
  //   <Row style={styles.buttons}>
  //     <Button style={{ margin: "0em 1em" }}>Edit</Button>
  //     <RedButton onClick={() => props.deleteComment(props.id)}>
  //       Delete
  //     </RedButton>
  //   </Row>
  // );

  return (
    <CommentCard>
      <Row style={styles.top}>
        <Author>{props.author} commented:</Author>
        {tagColor()}
      </Row>
      <Row style={styles.body}>

        {props.body}
        </Row>
      {/* {deleteAndEdit()} */}
      <Row>
        <DatePosted>{dateCreated()}</DatePosted>
      </Row>
    </CommentCard>
  );
};

export default Com;

const styles = {
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  body: {
    padding: ".5em 0em"
  },
  tag: {},
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
};
