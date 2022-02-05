import React, { useState, useEffect } from 'react';
import Entry from "./Entry"

function Table() {
  const [symbols, setSymbols] = useState([])

  // TODO: add user profiles to allow deleting/adding different symbols
  useEffect(() => {
    setSymbols(["BTC", "ETH", "DOGE"]);
  }, [symbols]);

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