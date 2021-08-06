import React, { useContext } from "react";
// import PropTypes from "prop-types";
//import { Test } from './BookingsPage.styles';
import { LoginContext } from "../../utilities/contexts/login-context";
import BookingsListingPage from "./BookingsListingPage";
import NewBookingPage from "./NewBookingPage";

const BookingsPage = (props) => {
  const loginContext = useContext(LoginContext);
  return (
    <div className="BookingsPageWrapper">
      {loginContext.userInfo && <BookingsListingPage />}
      {!loginContext.userInfo && <NewBookingPage />}
    </div>
  );
};

BookingsPage.propTypes = {
  // bla: PropTypes.string,
};

BookingsPage.defaultProps = {
  // bla: 'test',
};

export default BookingsPage;
