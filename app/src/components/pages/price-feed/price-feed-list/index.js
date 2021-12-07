import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFilters, useGlobalFilter, useTable } from 'react-table';
import { Form, Row } from 'react-bootstrap';
import TableCell from './table-cell';

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
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
function PriceFeedList({ columns, data, filterChanged, isCompactView, providers, showInPercent }) {
  let [state, setState] = useState({ sticky: false });

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
    setFilter,
    state: { filters }
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      manualFilters: true,
    },
    useFilters,
    useGlobalFilter,
  );

  useEffect(() => {
    // call parent given filterChange event.
    if (typeof filterChanged === 'function') filterChanged(filters);
  }, [filters]);


  const getIconUrl = (rowIdx) => {
    if (Array.isArray(data) && data.length > rowIdx)
      return data[rowIdx].logoAddress;

    return '/assets/images/coins/btc.svg';
  };

  const handleTableScroll = (scroll) => {
    if (scroll > 50 && !state.sticky)
      setState({ ...state, sticky: true });

    if (scroll < 50 && state.sticky)
      setState({ ...state, sticky: false });
  };

  /**
   * compare cell value with `Miracle` value of the same row
   * @param {*} value 
   * @param {*} rowIdx 
   */
  const getCellClass = (value, rowIdx) => {
    if (value < +data[rowIdx]['Miracle'])
      return 'text-danger';

    if (value > +data[rowIdx]['Miracle'])
      return 'text-success';

    return '';
  };

  if (isCompactView) {
    return (
      <>
        <Form.Control type="search" placeholder="Enter the Name" className="app-input w-lg-25 mb-3 mt-lg-5"
          onChange={e => {
            setFilter('name', e.target.value || undefined);
          }} value={filters[0]?.value} />
        <Row className="px-2">
          {data.map((d, idx) => (
            <TableCell key={idx} data={d} providers={providers} showInPercent={showInPercent} />
          ))}
        </Row>
      </>
    );
  }

  return (
    <>
      <div className={`table-responsive app-table-container ${state.sticky ? 'sticked' : ''}`} onScroll={e => handleTableScroll(e.target.scrollTop)}>
        <table {...getTableProps()}>
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
                    return (<td {...cell.getCellProps([{ className: cellIdx == 0 ? null : getCellClass(+cell.value, rowIdx) }])} key={cellIdx}>
                      {cellIdx == 0 ? (<img src={getIconUrl(rowIdx)} width="32" height="32" className="me-2" />) : null}
                      {cellIdx < 2 ? cell.render('Cell') : showInPercent ? isNaN(+cell.value) || isNaN(row.cells[1].value)?'': (Math.abs(+cell.value - +row.cells[1].value) / +row.cells[1].value * 100).toFixed(2) + '%' : cell.value}
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
  filterChanged: PropTypes.func,
  providers: PropTypes.array,
  showInPercent: PropTypes.bool,
};

DefaultColumnFilter.propTypes = {
  column: PropTypes.any
};

export default PriceFeedList;