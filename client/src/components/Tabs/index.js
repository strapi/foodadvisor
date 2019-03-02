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
import H1 from '../H1';
import Grid from '../Grid';
import NotePaper from '../NotePaper';

const infos = [
  {
    title: 'Opening hours',
    infos: [
      { subtitle: 'Mondays', text: 'Closed' },
      { subtitle: 'Tuesday to Friday', text: '11am - 3pm / 5pm - 2am' },
      { subtitle: 'Weekends', text: '5pm - 2am' }
    ]
  },
  {
    title: 'Details',
    infos: [
      { subtitle: 'Cooking', text: 'Italian food' },
      { subtitle: 'Specific diets', text: 'Vegan, vegetarians, no gluten' },
      { subtitle: 'Meals', text: 'Lunch and dinner' }
    ]
  },
  {
    title: 'Location',
    infos: [
      { subtitle: '107 Boulevard Richard Lenoir 75011 Paris', info: '' },
      { subtitle: 'Website', text: 'http://obermama.com' },
      { subtitle: 'Phone number', text: '+331 58 30 62 78' }
    ]
  }
];

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
                  <p>
                    <span>Informations</span>
                  </p>
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
                  <p>
                    <span>Reviews</span>
                  </p>
                </NavLink>
              </NavItem>
            </Container>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="informations-pane">
              <Container>
                <Row>
                  <Col sm="12">
                    <H1>Informations</H1>
                    <Grid>
                      {infos.map(info => (
                        <li
                          key={info.title}
                          className="column informations-card"
                        >
                          <NotePaper informations={info} />
                        </li>
                      ))}
                    </Grid>
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2" className="reviews-pane">
              <Container>
                <Row>
                  <Col sm="12">
                    <H4 className="tab-title">Reviews</H4>
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
