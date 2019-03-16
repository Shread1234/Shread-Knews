import React from 'react';
import { userCheck } from '../Utils/api';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

class UserLogin extends React.Component {
  state = {
    typedUser: '',
    loggedInUser: this.props.currentUser,
    userError: false,
    loading: false
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
    this.setState({ loading: true });
    userCheck(user).then(({ data }) =>
      data.user === undefined
        ? this.setState({ typedUser: '', userError: true, loading: false }) ||
          setTimeout(() => this.setState({ userError: false }), 3000)
        : this.setState(
            {
              loggedInUser: user,
              typedUser: '',
              userError: false,
              loading: false
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
    const { userError, loggedInUser, typedUser, loading } = this.state;
    return (
      <div id="homeUserLogin">
        {userError && !loggedInUser && (
          <p className="initialLogin">Username Not Found</p>
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
            loading={loading}
            userError={userError}
          />
        )}
      </div>
    );
  }
}

export default UserLogin;
