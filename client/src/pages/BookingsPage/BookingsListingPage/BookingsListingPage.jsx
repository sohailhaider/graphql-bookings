import React from "react";
// import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
//import { Test } from './BookingsListingPage.styles';
import BookingInfoCard from "../../../components/BookingInfoCard";
import { DatePicker } from "antd";
import Page from "../../../components/Page";
import { useQuery } from "@apollo/client";
import { FETCH_BOOKINGS } from "../../../graphql/queries/bookings";

const BookingsListingPage = (props) => {
  const [filters, setFilters] = React.useState(null);
  const { loading, data } = useQuery(
    FETCH_BOOKINGS,
    {
      variables: {
        bookingsFilter: filters,
      },
    },
    { fetchPolicy: "network-only" }
  );
  const handleChangeDateFilters = (values) => {
    const filterValues = values;
    const startDate = filterValues[0].toISOString();
    const endDate = filterValues[1].toISOString();
    setFilters({
      startDate,
      endDate,
    });
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
                <BookingInfoCard {...bookingInfo} />
              ))}
            {}
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
