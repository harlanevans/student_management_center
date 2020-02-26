import React from 'react';
import {
  H1,
  Paragraph,
  Row,
  Button,
} from "../../styles/Global";

const Rubric = () => {
  return(
    <div style={styles.container}>
      <Row style={styles.center}>
        <H1>
      Rubric
        </H1>
      </Row>
      <Row style={styles.center}w>
        <Paragraph>
          Below are the keys and rubrics we will be judging our students skills on, what type of comment we should be making, etc,.
        </Paragraph>
      </Row>
    </div>
  )
}

export default Rubric

const styles = {
  container: {
    padding: '2em'
  },
  center: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
