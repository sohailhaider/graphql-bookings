import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './NewBookingPage.styles';
import Page from "../../../components/Page";
import { Row } from "react-bootstrap";
import NewBookingForm from "./NewBookingForm";
import { useMutation } from "@apollo/client";
import { CREATE_BOOKING } from "../../../graphql/mutations/bookings";
import _ from "lodash";

const NewBookingPage = (props) => {
  const [createBooking] = useMutation(CREATE_BOOKING);
  //could be moved to helpers
  const parseDataForApi = (data) => {
    const _data = _.cloneDeep(data);
    _data.noOfPeople = parseInt(_data.noOfPeople);
    return _data;
  };
  const handleCreateBooking = async (formData) => {
    try {
      await createBooking({
        variables: {
          createBookingBookingData: parseDataForApi(formData),
        },
      });
      alert("Your booking created successfully");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <Page className="NewBookingPageWrapper">
      <Row>
        <h1 className="text-center">New Booking</h1>
      </Row>
      <Row>
        <NewBookingForm handleCreateBooking={handleCreateBooking} />
      </Row>
    </Page>
  );
};

NewBookingPage.propTypes = {
  // bla: PropTypes.string,
};

NewBookingPage.defaultProps = {
  // bla: 'test',
};

export default NewBookingPage;
