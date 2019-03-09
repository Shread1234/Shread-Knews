import React from 'react';
import { Link } from '@reach/router';
import { userCheck } from '../Utils/api';

class UserLogin extends React.Component {
  state = {
    typedUser: '',
    loggedInUser: this.props.currentUser,
    userError: false
  };

  handleUserChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ typedUser: value });
  };

  componentDidMount() {
    if (localStorage.getItem('loggedInUser') !== '')
      this.setState({ loggedInUser: localStorage.getItem('loggedInUser') });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state.typedUser;
    userCheck(user).then(({ data }) =>
      data.user === undefined
        ? this.setState({ typedUser: '', userError: true })
        : this.setState(
            {
              loggedInUser: user,
              typedUser: '',
              userError: false
            },
            () => this.saveUser()
          )
    );
  };

  handleSignOut = () => {
    this.setState({ loggedInUser: null }, () =>
      localStorage.setItem('loggedInUser', '')
    );
    this.props.removeUser();
  };

  saveUser = () => {
    localStorage.setItem('loggedInUser', this.state.loggedInUser);
    this.props.setUser();
  };

  render() {
    const { userError, loggedInUser, typedUser } = this.state;
    return (
      <div id="homeUserLogin">
        {userError === true && loggedInUser === null ? (
          <p className="initialLogin">Username Not Found</p>
        ) : (
          loggedInUser === null && <p className="initialLogin">Login Here</p>
        )}
        {loggedInUser !== null && (
          <div>
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
            <button className="button" onClick={this.handleSignOut}>
              Log Out
            </button>
          </div>
        )}
        {loggedInUser === null && (
          <div>
            <form
              id="userLogin"
              onChange={this.handleUserChange}
              onSubmit={this.handleSubmit}
            >
              <input
                defaultValue={typedUser}
                type="text"
                required
                id="loginBox"
              />
            </form>
            <br />
            <button type="submit" form="userLogin" className="button">
              Login
            </button>
          </div>
        )}{' '}
        &nbsp;
        {loggedInUser === null && (
          <button type="submit" form="userLogin" className="button">
            Sign Up
          </button>
        )}
      </div>
    );
  }
}

export default UserLogin;
