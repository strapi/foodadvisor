/**
 *
 * Paging
 *
 */

import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import StyledPaging from './StyledPaging';
/* eslint-disable react/no-array-index-key */

function Paging({ count, page, onChange, range }) {
  const pagesCount = Math.ceil(count / range);

  return (
    <>
      <StyledPaging />
      <Pagination aria-label="Page navigation">
        <PaginationItem>
          <PaginationLink onClick={onChange} value={0} />
        </PaginationItem>
        {Array(pagesCount)
          .fill(1)
          .map((item, index) => {
            return (
              <React.Fragment key={index}>
                <span>&nbsp;•&nbsp;</span>
                <PaginationItem
                  key={index}
                  onClick={onChange}
                  className={page === index * range ? 'selected' : ''}
                >
                  <PaginationLink onClick={onChange} value={index * range}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            );
          })}
        <PaginationItem>
          <PaginationLink onClick={onChange} value={(pagesCount - 1) * range} />
        </PaginationItem>
      </Pagination>
    </>
  );
}

Paging.defaultProps = {
  count: 0,
  onChange: () => {},
  page: 0,
  range: 15,
};

Paging.propTypes = {
  count: PropTypes.number,
  range: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};

export default Paging;
