import React from "react";
// import PropTypes from "prop-types";
import Page from "../../components/Page";
//import { Test } from './LandingPage.styles';
import { Image, Row } from "react-bootstrap";
import LandingPageImage from "../../assets/png/landing-image.png";

const LandingPage = (props) => (
  <Page className="LandingPageWrapper">
    <Row>
      <Image src={LandingPageImage} fluid />
    </Row>
    <Row>
      asdf asdf adsf asdf sadf asdf asdf asdf asdf adsf asdf sadf asdf asdf asdf
      asdf adsf asdf sadf asdf asdf asdf asdf adsf asdf sadf asdf asdf asdf asdf
      adsf asdf sadf asdf asdf asdf asdf adsf asdf sadf asdf asdf asdf asdf adsf
      asdf sadf asdf asdf asdf asdf adsf asdf sadf asdf asdf asdf asdf adsf asdf
      sadf asdf asdf asdf asdf adsf asdf sadf asdf asdf asdf asdf adsf asdf sadf
      asdf asdf asdf asdf adsf asdf sadf asdf asdf asdf asdf adsf asdf sadf asdf
      asdf asdf asdf adsf asdf sadf asdf asdf
    </Row>
  </Page>
);

LandingPage.propTypes = {
  // bla: PropTypes.string,
};

LandingPage.defaultProps = {
  // bla: 'test',
};

export default LandingPage;
