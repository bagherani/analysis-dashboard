import * as React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

function Paging({ count, isFetching, currentPage, onClick, pageSize }) {
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
        <Pagination.Item key={i} active={i === currentPage} onClick={() => onClick(i)}>
          {i}
        </Pagination.Item>,
      );
    }

    return items;
  };

  return (
    <Pagination className="app-paging">
      <Pagination.First title="first" onClick={() => onClick(1)} disabled={currentPage == 1} />
      <Pagination.Prev title="previous" onClick={() => onClick(currentPage - 1)} disabled={currentPage == 1} />
      {getPaginationItems()}
      <Pagination.Next title="next" onClick={() => onClick(currentPage + 1)} disabled={currentPage == lastPage} />
      <Pagination.Last title="last" onClick={() => onClick(lastPage)} disabled={currentPage == lastPage} />
    </Pagination>
  );
}

Paging.propTypes = {
  count: PropTypes.number,
  isFetching: PropTypes.bool,
  currentPage: PropTypes.number,
  onClick: PropTypes.func,
  pageSize: PropTypes.number,
};

export default Paging;