/**
 *
 * Tabs
 *
 */

import React from 'react';

import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

import StyledTabs from './StyledTabs';
import H4 from '../H4';
import Grid from '../Grid';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <StyledTabs />
        <div className="tabs-wrapper">
          <Nav tabs>
            <Container>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '1'
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  <p>Informations</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '2'
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  <p>Reviews</p>
                </NavLink>
              </NavItem>
            </Container>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Container>
                <Row>
                  <Col sm="12">
                    <H4>Informations</H4>

                    <Grid>
                      <li>yo</li>
                      <li>yo</li>
                      <li>yo</li>
                    </Grid>
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2">
              <Container>
                <Row>
                  <Col sm="12">
                    <H4>Reviews</H4>
                    <Grid>
                      <li>hey</li>
                      <li>hey</li>
                      <li>hey</li>
                    </Grid>
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}

export default Tabs;
