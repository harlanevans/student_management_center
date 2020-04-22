import React from 'react';
import { OpenButton } from '../../styles/NavStyles';

const Loader = () => {
  return (
    <div style={styles.mainCont}>
      <div style={styles.center}>
        <div style={styles.col}>
          
      <OpenButton className="pulseAnimOff"></OpenButton>
    </div>
      </div>
    </div>
  );
}

export default Loader;

const styles = {
  mainCont: {
    backgroundColor: 'white',
    height: '100vh',
    width: '100%',
    zIndex: '200',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
    
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'

  }
}