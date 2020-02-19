import React from 'react';
import { H1, Paragraph } from '../styles/Global';

const Landing = () => {
  return(
    <div style={styles.container}>
      <H1 style={styles.row}>Student Management Center</H1>
      <div>
        <Paragraph>
        The purpose of this app is to be able to track students abilities, progress to be made, any issues they are having, and to document all of the above.
        </Paragraph>
        <Paragraph>
          <a href='' target="_blank">Github Repo</a>
        </Paragraph>
      </div>
    </div>
  )
}

export default Landing;

const styles = {
  container: {
    padding: "1em 2em"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "1em 0em"
  }
};