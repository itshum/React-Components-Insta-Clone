import React from "react";

import Post from "./Post";
import "./Posts.css";

const PostsPage = props => {
  console.log("the props", props);
  return (
    <div className="posts-container-wrapper">
      {props.parentData.map(p => (
        <Post
          key={p.imageUrl}
          dataFromParent={p}
        />
      ))}
    </div>
  );
};

export default PostsPage;

