import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import LoginScreen from './presenter';

class Container extends Component {
  state = {
    username: '',
    password: '',
    isSubmitting: false
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    fbLogin: PropTypes.func.isRequired
  };

  render() {
    return (
      <LoginScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        fbLogin={this._handleFBLogin}
      />
    );
  }

  _changeUsername = text => {
    this.setState({
      username: text
    });
  };

  _changePassword = text => {
    this.setState({
      password: text
    });
  };

  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;

    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true
        });
        // Redux action
        const result = await login(username, password);
        if (!result) {
          Alert.alert('Something went wrong, try again');
          this.setState({ isSubmitting: false });
        }
      } else {
        Alert.alert('All fields are required');
      }
    }
  };

  _handleFBLogin = async () => {
    const { fbLogin } = this.props;
    this.setState({ isSubmitting: true });
    const result = await fbLogin();
    if (!result) {
      this.setState({ isSubmitting: false });
    }
  };
}

export default Container;
