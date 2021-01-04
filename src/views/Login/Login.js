import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "./login.css";
import { getProfil, signIn } from "../../service/twitter.service";
import { sign_in } from "../../stores/actions/loginAction";
import logo from "../../assets/images/logo-twitter.png";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title-card/Title";
import Card from "../../components/Card/Card";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const loginHandler = e => {
    e.preventDefault();

    let dataLogin = {
      name:null,
      username: null,
      avatar:null,
      isLogged:false,
      id: null
    }

    signIn(email, password)
      .then(({ data }) => {
        window.localStorage.setItem("id", data.localId);

        return getProfil(window.localStorage.getItem("id"));
      })
      .then(({data})=>{
        dataLogin.name = data.name;
        dataLogin.username = data.username
        dataLogin.avatar = data.avatar;
        dataLogin.id= window.localStorage.getItem("id");
        dataLogin.isLogged = true;
        dispatch(sign_in(dataLogin));

        if(data.name){
          history.push("/home");
        }else{
          history.push("/editProfil");
        }
      })
      .catch(err => {
        console.log(err);
      });

  };

  const emailHandler = e => {
    setEmail(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  return (
    <Card>
      <div>
        <img className="avatar" src={logo} alt="" />
      </div>
      <Title textTitle="Login" />
      <form onSubmit={loginHandler}>
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
          <Button type="submit" text="Login" />
        </div>
        <p className="link">don't have account?<Link to="/register" style={{color:"#1979a9"}}>Register</Link></p>
      </form>
    </Card>
  );
}

export default Login;
