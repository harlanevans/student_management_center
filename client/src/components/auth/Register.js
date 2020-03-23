import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Row, H1, Button, Form, Input } from "../../styles/Global";
// import { Text } from '../../styles/ComStyle';

class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "", name: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, passwordConfirmation, name } = this.state;
    const {
      auth: { handleRegister },
      history
    } = this.props;
    if (password.length < 8 && passwordConfirmation.length < 8) 
    alert("Password must be 8 characters or more.")
    if (password === passwordConfirmation)
      handleRegister({ email, password, name }, history);
    else alert("Passwords Do Not Match!");
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, passwordConfirmation, name } = this.state;

    return (
      <div style={styles.container}>
        <Row>
          <H1>Register</H1>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            autoFocus
            required
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="name"
            required
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="passwordConfirmation"
            required
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
            type="text"
          />
          <div>
            <Button onSubmit={this.handleSubmit} type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
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
