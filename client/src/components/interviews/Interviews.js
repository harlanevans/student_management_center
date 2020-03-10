import React, { useState, useEffect } from 'react';
import { Row, H1} from '../../styles/Global';

const Interviews = () => {

  return(
    <div style={styles.container}>
      <Row style={styles.centerRow}>
        <H1>
      Interviews
        </H1>
      </Row>
    </div>
  )
}

export default Interviews;

const styles = {
  container: {
    padding: "2em"
  },
  centerRow: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: 'center',
  }
}