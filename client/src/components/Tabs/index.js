/**
 *
 * Tabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';

import StyledTabs from './StyledTabs';
import Informations from '../Informations';
import Reviews from '../Reviews';

/* istanbul ignore next */
function Tabs({ restaurant, selected, toggleTab }) {
  return (
    <>
      <StyledTabs />
      <div className="tabs-wrapper">
        <Nav tabs>
          <Container>
            <NavItem>
              <NavLink
                className={classnames({ active: selected === 1 })}
                onClick={() => {
                  toggleTab(1);
                }}
              >
                <span title="Informations">Informations</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: selected === 2 })}
                onClick={() => {
                  toggleTab(2);
                }}
              >
                <span title="Reviews">Reviews</span>
              </NavLink>
            </NavItem>
          </Container>
        </Nav>
        <TabContent activeTab={`${selected}`} id="tab-content">
          <TabPane tabId="1" className="informations-pane">
            <Container>
              <Row>
                <Col sm="12">
                  <Informations restaurant={restaurant} />
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2" className="reviews-pane">
            <Container>
              <Row>
                <Col sm="12">
                  <Reviews restaurant={restaurant} />
                </Col>
              </Row>
            </Container>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
}

Tabs.defaultProps = {
  restaurant: {},
  selected: 1,
  toggleTab: () => {},
};

Tabs.propTypes = {
  // history: PropTypes.object.isRequired,
  restaurant: PropTypes.object,
  selected: PropTypes.number,
  toggleTab: PropTypes.func,
};

export default Tabs;
