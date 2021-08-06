import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './NewBookingPage.styles';
import Page from "../../../components/Page";
import { Row } from "react-bootstrap";
import NewBookingForm from "./NewBookingForm";

const NewBookingPage = (props) => (
  <Page className="NewBookingPageWrapper">
    <Row>
      <h1 className="text-center">New Booking</h1>
    </Row>
    <Row>
      <NewBookingForm />
    </Row>
  </Page>
);

NewBookingPage.propTypes = {
  // bla: PropTypes.string,
};

NewBookingPage.defaultProps = {
  // bla: 'test',
};

export default NewBookingPage;
