import React from 'react';

function Entry({ symbol, data }) {
  return (
    <div className="w-2/5 h-12 border flex flex-row gap-x-3 items-center">
      <div className="ml-4">
        {symbol}
      </div>
      <div>
        {console.log(data)}
        {data ? data["quote"]["USD"]["price"] : ""}
      </div>
      <div>
        {data ? data["quote"]["USD"]["percent_change_1h"] : ""}
      </div>
    </div>
  );
}

export default Entry;