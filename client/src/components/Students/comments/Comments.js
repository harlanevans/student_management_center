import React, { useState, useEffect } from "react";
import Com from "./Com";
import CForm from "./CForm";
import axios from "axios";
import { Row, H1, Button, Paragraph, SubTitle, ViewButton } from "../../../styles/Global";

const Comments = props => {
  const [comments, setComments] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const [hideComments, setHideComments] = useState(true);

  useEffect(() => {
    // const
    axios.get(`/api/students/${props.student.id}/comments`).then(res => {
      setComments(res.data);
    });
  }, [props.student.id]);

  const renderComments = () => {
    if (comments.length === 0)
      return (
        <Paragraph>You currently have no comments for this student.</Paragraph>
      );
    return comments.map(comment => {
      return (
        <Com
          key={comment.id}
          {...comment}
          deleteComment={deleteComment}
          user={props.user}
        />
      );
    });
  };

  const addComment = comment => {
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
        <SubTitle>Comments</SubTitle>
      </Row>
      <Row>
        <Paragraph>
          Comments are for staff for documented student progress, concern, and
          updates.
        </Paragraph>
      </Row>
      <Row style={styles.buttonRow}>
        <Button onClick={() => toggle()}>Add Comment</Button>
        <ViewButton onClick={() => setHideComments(!hideComments)}>
          {hideComments ? (<>Show Comments <span>&#8595;</span></>) : (<>Hide Comments <span>&#8593;</span></>)}
          
        </ViewButton>
      </Row>
      {toggleForm ? (
        <Row style={styles.padding}>
          <CForm
            addComment={addComment}
            toggleForm={toggle}
            student={props.student}
            user={props.user}
          />
        </Row>
      ) : (
        <></>
      )}
      {hideComments ? null : <div style={styles.col}>{renderComments()}</div>}
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
    width: "100%"
    // paddingRight: "1em"
  },
  buttonRow: {
    padding: "1em 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
