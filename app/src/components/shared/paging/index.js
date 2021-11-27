import * as React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

function Paging({ count, isFetching, currentPage, pageSize, canNextPage, canPreviousPage, gotoPage }) {
  if (!pageSize)
    pageSize = 24;

  if (isFetching || count <= pageSize) return null;

  let lastPage = 0;

  const getPaginationItems = () => {
    lastPage = Math.floor(count / pageSize);
    if (count % pageSize > 0) lastPage++;

    // ToDo: apply proper pagination algorithm
    let items = [];
    for (let i = 1; i <= lastPage; i++) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => gotoPage(i)}>
          {i}
        </Pagination.Item>,
      );
    }

    return items;
  };

  return (
    <Pagination className="app-paging">
      <Pagination.First title="first" onClick={() => gotoPage(1)} />
      <Pagination.Prev title="previous" onClick={() => gotoPage(currentPage - 1)} disabled={canPreviousPage} />
      {getPaginationItems()}
      <Pagination.Next title="next" onClick={() => gotoPage(currentPage + 1)} disabled={canNextPage} />
      <Pagination.Last title="last" onClick={() => gotoPage(lastPage)} />
    </Pagination>
  );
}

Paging.propTypes = {
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  gotoPage: PropTypes.func,
};

export default Paging;