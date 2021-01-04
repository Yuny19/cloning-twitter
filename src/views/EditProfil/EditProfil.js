import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./editProfil.css";
import { storage } from "../../config/firebase";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { editProfil, getProfil } from "../../service/twitter.service";
import { sign_in } from "../../stores/actions/loginAction";

function EditProfil() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    getProfil(id)
      .then(({ data }) => {
        setEmail(data.email);
        setUsername(data.username);
        setName(data.name);
        setPassword(data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const saveEditProfil = (e) => {
    e.preventDefault();

    const id = window.localStorage.getItem("id");
    const dataLogin = {
      name: null,
      username: null,
      avatar: null,
      isLogged: true,
      id: null,
    };

    if (file) {
      const uploadImage = storage.ref(`images/avatar/${file.name}`).put(file);

      uploadImage.on(
        "state_changed",
        (snapshoot) => {},
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("images/avatar")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              return editProfil(id, name, url, username);
            })
            .then(() => {
              return getProfil(id);
            })
            .then(({ data }) => {
              dataLogin.name = data.name;
              dataLogin.username = data.username;
              dataLogin.avatar = data.avatar;
              dataLogin.id = id;
              dataLogin.isLogged = true;
              dispatch(sign_in(dataLogin));
              history.push("/home");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    } else {
      let url = null;
      editProfil(id, name, url, username)
        .then(() => {
          return getProfil(id);
        })
        .then(({ data }) => {
          dataLogin.name = data.name;
          dataLogin.username = data.username;
          dataLogin.avatar = data.avatar;
          dataLogin.id = id;
          dataLogin.isLogged = true;
          dispatch(sign_in(dataLogin));
          history.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="form-edit-profil">
      <form onSubmit={saveEditProfil}>
        <h2>Edit Profil</h2>
        <p>complete your data to support the completeness of the data</p>

        <Input
          type="text"
          label="Name"
          value={name}
          onChangeHandler={nameHandler}
        />

        <Input
          type="text"
          label="Username with @"
          value={username}
          onChangeHandler={usernameHandler}
        />

        <Input type="text" label="Email" readOnly={true} value={email} />
        <Input
          type="password"
          label="Password"
          readOnly={true}
          value={password}
        />
        <div className="form-file">
          <label>
            <FontAwesomeIcon icon={faImages} />
            <input type="file" onChange={fileHandler} />
            {file ? (
              <label className="file-name">&nbsp;{file.name}</label>
            ) : (
              <label className="file-name">&nbsp; choose photo</label>
            )}
          </label>
        </div>
        <div className="btn-edit-group">
          <Button text="Save" type="submit" />
          <Link to="/profil">
            <Button text="Cancel" type="submit" classname="btn-cancel" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditProfil;
