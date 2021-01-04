import axios from "axios";

const urlDB ="https://cloning-twitter-default-rtdb.firebaseio.com/";
export const getPost = () => {
  return axios.get(`${urlDB}/posts.json`)
};

export const posting = (userId, name, username, avatar,  content, image) => {
  return axios.post(`${urlDB}/posts.json`,{
    userId,
    name,
    username,
    avatar,
    content,
    image
  })
};

export const postComment = () => {};

export const getComment = () => {};

export const addLike = () => {};

export const getLike = () => {};

export const retweet = () => {};

export const signUp = (email, password) => {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    {
      email,
      password
    }
  );
};
export const register = (id, email, password) => {
  return axios.put(
    `${urlDB}/users/${id}.json`,
    {
      email,
      password
    }
  );
};

export const signIn = (email, password) => {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    {
      email,
      password
    }
  );
};

export const getProfil = id => {
  return axios.get(
    `${urlDB}/users/${id}.json`
  );
};

export const editProfil = (id, name, avatar, username) => {
  return axios.patch(
    `${urlDB}/users/${id}.json`,
    {
      name,
      username,
      avatar
    }
  );
};
