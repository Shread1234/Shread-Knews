import React from 'react';
import { Link } from '@reach/router';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link onClick={() => window.location.reload()} to="/articles">
        Articles
      </Link>
      <br />
      <Link to="/topics">Topics</Link>
      <br />
      <Link to="/users">All Users</Link>
    </nav>
  );
}

export default NavBar;
