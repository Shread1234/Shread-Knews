import React from 'react';

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
      <button form="userLogin" className="button" id="signUp">
        Sign Up
      </button>
    </div>
  );
}
