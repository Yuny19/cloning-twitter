import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/Button/Button";
import "./profil.css";
import Posts from "../../components/Posts/Posts";
import { getPost } from "../../service/twitter.service";

function Profil() {
  const dataUser = useSelector((state) => state);
  const [posts, setPost] = useState();

  useEffect(() => {
    getPost()
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="profil">
      <div className="info-header">
        <img className="img-header" src={dataUser.avatar} alt="" />
        <img className="img-profil" src={dataUser.avatar} alt="" />
        <Link to="/editProfil"><Button text="edit profil" classname="btn-edit" /></Link>
      </div>
      <div className="info-profil">
        <h2>{dataUser.name}</h2>
        <p className="username">{dataUser.username}</p>
        <p>
          <FontAwesomeIcon icon={faMapMarked} />
          Indonesia
        </p>
        <p>90 Following &nbsp; 100 Followers</p>
      </div>
      {posts && <div className="info-post">
        {Object.values(posts).map((post) => (
          <Posts
            key={post.content}
            name={post.name}
            username={post.username}
            verified={true}
            text={post.content}
            avatar={post.avatar}
            imagePost={post.image}
          />
        ))}
      </div>}
    </div>
  );
}

export default Profil;
