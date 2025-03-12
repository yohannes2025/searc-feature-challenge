import React, { Component } from "react";
import PostItem from "./PostItem";
import savedPosts from "../posts.json";
import styles from "./Content.module.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Stores filtered posts
      searchTerm: "", // Stores search input
    };
  }

  componentDidMount() {
    // Set posts state when the component mounts
    this.setState({ posts: savedPosts });
  }

  handleSearch = (event) => {
    const name = event.target.value.toLowerCase(); // Convert input to lowercase
    this.setState({ searchTerm: name });

    const filteredPosts = savedPosts.filter(
      (post) => post.name.toLowerCase().includes(name) // Check if name matches search term
    );

    this.setState({ posts: filteredPosts });
  };

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.titleBar}>
          <h1>My Posts</h1>
          <form>
            <label htmlFor="searchInput">Search by Artist:</label>
            <input
              type="text"
              id="searchInput"
              value={this.state.searchTerm}
              onChange={this.handleSearch}
              placeholder="Type artist name..."
            />
            <p>Posts found: {this.state.posts.length}</p>
          </form>
        </div>

        <div className={styles.searchResults}>
          <PostItem posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Content;
