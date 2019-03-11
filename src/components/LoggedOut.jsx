import React from 'react';
import { Link } from '@reach/router';

export default function LoggedOut(props) {
  return (
    <div>
      <form
        id="userLogin"
        onChange={props.handleUserChange}
        onSubmit={props.handleSubmit}
      >
        <input
          defaultValue={props.typedUser}
          type="text"
          required
          id="loginBox"
        />
      </form>
      <br />
      <button type="submit" form="userLogin" className="button">
        Login
      </button>{' '}
      <Link to="/signUp">
        <button className="button" id="signUp">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
