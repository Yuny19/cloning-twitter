import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../views/Login/Login";
import Registration from "../views/Registration/Registration";
import LandingPage from "../views/Landing-page/LandingPage";
import HomePage from "../views/Home-page/HomePage";
import EditProfil from '../views/EditProfil/EditProfil';
import Profil from "../views/Profil/Profil";
import Sidebar from '../components/Sidebar/Sidebar';


const PrivateRoute = props => {
  const isLogged = useSelector((state)=>state.isLogged);

  if(!isLogged){
    return <Redirect to="/login"/>
  }
  return <Route {...props}/>

};

const PublicRoute = props => {
  const isLogged = useSelector((state)=>state.isLogged);

  if(isLogged){
    return <Redirect to="/home"/>
  }
  return <Route {...props}/>

};

function MainRouter() {
  const isLogged = useSelector((state)=>state.isLogged);

  return (
    <div style={{display:"flex"}}>
      {isLogged && <Sidebar/>}
      <Switch>
        <PublicRoute path="/" exact component={LandingPage} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Registration} />
        <PrivateRoute path="/home" exact component={HomePage} />
        <PrivateRoute path="/editProfil" exact component={EditProfil} />
        <PrivateRoute path="/profil" exact component={Profil} />
      </Switch>
    </div>
  );

  
}

export default MainRouter;
