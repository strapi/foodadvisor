/**
 *
 * Paging
 *
 */

import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import StyledPaging from './StyledPaging';

function Paging({
  count,
  page,
  onChange,
  range,
}) {
  const pagesCount = Math.round(count/range);

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
              <>
              <span>&nbsp;•&nbsp;</span>
              <PaginationItem key={index} onClick={onChange} className={page === index*range ? 'selected' : ''}>
                <PaginationLink onClick={onChange} value={index*range}>{index + 1}</PaginationLink>
              </PaginationItem>
              </>
            )
          })}
        <PaginationItem>
          <PaginationLink onClick={onChange} value={(pagesCount-1) * range} />
        </PaginationItem>
      </Pagination>
    </>
  );
}

Paging.defaultProps = {
  count: 0,
  onChange: () => {},
  range: 12,
};

Paging.propTypes = {
  count: PropTypes.number,
  range: PropTypes.number,
  onChange: PropTypes.func,
};

export default Paging;
