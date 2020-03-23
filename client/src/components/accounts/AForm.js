import React, { useState, useEffect } from "react";
import { Form, Input } from "../../styles/Global";

const AForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(props.auth.user.name);
    setEmail(props.auth.user.email);
  }, [props.auth]);

  return (
    <div>
      <Form>
        <Input placeholder="Name" value={name} />
        <Input placeholder="Email" value={email} />
      </Form>
    </div>
  );
};

export default AForm;
