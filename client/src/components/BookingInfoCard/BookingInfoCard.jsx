import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './BookingInfoCard.styles';
import { Col, Card, Row, Button } from "react-bootstrap";

const BookingInfoCard = (props) => (
  <Col md={6} style={{ marginTop: "10px" }}>
    <Card>
      <Card.Body>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.noOfPeople}</Card.Text>
        <Card.Text>{props.contactNumber}</Card.Text>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.comment}</Card.Text>

        <Card.Footer>
          <Row>
            <Col xs={12} md={8}>
              <input type="checkbox" id={`confirm-booking-${props._id}`} />{" "}
              <label
                style={{ cursor: "pointer" }}
                for={`confirm-booking-${props._id}`}
              >
                Confirm Booking
              </label>
            </Col>
            <Col xs={12} md={4}>
              <Button>Delete Booking</Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>
);

BookingInfoCard.propTypes = {
  // bla: PropTypes.string,
};

BookingInfoCard.defaultProps = {
  // bla: 'test',
};

export default BookingInfoCard;
