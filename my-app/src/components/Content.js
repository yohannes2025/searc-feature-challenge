import React, { Component } from "react";

import styles from "./Content.module.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false, // Loader state
      posts: [], // Stores filtered posts
      searchTerm: "", // Stores the search input
    };
  }

  componentDidMount() {
    // Simulating API fetch delay
    setTimeout(() => {
      this.setState({ isLoaded: true, posts: savedPosts });
    }, 2000);
  }

  handleSearch = (event) => {
    const name = event.target.value.toLowerCase(); // Convert input to lowercase
    this.setState({ searchTerm: name });

    const filteredPosts = savedPosts.filter((post) =>
      post.name.toLowerCase().includes(name)
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
          {this.state.isLoaded ? (
            <PostItem posts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
