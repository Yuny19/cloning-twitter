import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import MainRouter from "./routers/MainRouter";
import { getProfil } from "./service/twitter.service";
import { sign_in } from "./stores/actions/loginAction";

function App() {
  const dispatch = useDispatch();
  let dataLogin = {
    name: null,
    username: null,
    avatar: null,
    isLogged: false,
    id: null,
  };
  const id = window.localStorage.getItem("id");
  getProfil(id)
    .then(({ data }) => {
      if (data) {
        dataLogin.name = data?.name;
        dataLogin.username = data?.username;
        dataLogin.avatar = data?.avatar;
        dataLogin.id = id;
        dataLogin.isLogged = true;
        dispatch(sign_in(dataLogin));
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
