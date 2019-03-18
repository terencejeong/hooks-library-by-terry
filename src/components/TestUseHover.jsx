import React from 'react';
import { useHover } from '../hooks';

const TestUseHover = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <div ref={hoverRef}>
      {isHovered
        ? 'hovered'
        : 'not hovered'
      }
    </div>
  )
};

export default TestUseHover
