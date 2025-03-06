import React, { Component } from "react";
import savedPosts from "./savedPosts";

class Content extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // Set the initial state of posts to the savedPosts data
    this.setState({ posts: savedPosts });
  }

  handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) =>
      post.name.toLowerCase().includes(searchTerm)
    );
    this.setState({ posts: filteredPosts });
  };

  render() {
    return (
      <div className="css.TitleBar">
        <form>
          <label htmlFor="searchInput">Search by Artist Name:</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Search..."
            onChange={this.handleSearch}
          />
          <span>({this.state.posts.length} results)</span>
        </form>
        {this.state.posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const PostItem = ({ post }) => (
  <div>
    <h3>{post.name}</h3>
    <p>{post.description}</p>
  </div>
);

export default Content;
