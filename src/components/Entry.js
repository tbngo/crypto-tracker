import React from 'react';

function Entry({ coin }) {
  return (
    <div className="w-2/5 h-12 border flex flex-row gap-x-3">
      <div>
        {coin}
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