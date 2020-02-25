import React, { useState, useEffect } from "react";
import Com from "./Com";
import CForm from "./CForm";
import axios from "axios";
import { Row, H1, Button, Paragraph } from "../../../styles/Global";

const Comments = props => {
  const [comments, setComments] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    // const
    axios.get(`/api/students/${props.student.id}/comments`).then(res => {
      setComments(res.data);
    });
  }, []);

  const renderComments = () => {
    if (!comments) return "You have no comments for this student";
    return comments.map(comment => {
      return (
        <Com key={comment.id} {...comment} deleteComment={deleteComment} />
      );
    });
  };

  const addComment = comment => {
    debugger;
    setComments([comment, ...comments]);
  };

  const deleteComment = (id, comment) => {
    axios
      .delete(`/api/students/${props.student.id}/comments/${id}`, comment)
      .then(res => {
        console.log(res.data);
      });
    setComments(comments.filter(comment => comment.id !== id));
  };

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div>
      <Row>
        <H1>Comments</H1>
      </Row>
      <Row>
        <Paragraph>
          Comments are for staff for documented student progress, concern, and
          updates.
        </Paragraph>
      </Row>
      <Row style={styles.padding}>
        <Button onClick={() => toggle()}>Add Comment</Button>
      </Row>
      {toggleForm ? (
        <Row style={styles.padding}>
          <CForm
            addComment={addComment}
            toggleForm={toggle}
            student={props.student}
          />
        </Row>
      ) : (
        <></>
      )}
      <div style={styles.col}>{renderComments()}</div>
    </div>
  );
};

export default Comments;

const styles = {
  container: {
    padding: "2em"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  padding: {
    padding: "1em 0em"
  },
  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingRight: "1em"
  }
};
