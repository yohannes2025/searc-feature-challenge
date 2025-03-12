import React from "react";

const PostItem = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.name}</p>
          <img src={post.image} alt={post.title} />
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostItem;
