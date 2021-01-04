import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { register, signUp } from "../../service/twitter.service";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title-card/Title";
import Card from "../../components/Card/Card";

function Registration() {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const emailHandler = e => {
    setemail(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const saveHandler = e => {
    e.preventDefault();

    signUp(email, password)
      .then(({ data }) => {
        return register(data.localId, data.email, password);
      })
      .then(res => {
        history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Card>
      <div>
        <Title textTitle="Registration" />
      </div>
      <form onSubmit={saveHandler}>
        <Input
          type="text"
          label="Email"
          onChangeHandler={emailHandler}
        />
        <Input
          type="password"
          label="Password"
          onChangeHandler={passwordHandler}
        />
        <div>
          <Button type="submit" text="Register" />
        </div>
        <p className="link">
          <Link to="/login" style={{color:"#1979a9"}}>back to login</Link>
        </p>
      </form>
    </Card>
  );
}

export default Registration;
