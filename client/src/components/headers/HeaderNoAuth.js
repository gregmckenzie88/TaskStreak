import React, { Component } from 'react';
class HeaderNoAuth extends Component {
  render(){
    return (
      <div>
        HeaderNoAuth
        <a href="/auth/google">Login with google</a>
      </div>
    );
  }
}

export default HeaderNoAuth;
