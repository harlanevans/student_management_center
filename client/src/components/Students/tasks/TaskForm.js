import React, { useState } from 'react';
import { Form, Input, Button, } from '../../../styles/Global';

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskComplete, setTaskComplete] = useState(false);
  const [staffName, setStaffName] = useState("");

    const wholeTask = {
      name: taskName,
      complete: taskComplete,
      staff: props.user.name,
      user_id: props.user.id
    };


    const handleSubmit = (e) => {
      e.preventDefault()
      props.addTask(wholeTask)
      props.toggle()
    }


  return(
    <div style={styles.formCont}>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Task"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                type="text"
              />
              {/* <Input
                placeholder="Staff Member"
                value={staffName}
                onChange={e => setStaffName(e.target.value)}
                type="text"
              /> */}
              <div>
                <Button onSubmit={handleSubmit}>Add</Button>
              </div>
            </Form>
          </div>
  )
}

export default TaskForm;

const styles = {
  formCont: {
    width: "50%"
  },
}