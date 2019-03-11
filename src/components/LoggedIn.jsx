import React from 'react';
import { Link } from '@reach/router';

export default function LoggedIn(props) {
  return (
    <div>
      <p id="loggedInAs">Logged In As</p>
      <Link
        className="link"
        to={`/users/${props.loggedInUser}`}
        id="loggedInUserLink"
      >
        {props.loggedInUser}
      </Link>
      <br />
      <br />
      <button id="logOut" className="button" onClick={props.handleSignOut}>
        Log Out
      </button>
    </div>
  );
}
