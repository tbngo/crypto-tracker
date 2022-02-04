import React from 'react';

function Entry({ symbol }) {
  return (
    <div className="w-2/5 h-12 border flex flex-row gap-x-3 items-center">
      <div className="ml-4">
        {symbol}
      </div>
      <div>
        $37,183.80
      </div>
      <div>
        -3.64 (-1.27%)
      </div>
    </div>
  );
}

export default Entry;