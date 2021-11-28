import React, { useEffect } from 'react';
import './price-feed-list.scss';
import PropTypes from 'prop-types';
import { useFilters, useGlobalFilter, useTable } from 'react-table';
import { Form } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter }, }) {
  return (
    <Form.Control type="search" placeholder="Name" className="app-input"
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      value={filterValue || ''} />
  );
}

/**
 * priceFeed list component
 * @param {{columns:Array<any>, data:Array<any>}}
 * @returns 
 */
function PriceFeedList({ columns, data, isLoading, isCompactView, filterChanged }) {
  const defaultColumn = React.useMemo(
    () => ({
      // default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state: { filters }
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      manualFilters: true,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
  );

  useEffect(() => {
    if (typeof filterChanged === 'function') filterChanged(filters);
  }, [filters]);

  if (isLoading && Array.isArray(data) && data.length == 0) {
    return (
      <SkeletonTheme baseColor="#3B2C07" highlightColor="#201803"><Skeleton style={{ marginBottom: 10, marginRight: isCompactView ? 10 : 0 }} count={6} width={isCompactView ? '370px' : '100%'} inline={isCompactView} height={isCompactView ? 177 : 54} borderRadius={15} /></SkeletonTheme>
    );
  }

  const getIconUrl = (rowIdx) => {
    if (Array.isArray(data) && data.length > rowIdx)
      return data[rowIdx].logoAddress;

    return '/assets/images/coins/btc.svg';
  };

  return (
    <>
      <div className="table-responsive app-table-container">
        <table responsive="true"  {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, headIdx) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headIdx}>
                {headerGroup.headers.map((column, columnIdx) => (
                  <th {...column.getHeaderProps()} key={columnIdx}>
                    {column.canFilter ? column.render('Filter') : column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIdx) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIdx}>
                  {row.cells.map((cell, cellIdx) => {
                    return (<td {...cell.getCellProps([{ className: cellIdx == 0 ? null : +cell.value < 50 ? 'text-danger' : 'text-success' }])} key={cellIdx}>
                      {cellIdx == 0 ? (<img src={getIconUrl(rowIdx)} width="32" height="32" className="me-2" />) : null}
                      {cell.render('Cell')}
                    </td>);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

PriceFeedList.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.any,
  isLoading: PropTypes.bool,
  isCompactView: PropTypes.bool,
  filterChanged: PropTypes.func
};

DefaultColumnFilter.propTypes = {
  column: PropTypes.any
};

export default PriceFeedList;