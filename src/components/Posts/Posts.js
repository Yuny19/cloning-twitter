import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faRetweet, faShareSquare, faHeart} from '@fortawesome/free-solid-svg-icons';

import './posts.css';

function Posts({name, username, verified, imagePost, avatar, text }) {
    return (
        <div className="post">
            <div>
                <img src={avatar} className="post-avatar" alt="avatar"/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div>
                        <h3>
                            {name}{" "}
                            <span className="post-header-verified">
                                {verified && <FontAwesomeIcon className="post-icon" icon={faCheckCircle}/>} {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-desc">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={imagePost} className="post-img" alt=""/>
                <div className="post-footer">
                    <FontAwesomeIcon icon={faComment}/>
                    <FontAwesomeIcon icon={faRetweet}/>
                    <FontAwesomeIcon icon={faHeart}/>
                    <FontAwesomeIcon icon={faShareSquare}/>
                </div>
            </div>
        </div>
    )
}

export default Posts
