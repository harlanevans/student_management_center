import React, { useState, useEffect } from "react";
import { H1, Row, Form, Input, Button } from "../../../styles/Global";
import axios from "axios";
import { AuthConsumer } from "../../../providers/AuthProvider";
import { withRouter } from "react-router-dom";

const StudentTasks = props => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskComplete, setTaskComplete] = useState(false);
  const [staffName, setStaffName] = useState("");
  const [toggleForm, setToggleForm] = useState(false);
  const [user, setUser] = useState()

  const wholeTask = {
    name: taskName,
    complete: taskComplete,
    staff: staffName
  };

  useEffect(() => {
    axios.get(`/api/students/${props.studentId}/tasks}`).then(res => {
      setTasks(res.data);
    });
    setUser(props.auth.user)
  }, []);

  const toggleTaskForm = () => {
    setToggleForm(!toggleForm);
  };

  

  const renderTasks = () => {
    return tasks.map(task => (
      <div>
        {task.name}
        {task.complete}
        {/* <Input type='checkbox' value={taskComplete} onChange={handleComplete}/> */}
      </div>
    ));
  };

  const handleComplete = () => {
    setTaskComplete(!taskComplete);
  };

  return (
    <div style={styles.mainRow}>
      <div style={styles.colOne}>
        <Button onClick={toggleTaskForm}>New Task</Button>
        {toggleForm ? (
          <div style={styles.formCont}>
            <Form>
              <Input
                placeholder="Task Name"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                type="text"
              />
              <Input
                placeholder="Staff Member"
                value={staffName}
                onChange={e => setStaffName(e.target.value)}
                type="text"
              />
            </Form>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div style={styles.colTwo}>{renderTasks()}</div>
    </div>
  );
};

export const ConnectedStudentTasks = (props) => {
  return(

    <AuthConsumer>{auth => <StudentTasks {...props} auth={auth}/>}</AuthConsumer>
    )
}

export default withRouter(ConnectedStudentTasks);


const styles = {
  formCont: {
    width: "50%"
  },
  colOne: {
    width: '50%',
  },
  colTwo: {
    width: '50%'
  },
    mainRow: {
    padding: "1em 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
};
