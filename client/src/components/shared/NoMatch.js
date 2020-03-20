import React from "react";
import { Link } from "react-router-dom";
import { H1, Row, Button } from '../../styles/Global';

const NoMatch = () => (
  <Row>
    <H1>Page not found. </H1>
   <Link to='/'>
    <Button>Home</Button>
   </Link>
  </Row>
);

export default NoMatch;
