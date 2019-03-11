import React from 'react';
import { userCheck } from '../Utils/api';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

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
        ? this.setState({ typedUser: '', userError: true }) ||
          setTimeout(() => this.setState({ userError: false }), 3000)
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
        {userError && !loggedInUser ? (
          <p className="initialLogin">Username Not Found</p>
        ) : (
          !loggedInUser && <p className="initialLogin">Login Here</p>
        )}
        {loggedInUser && (
          <LoggedIn
            loggedInUser={loggedInUser}
            handleSignOut={this.handleSignOut}
          />
        )}
        {!loggedInUser && (
          <LoggedOut
            handleUserChange={this.handleUserChange}
            handleSubmit={this.handleSubmit}
            typedUser={typedUser}
          />
        )}
      </div>
    );
  }
}

export default UserLogin;
