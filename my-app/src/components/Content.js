// Content.js

import React, { Component } from "react";
import PostItem from "./PostItem";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      name: "",
    };
  }

  componentDidMount() {
    // Set the initial state of posts to the savedPosts data
    this.setState({ posts: this.props.savedPosts });
  }

  handleSearch = (event) => {
    // Capture the user's input value and save it as name
    this.setState({ name: event.target.value.toLowerCase() });

    // Filter the savedPosts based on the name value
    const filteredPosts = this.props.savedPosts.filter((post) =>
      post.name.toLowerCase().includes(this.state.name)
    );

    // Update the state with the filtered posts
    this.setState({ posts: filteredPosts });
  };

  render() {
    return (
      <div className="css-TitleBar">
        <form>
          <label htmlFor="searchInput">Search by Artist Name:</label>
          <input
            type="text"
            id="searchInput"
            value={this.state.name}
            onChange={this.handleSearch}
          />
          <p>
            Showing {this.state.posts.length} of {this.props.savedPosts.length}{" "}
            posts
          </p>
        </form>
        <div className="css-PostContainer">
          {this.state.posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
