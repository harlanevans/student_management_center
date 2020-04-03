import React from 'react';
import { QCard } from '../../../styles/QStyle';
import { Form, Input, Button, Row, Label } from '../../../styles/Global';


const Quests = (props) => {


  return (
    <QCard>
      <Row>
        Type of Question: {props.qType}
      </Row>
      <Row>

      Question: {props.q}
      </Row>
      <Row>
      <Input type='text' placeholder='Answer'/>
      </Row>
    </QCard>
    
  )
}

export default Quests;

const styles = {
  cont: {

  }
}