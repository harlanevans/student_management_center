import React, { useState, useEffect } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Row, H1, Button, Form, Input, Paragraph } from "../../styles/Global";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    props.auth.handleLogin({ email, password }, props.history);
  };

  useEffect(() => {
    setFail(props.auth.loginFailed)
  }, [props.auth.loginFailed])

  const failed = () => {
    if (fail === true) {

      return (
        <>
          <Row style={{ paddingTop: ".5em" }}>
            <Paragraph style={{ color: "red", fontWeight: "500" }}>
              Login Failed
            </Paragraph>
          </Row>
          <Row style={{ paddingTop: ".5em" }}>
            <Paragraph>Please check your email and password</Paragraph>
          </Row>
        </>
      );
    } else {
      return null;
    }
    // return null;
  };

  return (
    <div style={styles.container}>
      <Row>
        <H1>Login</H1>
      </Row>
      <div style={styles.formPosition}>
        <div style={styles.formCont}>
          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              autoFocus
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              type="text"
            />
            <Input
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              type="password"
            />
            <div>
              <Button onSubmit={handleSubmit}>Login</Button>
            </div>
          </Form>
        </div>
      </div>
      {failed()}
    </div>
  );
};

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

const styles = {
  container: {
    padding: "2em"
  },
  formCont: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  formPosition: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // padding: "0em 4em",
    width: "100%"
  }
};
