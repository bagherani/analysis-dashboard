import * as React from 'react';
import PriceFeedListItem from '../price-feed-list-item';
import './price-feed-list.scss';

export default function PriceFeedList() {
  return (
    <>
      {Array.from(Array(10).keys()).map(key => (
        <PriceFeedListItem key={key} />
      ))}
    </>
  );
}