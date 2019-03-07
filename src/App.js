import React, { Component } from 'react';
import { Router } from '@reach/router';
import Articles from './components/Articles';
import Home from './components/Home';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home
            path="/"
            handleUserChange={this.handleUserChange}
            handleSubmit={this.handleSubmit}
          />
          <Articles
            path="/articles"
            handleUserChange={this.handleUserChange}
            handleSubmit={this.handleSubmit}
          />
          <Topics
            path="/topics"
            handleUserChange={this.handleUserChange}
            handleSubmit={this.handleSubmit}
          />
          <Articles
            path="/articles/topic/:topicSlug"
            handleUserChange={this.handleUserChange}
            handleSubmit={this.handleSubmit}
          />
          <SingleArticle
            path="/articles/:article_id"
            handleUserChange={this.handleUserChange}
            handleSubmit={this.handleSubmit}
          />
        </Router>
      </div>
    );
  }
}

export default App;
