import React from 'react';
import { Link } from '@reach/router';

function NavBar(props) {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <br />
      <Link className="link" to="/articles/all" onClick={props.reloadArticles}>
        Articles
      </Link>
      <br />
      <Link className="link" to="/topics">
        Topics
      </Link>
    </nav>
  );
}

export default NavBar;
