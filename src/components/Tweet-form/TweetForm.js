import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./tweetForm.css";
import Button from "../Button/Button";
import { posting } from "../../service/twitter.service";
import { storage } from "../../config/firebase";

function TweetForm() {
  const [file, setFile] = useState(null);
  const [contentPost, setContentPost] = useState("");

  const dataUser = useSelector(state => state);
  const history = useHistory();

  const handleFile = e => {
    if(e.target.files[0]){
      setFile(e.target.files[0]);
    }
  };

  const contentHandler = e =>{
    setContentPost(e.target.value);
  }

  const postTweetHandler = e =>{
    e.preventDefault();

    const uploadImage = storage.ref(`images/posts/${file.name}`).put(file);

    uploadImage.on("state_changed",
    snapshoot=>{},
    err=>{
      console.log(err);
    },
    ()=>{
      storage
      .ref("images/posts")
      .child(file.name)
      .getDownloadURL()
      .then(url=>{
        return posting(dataUser.id, dataUser.name, dataUser.username, dataUser.avatar, contentPost, url);
      })
      .then(()=>{
        history.push("/");
      })
      .catch((err)=>{
        console.log(err);
      })
    })

  }

  return (
    <div className="tweet-form">
      <form onSubmit={postTweetHandler}>
        <div className="tweet-input">
          <img src={dataUser.avatar} alt="avatar"/>
          <textarea rows="4" placeholder="what's happening?" onChange={contentHandler}></textarea>
        </div>
        <label>
          <FontAwesomeIcon icon={faImages} />
          <input type="file" onChange={handleFile} />
          {file && <label className="file-name">&nbsp;{file.name}</label>}
        </label>
        <Button type="submit" classname="btn-tweet" text="Tweet"/>
      </form>
    </div>
  );
}

export default TweetForm;
