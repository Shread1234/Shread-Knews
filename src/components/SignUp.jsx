import React from 'react';
import { getUsers, addUser } from '../Utils/api';

export default class SignUp extends React.Component {
  state = {
    existingUsers: null,
    newUserName: null,
    newUserAvatar: null,
    newName: null,
    signedUp: false,
    userError: false
  };

  componentDidMount() {
    getUsers().then(({ data }) =>
      this.setState({
        existingUsers: data.users.map((user) => user.username)
      })
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const users = this.state.existingUsers;

    if (users.includes(this.state.newUserName))
      return this.setState({ userError: true });

    const { newUserName, newName } = this.state;
    let { newUserAvatar } = this.state;

    if (!newUserAvatar) newUserAvatar = '';
    addUser(newUserName, newUserAvatar, newName);
    this.setState({ signedUp: true });
  };

  render() {
    const { currentUser } = this.props;
    const { signedUp, userError } = this.state;
    return (
      <div>
        <br />
        {currentUser && <h1 id="alreadySigned">Already Signed In</h1>}
        {this.state.signedUp && !currentUser && (
          <h1 id="finishSignUp">Sign in above</h1>
        )}

        {!currentUser && !signedUp && (
          <>
            <h1 id="signUpTitle">Sign Up</h1>
            <form
              id="signUpForm"
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            >
              {userError && (
                <p id="newUserNameError" className="signUpWording">
                  Username Already Exists!
                </p>
              )}
              <p className="signUpWording">Username*</p>

              <input id="newUserName" className="signUpInput" required />
              <p className="signUpWording">Real Name*</p>

              <input id="newName" className="signUpInput" required />
              <br />
              <br />
              <button
                className="button"
                type="submit"
                form="signUpForm"
                id="signUpFormButton"
              >
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}
