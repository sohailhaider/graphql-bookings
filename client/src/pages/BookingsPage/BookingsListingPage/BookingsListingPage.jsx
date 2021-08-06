import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
//import { Test } from './BookingsListingPage.styles';
import BookingInfoCard from "../../../components/BookingInfoCard";
import { DatePicker } from 'antd';

const BOOKINGS = [
  {
    _id: 1,
    name: "Booking Name",
    noOfPeople: 2,
    contactNumber: "+3422343",
    date: "2021-08-06T19:24:35.446Z",
    comment: "Some Comments",
  },
];

const BookingsListingPage = (props) => (
  <Container className="BookingsListingPageWrapper">
    <Row>
      <Col md={3} className="mt-3">
        <DatePicker.RangePicker />
      </Col>
      <Col md={9}>
        <Row>
          {BOOKINGS.map((bookingInfo) => (
            <BookingInfoCard {...bookingInfo} />
          ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

BookingsListingPage.propTypes = {
  // bla: PropTypes.string,
};

BookingsListingPage.defaultProps = {
  // bla: 'test',
};

export default BookingsListingPage;
