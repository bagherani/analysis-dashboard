import * as React from 'react';
import './price-feed-list.scss';
import PropTypes from 'prop-types';
import { matchSorter } from 'match-sorter';
import { useFilters, useGlobalFilter, usePagination, useTable } from 'react-table';
import { Form, Col, Dropdown, Row } from 'react-bootstrap';
import Paging from '../../../shared/paging';


function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val;

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

// Our table component
function PriceFeedList({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageSize: 7 }
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );

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
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell, cellIdx) => {
                    return (<td {...cell.getCellProps([{ className: cellIdx == 0 ? null : +cell.value < 50 ? 'text-danger' : 'text-success' }])} key={cellIdx}>
                      {cellIdx == 0 ? (<img src="/assets/images/coins/btc.svg" width="32" height="32" className="me-2" />) : null}
                      {cell.render('Cell')}
                    </td>);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Row>
        <Col lg="6">
          <Paging count={pageCount * pageSize}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageOptions={pageOptions}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            currentPage={pageIndex} pageSize={pageSize} />
        </Col>
        <Col lg="6" className="text-lg-end">
          <Dropdown className="d-inline-block me-2" drop="up"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            <Dropdown.Toggle variant="" id="dropdown-basic" className="app-button sm">
              24
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item>24</Dropdown.Item>
              <Dropdown.Item>48</Dropdown.Item>
              <Dropdown.Item>96</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          Displaying 1 - 24 of 100 records
        </Col>
      </Row>
    </>
  );
}

PriceFeedList.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.any
};

DefaultColumnFilter.propTypes = {
  column: PropTypes.any
};

export default PriceFeedList;