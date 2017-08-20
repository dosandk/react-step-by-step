import React from 'react';
import Authorization from '../components/authorization';

export default Component => class CheckAuthorization extends React.Component {
  constructor(...args) {
    super(...args);

    this.getUserName = this.getUserName.bind(this);
    this.logout = this.logout.bind(this);
  }

  get user () {
    return localStorage.getItem('user');
  }

  getUserName () {
    return this.user;
  }

  logout (e) {
    e.preventDefault();
    localStorage.removeItem('user');
    location.reload();
  }

  render() {
    return (
      this.user
        ? <Component {...this.props} getUserName={this.getUserName} logout={this.logout} />
        : <Authorization />
    )
  }
}
