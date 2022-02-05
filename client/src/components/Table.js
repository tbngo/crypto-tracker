import React, { useState, useEffect } from 'react';
import Entry from "./Entry";

function Table() {
  const [symbols, setSymbols] = useState(["BTC", "ETH", "DOGE"]);
  const [data, setData] = useState({});

  // TODO: add user profiles to allow deleting/adding different symbols
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/coin?q=${symbols.join()}`);
        const result = await response.json();
        setData(result["body"]["data"]);
      } catch (err) {
        return console.error(err);
      }
    };
    fetchData();
  }, [symbols]);

  const symbolEntries = symbols.map((symbol) => 
    <div key={symbol}>
      <Entry symbol={symbol} data={data[symbol]}/>
    </div>
  );

  return (
    <div className="flex flex-col">
      {symbolEntries}
    </div>
  );
}

export default Table;