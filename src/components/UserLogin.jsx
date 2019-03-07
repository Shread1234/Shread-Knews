import React from 'react';
import { Link } from '@reach/router';
import { userCheck } from '../Utils/Axios';

class UserLogin extends React.Component {
  state = {
    typedUser: '',
    loggedInUser: localStorage.getItem('loggedInUser'),
    userError: false
  };

  componentDidMount = () => {
    this.setState({ loggedInUser: localStorage.getItem('loggedInUser') });
  };

  handleUserChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ typedUser: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state.typedUser;
    userCheck(user).then(({ data }) =>
      data.user === undefined
        ? this.setState({ typedUser: '', userError: true })
        : this.setState(
            {
              loggedInUser: data.user.username,
              typedUser: '',
              userError: false
            },
            () => this.saveUser()
          )
    );
    document.getElementById('userLogin').reset();
  };

  handleSignOut = () => {
    this.setState({ loggedInUser: '' }, () =>
      localStorage.setItem('loggedInUser', '')
    );
    this.props.removeUser();
  };

  saveUser = () => {
    localStorage.setItem('loggedInUser', this.state.loggedInUser);
    this.props.setUser();
  };

  render() {
    const { userError, loggedInUser } = this.state;
    return (
      <div id="homeUserLogin">
        {userError === true && loggedInUser === '' ? (
          <p className="initialLogin">Invalid Username</p>
        ) : (
          loggedInUser === '' && <p className="initialLogin">Login Here</p>
        )}
        {loggedInUser !== '' && (
          <div>
            <p id="loggedInAs">Logged In As</p>
            <Link to={`/users/${loggedInUser}`} id="loggedInUserLink">
              {loggedInUser}
            </Link>
          </div>
        )}
        {loggedInUser === '' && (
          <form
            id="userLogin"
            onChange={this.handleUserChange}
            onSubmit={this.handleSubmit}
          >
            <input defaultValue="" type="text" required id="loginBox" />
          </form>
        )}
        <br />
        {loggedInUser === '' && (
          <button type="submit" form="userLogin" id="loginButton">
            Login
          </button>
        )}{' '}
        &nbsp;
        {loggedInUser === '' ? (
          <button type="submit" form="userLogin" id="signUpButton">
            Sign Up
          </button>
        ) : (
          <button id="signOutButton" onClick={this.handleSignOut}>
            Log Out
          </button>
        )}
      </div>
    );
  }
}

export default UserLogin;
