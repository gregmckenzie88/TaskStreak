import React, { Component } from 'react';
import { connect} from 'react-redux';
import HeaderAuth from "./headers/HeaderAuth";
import HeaderNoAuth from "./headers/HeaderNoAuth";
class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return <HeaderNoAuth />
      default:
        return <HeaderAuth />
    }
  }
  render(){
    console.log(this.props);
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);
