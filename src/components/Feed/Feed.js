import React, { useState, useEffect } from "react";

import "./feed.css";
import TweetForm from "../Tweet-form/TweetForm";
import Posts from "../Posts/Posts";
import { getPost } from "../../service/twitter.service";

function Feed() {
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

  if (posts) {
    return (
      <div className="feed">
        <div className="feed-header">
          <h2>Home</h2>
        </div>

        <TweetForm />
        <div>
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
        </div>
      </div>
    );
  } else {
    return <TweetForm />;
  }
}

export default Feed;
