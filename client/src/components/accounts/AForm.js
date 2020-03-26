import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Row,
  Label,
  ViewButton,
  Paragraph
} from "../../styles/Global";
import Dropzone from "react-dropzone";

const AForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [image, setImage] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    const { name, email } = props.auth.user;
    setName(name);
    setEmail(email);
  }, [props.auth.user]);

  const onDrop = files => {
    // this.setState({ formValues: { ...this.state.formValues, file: files[0] } });
    setFile(files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.auth.updateUser(props.auth.user.id, { name, email, file });

    props.toggleEdit();
  };

  //   handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { formValues: { name, email, file, }, } = this.state;
  //   const { auth: { user, updateUser, }, } = this.props;
  //   updateUser(user.id, { name, email, file, });
  //   this.setState({
  //     editing: false,
  //     formValues: {
  //       ...this.state.formValues,
  //       file: "",
  //     },
  //   });
  // }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row style={styles.centerRow}>
          {/* <img src={props.auth.user.image || props.defaultImage} /> */}
          <Dropzone onDrop={onDrop} multiple={false} style={{margin: 0}}>
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div style={{margin: '0'}}>
                  <div {...getRootProps()} style={styles.dropzone}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <Paragraph>Drop files here...</Paragraph>
                    ) : (
                      <Paragraph>
                        Try dropping some files here, or click to select files
                        to upload.
                      </Paragraph>
                    )}
                  </div>
                  <Row style={styles.centerRow}>
                    <Label>File size must be smaller than 10MB.</Label>
                  </Row>
                </div>
              );
            }}
          </Dropzone>
        </Row>
        <div>

        <Row style={styles.userStuff}>
          <Label>Name</Label>
          <Input
            placeholder="Name"
            value={name}
            style={styles.input}
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </Row>
        <Row style={styles.userStuff}>
          <Label>Email</Label>
          <Input
            placeholder="Email"
            value={email}
            style={styles.input}
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
        </Row>
            </div>
        <Row style={styles.button}>
          <ViewButton onSubmit={handleSubmit}>Submit</ViewButton>
        </Row>
      </Form>
    </>
  );
};

export default AForm;

const styles = {
  container: {
    padding: "2em"
  },
  centerRow: {
    justifyContent: "center",
  },
  input: {
    width: "100%",
    padding: "0"
  },
  button: {
    paddingTop: "1em"
  },
  dropzone: {
    height: "10em",
    width: "10em",
    border: "1px dashed #46494c",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: '10%',
    padding: "0em 1em"
  }
};
