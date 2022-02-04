import React, { useState, useEffect } from 'react';
import Entry from "./Entry"

function Table() {
  const [symbols, setSymbols] = useState([])

  const getSymbols = () => {
    setSymbols(["BTC", "ETH", "DOGE"]);
  };

  useEffect(() => {
    getSymbols();
  });

  const symbolEntries = symbols.map((symbol) => 
    <div key={symbol}>
      <Entry symbol={symbol}/>
    </div>
  );

  return (
    <div className="flex flex-col">
      {symbolEntries}
    </div>
  );
}

export default Table;