import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./landingPage.css";
import logo from "../../assets/images/twitter-icon.png";
import Button from "../../components/Button/Button";

function LandingPage() {
  return (
    <div className="container">
      <ul>
        <li className="picture">
          <div className="content">
            <div>
              <FontAwesomeIcon icon={faSearch} />
              &nbsp; Follow your interests.
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; Hear what people are talking about.
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              &nbsp; Join the conversation.
            </div>
          </div>
        </li>
        <li>
          <div className="form-landing">
            <img alt="" src={logo} />
            <div>See what’s happening in the world right now</div>
            <p>Join Twitter today.</p>
            <Link to="/register">
              <Button text="Sign up" />
            </Link>
            <Link to="/login">
              <Button text="Login" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LandingPage;
