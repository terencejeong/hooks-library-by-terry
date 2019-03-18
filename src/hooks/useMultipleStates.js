import React, { useState, } from 'react';

function ucfirst(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function useMultipleStates(stateMap) {
  return stateMap.reduce((acc, [stateName, defaultVal]) => {
    const setStateName = `set${ucfirst(stateName)}`;
    const stateProps = useState(defaultVal);
    return Object.assign({
      [stateName]: stateProps[0],
      [setStateName]: stateProps[1]
    }, acc)
  }, {})
};
