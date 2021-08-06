import React from "react";
import PropTypes from "prop-types";
//import { Test } from './PageHeader.styles';
import { Nav } from "react-bootstrap";
import history from "../../utilities/history";

const PageHeader = (props) => (
  <Nav
    className="justify-content-center"
    activeKey="/home"
    onSelect={(selectedKey) => history.push(selectedKey)}
  >
    <Nav.Item>
      <Nav.Link eventKey="/">BarName</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/menu">Menu</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/bookings">Bookings</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/login">Login</Nav.Link>
    </Nav.Item>
  </Nav>
);

PageHeader.propTypes = {
  // bla: PropTypes.string,
};

PageHeader.defaultProps = {
  // bla: 'test',
};

export default PageHeader;
