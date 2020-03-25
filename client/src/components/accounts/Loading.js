import React from 'react';
import { Row, H1 } from '../../styles/Global';

const Loading = () => {
  return(
    <div style={styles.cont}>
      <Row>
        <H1 style={{color: "white"}}>Loading...</H1>
      </Row>

    </div>
  )
}

export default Loading;

const styles= {
  cont: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    width: '100vw',
    height: '100vh',
    zIndex: "1000"
  }
}