import React, { useState } from 'react';
import { usePrevious } from '../hooks';

const TestUsePrevious = () => {
  const [count, setCount ] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Count: {count}, Previous: { prevCount }</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  )
};

export default TestUsePrevious;

