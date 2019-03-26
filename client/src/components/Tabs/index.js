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

function Tabs({ restaurant, selected, toggleTab, tabs }) {
  return (
    <>
      <StyledTabs />
      <div className="tabs-wrapper">
        <Nav tabs>
          <Container>
            {tabs.map(tab => {
              return (
                <NavItem key={tab}>
                  <NavLink
                    className={classnames({ active: selected === tab })}
                    onClick={() => {
                      toggleTab(tab);
                    }}
                  >
                    <span title={tab}>{tab}</span>
                  </NavLink>
                </NavItem>
              );
            })}
          </Container>
        </Nav>
        <TabContent activeTab={`${selected}`} id="tab-content">
          {tabs.map(tab => {
            return (
              <TabPane tabId={tab} className={`${tab}-pane`} key={tab}>
                <Container>
                  <Row>
                    <Col sm="12">
                      {tab === 'informations' ? (
                        <Informations restaurant={restaurant} />
                      ) : (
                        <Reviews restaurant={restaurant} />
                      )}
                    </Col>
                  </Row>
                </Container>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    </>
  );
}

Tabs.defaultProps = {
  restaurant: {},
  selected: 'informations',
  toggleTab: () => {},
  tabs: [],
};

Tabs.propTypes = {
  restaurant: PropTypes.object,
  selected: PropTypes.string,
  toggleTab: PropTypes.func,
  tabs: PropTypes.array,
};

export default Tabs;
