import React from "react";
import PropTypes from "prop-types";
//import { Test } from './MenusPage.styles';
import image1 from "../../assets/png/thumb-2.png";
import MenuCard from "../../components/MenuCard/MenuCard";
import { Row } from "react-bootstrap";
import Page from "../../components/Page";

const MENUS = [
  {
    name: "Menu 1",
    picture: image1,
    description: "Menu 1 description",
  },
  {
    name: "Menu 2",
    picture: image1,
    description: "Menu 2 description",
  },
  {
    name: "Menu 3",
    picture: image1,
    description: "Menu 3 description",
  },
  {
    name: "Menu 4",
    picture: image1,
    description: "Menu 4 description",
  },
  {
    name: "Menu 1",
    picture: image1,
    description: "Menu 1 description",
  },
  {
    name: "Menu 2",
    picture: image1,
    description: "Menu 2 description",
  },
  {
    name: "Menu 3",
    picture: image1,
    description: "Menu 3 description",
  },
  {
    name: "Menu 4",
    picture: image1,
    description: "Menu 4 description",
  },
];

const MenusPage = (props) => (
  <Page className="MenusPageWrapper">
    <Row>
      {MENUS.map((menu) => {
        return <MenuCard {...menu} />;
      })}
    </Row>
  </Page>
);

MenusPage.propTypes = {
  // bla: PropTypes.string,
};

MenusPage.defaultProps = {
  // bla: 'test',
};

export default MenusPage;
