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
    const { name, email } = props.auth.user;
    setName(name);
    setEmail(email);
  }, [props.auth.user]);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const accountView = () => (
    <>
      <Row style={styles.centerRow}>
        <div style={styles.imageCont}>
        <img src={props.auth.user.image || defaultImage} alt="user" style={styles.image}/>
        </div>
      </Row>
      <Row style={styles.userStuff}>
        <Paragraph>Name: </Paragraph>
      </Row>
      <Row style={styles.userStuff}>
        <Paragraph>
          <b>{name}</b>
        </Paragraph>
      </Row>
      <Row style={styles.userStuff}>
        <Paragraph>Email:</Paragraph>
      </Row>
      <Row style={styles.userStuff}>
        <Paragraph>
          <b>{email}</b>
        </Paragraph>
      </Row>
      <Row style={styles.button}>
        <ViewButton onClick={toggleEdit}>Edit</ViewButton>
      </Row>
    </>
  );

  return (
    <div style={styles.container}>
      <Row style={styles.centerRow}>
        <H1>Account Details</H1>
      </Row>
      <Row style={styles.container}></Row>
      {editing ? (
        <div style={styles.accountCont}>
        <AForm auth={props.auth} defaultImage={defaultImage} toggleEdit={toggleEdit}/>
      
        </div>
      ) : (
        <div style={styles.accountCont}>{accountView()}</div>
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
    // justifyContent: "space-between",
    paddingTop: ".5em"
  },
  accountCont: {
    border: "solid 2px #46494c",
    padding: "1em",
    // margin: "1em",
    borderRadius: "3px",
    // width: "100%",
    // height: "100%",
    backgroundColor: "white",
    boxShadow: "1px 1px 2px 2px #dcdcdd"
  },
  button: {
    paddingTop: '1em'
  },
  imageCont: {
    width: '25%',
    height: '25%'
  },
  image: {
    width: '100%',
    height: '100%'
  }
};
