import React, { Component } from "react";
import { connect } from "react-redux";
import NotFound from "components/common/NotFound";
import { withRouter } from "react-router-dom";

export class NotFoundContainer extends Component {
  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const { handleGoBack } = this;
    return <NotFound onGoBack={handleGoBack} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotFoundContainer)
);
