import React, { useEffect, useState } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Row, Paragraph, H1, ViewButton } from "../../styles/Global";
import AForm from "./AForm";

const Account = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);

  const defaultImage =
    "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png";

  useEffect(() => {
    const {
      auth: {
        user: { name, email }
      }
    } = props;
    setName(name);
    setEmail(email);
  }, []);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const accountView = () => (
    <div>
      <Row style={styles.centerRow}>
        <img src={props.auth.user.image || defaultImage} />
      </Row>
      <Row style={styles.userStuff}>
        <Paragraph>Name: {name}</Paragraph>
      </Row>
      <Row style={styles.userStuff}>
        <Paragraph>Email: {email}</Paragraph>
      </Row>
    </div>
  );

  return (
    <div style={styles.container}>
      <Row style={styles.centerRow}>
        <H1>Account Details</H1>
      </Row>
      <Row>
        <ViewButton onClick={toggleEdit}>Edit</ViewButton>
      </Row>
      <Row style={styles.container}></Row>
      {editing ? (
        <AForm auth={props.auth} />
      ) : (
        <Row style={styles.centerRow}>{accountView()}</Row>
      )}
    </div>
  );
};

const ConnectedAccount = props => (
  <AuthConsumer>{auth => <Account {...props} auth={auth} />}</AuthConsumer>
);

export default ConnectedAccount;

const styles = {
  container: {
    padding: "2em"
  },
  centerRow: {
    justifyContent: "center"
  },
  userStuff: {
    justifyContent: "center",
    paddingTop: '.5em'

  }
};
