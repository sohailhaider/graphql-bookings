import React from "react";
// import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
//import { Test } from './BookingsListingPage.styles';
import BookingInfoCard from "../../../components/BookingInfoCard";
import { DatePicker } from "antd";
import Page from "../../../components/Page";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOOKINGS } from "../../../graphql/queries/bookings";
import {
  CONFIRM_BOOKING,
  DELETE_BOOKING,
} from "../../../graphql/mutations/bookings";
import _ from "lodash";

const BookingsListingPage = (props) => {
  const [filters, setFilters] = React.useState(null);
  const { loading, data, refetch } = useQuery(
    FETCH_BOOKINGS,
    {
      variables: {
        bookingsFilter: filters,
      },
      fetchPolicy: "network-only"
    },
    // { fetchPolicy: "no-cache" }
  );
  const [confirmBooking] = useMutation(CONFIRM_BOOKING);
  const [deleteBooking] = useMutation(DELETE_BOOKING);
  const handleChangeDateFilters = (values) => {
    const filterValues = values;
    const startDate = filterValues[0].toISOString();
    const endDate = filterValues[1].toISOString();
    setFilters({
      startDate,
      endDate,
    });
  };

  const handleChangeBookingConfirmation = async (status, id) => {
    await confirmBooking({
      variables: {
        confirmBookingBookingId: id,
        confirmBookingStatus: status,
      },
    });
    await refetch();
  };

  const handleDeleteBooking = async (id) => {
    if (window.confirm("Are you sure to delete this booking?")) {
      // console.log(id);
      await deleteBooking({
        variables: {
          deleteBookingBookingId: id,
        },
      });
      await refetch();
    }
  };
  return (
    <Page className="BookingsListingPageWrapper">
      <Row>
        <Col md={3} className="mt-3">
          <DatePicker.RangePicker onChange={handleChangeDateFilters} />
        </Col>
        <Col md={9}>
          <Row>
            {loading && "Fetching Bookings"}
            {!loading &&
              data &&
              data.bookings.map((bookingInfo) => (
                <BookingInfoCard
                  {...bookingInfo}
                  handleChangeBookingConfirmation={
                    handleChangeBookingConfirmation
                  }
                  handleDeleteBooking={handleDeleteBooking}
                />
              ))}
            {!loading &&  data && _.isEmpty(data.bookings) && <h2 className="text-center mt-5 text-warning">No Bookings found!</h2>}
          </Row>
        </Col>
      </Row>
    </Page>
  );
};

BookingsListingPage.propTypes = {
  // bla: PropTypes.string,
};

BookingsListingPage.defaultProps = {
  // bla: 'test',
};

export default BookingsListingPage;
