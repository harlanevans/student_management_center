import React from 'react';
import { H1, Paragraph, Row, RedButton } from '../../styles/Global';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={styles.container}>
    <Fade>

      <H1 style={styles.row}>Student Management Center</H1>
      <div style={styles.padding}>
        <Paragraph>
          The purpose of this app is to be able to track students abilities,
          progress to be made, any issues they are having, and to document all
          of the above.
        </Paragraph>
        <Paragraph>
          <li style={styles.padding}>

          <a
            href="https://github.com/harlanevans/student_management_center"
            target="_blank"
            style={styles.link}
            className="borderCenterBlue link"
            >
            Github Repo
          </a>
            </li>
        </Paragraph>
        <Row>
          <Link to='courses'>
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
    justifyContent: "flex-start",
  },
  link: {
    color: "#1985A1",
    
  },
  padding: {
    padding: '1em 0em'

  }
};