import React, {useState, useEffect} from 'react';
import {H1, Row} from '../../styles/Global';
import axios from 'axios'



const IntPage = (props) => {
  const [int, setInt] = useState()

  useEffect(() => {
    const { id } = props.match.params;
    if (id) {
      axios.get(`/api/interviews/${id}`).then(res => {
        setInt(res.data)
      })
    }
  }, [])


  if (!int) return null;
  return(
    <div style={styles.container}>
      <Row>
        <H1>

      {int.name}
        </H1>
      </Row>
      <div>
        {/* <Questions /> */}
      </div>
    </div>
  )
}

export default IntPage;

const styles = {
  container: {
    padding: '2em'
  }
}