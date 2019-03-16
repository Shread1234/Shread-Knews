import React from 'react';
import { Link } from '@reach/router';
import Spinner from 'react-spinkit';

export default function LoggedOut({
  handleUserChange,
  handleSubmit,
  typedUser,
  loading,
  userError
}) {
  return (
    <div>
      <form id="userLogin" onChange={handleUserChange} onSubmit={handleSubmit}>
        {!loading ? (
          <>
            {!userError && <p className="initialLogin">Login Here</p>}
            <input
              defaultValue={typedUser}
              type="text"
              required
              id="loginBox"
            />
            <br />
            <br />
            <button
              type="submit"
              form="userLogin"
              className="button"
              id="loginButton"
            >
              Login
            </button>

            <Link to="/signUp">
              <button className="button" id="signUp">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <Spinner name="ball-clip-rotate" color="white" fadeIn="none" />
        )}
      </form>
    </div>
  );
}
