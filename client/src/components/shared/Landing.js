import React from 'react';
import { H1, Paragraph, Row, RedButton, Button } from '../../styles/Global';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={styles.container}>
      <Fade>
        <H1 style={styles.row}>Student Management Center</H1>
        <div style={styles.padding}>
          <div style={styles.textCont}>
            <Paragraph style={styles.text}>
              The purpose of this app is to be able to track students abilities,
              progress to be made, any issues they are having, and to document
              all of the above.
            </Paragraph>
          </div>
          <Paragraph style={styles.textCont}>
            <a
              href="https://github.com/harlanevans/student_management_center"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              className=" link"
            >
              <Button>Github Repo</Button>
            </a>
          </Paragraph>
          <Row style={styles.row}>
            <Link to="/schools">
              <RedButton>Get Started</RedButton>
            </Link>
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default Landing;

const styles = {
  container: {
    padding: "2em"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  flexWrap: 'wrap',
  textAlign: 'center',
  },
  link: {
    color: "#1985A1",
    
  },
  padding: {
    padding: '1em 0em'
    
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: 'wrap',
    textAlign: 'center',
    
  },
  textCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: '1em 0em',
    flexWrap: 'wrap',
    

  }
};