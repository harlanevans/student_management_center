import React, { useState, useEffect } from "react";
import { Button } from "../../../styles/Global";
import axios from "axios";
import { AuthConsumer } from "../../../providers/AuthProvider";
import { withRouter } from "react-router-dom";
import TaskForm from './TaskForm';

const StudentTasks = props => {
  const [tasks, setTasks] = useState([]);
  // const [taskComplete, setTaskComplete] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [user, setUser] = useState();



  useEffect(() => {
    axios.get(`/api/students/${props.studentId}/tasks`).then(res => {
      setTasks(res.data);
    });
    setUser(props.auth.user);
  }, [props.auth.user, props.studentId]);

  const toggleTaskForm = () => {
    setToggleForm(!toggleForm);
  };

  const renderTasks = () => {
    // if (!tasks) return null;
    return tasks.map(task => (
      <div key={task.id}>
        {task.name}
        {task.complete ? "Complete" : "NOT Complete"}
        {/* <Input type='checkbox' value={taskComplete} onChange={handleComplete}/> */}
      </div>
    ));
  };

  const addTask = (task) => {
    axios
      .post(`/api/students/${props.studentId}/tasks`, task)
      .then(res => {
        setTasks([res.data, ...tasks]);
      });
  };

  //! Sets tasks to complete
  // const handleComplete = () => {
  //   setTaskComplete(!taskComplete);
  // };

  return (
    <div style={styles.mainRow}>
      <div style={styles.colOne}>
        <Button onClick={toggleTaskForm}>New Task</Button>
        {toggleForm ? (
            <TaskForm user={user} addTask={addTask} toggle={toggleTaskForm}/>
        ) : (
          <></>
        )}
      </div>
      <div style={styles.colTwo}>{renderTasks()}</div>
    </div>
  );
};

export const ConnectedStudentTasks = props => {
  return (
    <AuthConsumer>
      {auth => <StudentTasks {...props} auth={auth} />}
    </AuthConsumer>
  );
};

export default withRouter(ConnectedStudentTasks);

const styles = {
  formCont: {
    width: "50%"
  },
  colOne: {
    width: "50%"
  },
  colTwo: {
    width: "50%"
  },
  mainRow: {
    padding: "1em 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};
