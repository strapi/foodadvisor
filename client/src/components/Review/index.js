/**
 *
 * Review
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable camelcase */

import Pic from '../../assets/tempToRemove/temp.png';
import Rate from '../Rate';
import H4 from '../H4';
import Img from '../Img';

const Avatar = styled(Img)`
  width: 74px;
  height: 74px;
  object-fit: contain;
  box-shadow: 0 0 4px 0 #e7e7e7;
  border-radius: 50%;
`;

const Published = styled.p`
  height: 16px;
  font-size: 8px;
  line-height: 2;
  color: #969696;
`;

const Flex = styled.div`
  display: flex;
  position: relative;
  max-width: calc(100vw);
`;

const Content = styled.p`
  margin-top: 5px;
  font-family: Open Sans;
  font-size: 12px;
  line-height: 1.5;
  color: #191919;
  overflow-wrap: break-word;
`;

const Wrapper = styled.div`
  padding-bottom: 22px;
  border-bottom: 1px solid #f3f3f3;
`;

export const Title = styled(H4)`
  padding-right: 8px;
`;

const RateContainer = styled.div`
  position: absolute !important;
  right: 0;
  top: -4px;
`;

function Review({ created_at, author: { username }, note, content }) {
  return (
    <Wrapper>
      <Flex>
        <div style={{ marginRight: '32px' }}>
          <Avatar src={Pic} alt={username} />
        </div>
        <div style={{ width: '100%' }}>
          <Flex style={{ justifyContent: 'space-between' }}>
            <Title>Username</Title>
            <RateContainer>
              <Rate min={0} max={5} value={note} />
            </RateContainer>
          </Flex>
          <Published>
            Published {moment().diff(moment(created_at), 'days')} days ago
          </Published>
          <Content>{content}</Content>
        </div>
      </Flex>
    </Wrapper>
  );
}

Review.defaultProps = {
  content: null,
  created_at: null,
  author: {
    username: null
  },
  note: null
};

Review.propTypes = {
  content: PropTypes.string,
  created_at: PropTypes.string,
  author: PropTypes.shape({
    username: PropTypes.string
  }),
  note: PropTypes.number
};

export default Review;
