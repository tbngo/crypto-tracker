import React, { useState, useEffect } from 'react';
import Entry from "./Entry";

function Table() {
  const [symbols, setSymbols] = useState(["BTC", "ETH", "DOGE"]);

  // TODO: add user profiles to allow deleting/adding different symbols
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/coin?q=${symbols.join()}`)
        console.log(data);
      } catch (err) {
        return console.error(err)
      }
    };
    fetchData();
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