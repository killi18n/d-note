import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "components/structure/Header";
import * as authActions from "store/modules/auth";

export class HeaderContainer extends Component {
  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { handleLogout } = this;
    return <Header onLogout={handleLogout} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(authActions.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
