import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import LoginForm from "./LoginForm/LoginForm";
import Page from "../../components/Page";
//import { Test } from "./LoginPage.styles";

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log("LoginPage mounted");
  };

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("LoginPage getSnapshotBeforeUpdate", prevProps, prevState);
  };

  componentDidUpdate = () => {
    console.log("LoginPage did update");
  };

  componentWillUnmount = () => {
    console.log("LoginPage will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Page className="LoginPageWrapper">
        <LoginForm />
      </Page>
    );
  }
}

LoginPage.propTypes = {
  // bla: PropTypes.string,
};

LoginPage.defaultProps = {
  // bla: 'test',
};

export default LoginPage;
