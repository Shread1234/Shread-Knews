import React from 'react';
import { Link } from '@reach/router';

export default function LoggedIn({ handleSignOut, loggedInUser }) {
  return (
    <div id="loggedInDiv">
      <p id="loggedInAs">Logged In As</p>
      <Link
        className="link"
        to={`/users/${loggedInUser}`}
        id="loggedInUserLink"
      >
        {loggedInUser}
      </Link>
      <br />
      <br />
      <Link className="link" to={`/users/${loggedInUser}/postarticle`}>
        <button id="postArticle" className="button">
          Post Article
        </button>
      </Link>
      <button id="logOut" className="button" onClick={handleSignOut}>
        Log Out
      </button>
    </div>
  );
}
