import React from 'react';
import { Link } from '@reach/router';

function NavBar() {
  return (
    <nav id="navBar">
      <Link id="homeNav" className="link" to="/">
        Home
      </Link>
      <br />
      <Link className="link" to="/articles/topic/all">
        Articles
      </Link>
      <br />
      <Link className="link" to="/topics">
        Topics
      </Link>
      <h2 id="navTitleLarge">Shread Knews</h2>
      <h2 id="navTitleSmall">SK</h2>
    </nav>
  );
}

export default NavBar;
