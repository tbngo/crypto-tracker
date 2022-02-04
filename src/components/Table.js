import React from 'react';
import Entry from "./Entry"

function Table() {
  return (
    <div className="flex flex-col">
      <Entry coin="BTC" />
      <Entry coin="ETH" />
      <Entry coin="DOGE" />
    </div>
  );
}

export default Table;