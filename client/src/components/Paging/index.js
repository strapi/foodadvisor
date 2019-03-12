/**
 *
 * Paging
 *
 */

import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import PropTypes from 'prop-types';

function Paging() {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  );
}

Paging.defaultProps = {};
Paging.propTypes = {};

export default Paging;
