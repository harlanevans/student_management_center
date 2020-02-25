import React from 'react';
import { Button, RedButton } from '../../../styles/Global';

const Modal = (props) => {

  const deleteTrue = () => {
    props.toggleDelete()
    props.toggleDeleteModal()
  }
  
  const deleteFalse = () => {
    props.toggleDeleteModal()
  }

  return(
    <div style={styles.container}>
      Modal
      <Button onClick={() => deleteFalse()}>Cancel</Button>
      <RedButton onClick={() => deleteTrue()}>Delete</RedButton>
    </div>
  )
}

export default Modal;

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, .3)',

  }
}