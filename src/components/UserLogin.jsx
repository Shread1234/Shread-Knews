import React from 'react';
import { Link } from '@reach/router';

function UserLogin(props) {
  return (
    <div id="homeUserLogin">
      <p>Login Here</p>
      <form id="userLogin" onChange={props.userChange}>
        <input defaultValue="" type="text" />
      </form>
      <br />
      <button type="reset" form="userLogin" onClick={props.userCheck}>
        Login
      </button>
    </div>
  );
}

export default UserLogin;
