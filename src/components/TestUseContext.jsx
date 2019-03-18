import React, { useContext } from 'react';
import { TerryContext } from '../context/TerryContext';

const TestUseContext = () => {
  let { state, dispatch } = useContext(TerryContext);
  return (
    <>
      <p>Name from the store {state.name}</p>
      <button
        onClick={() => dispatch({
          type: 'SET_NAME',
          payload: 'Zion'
        })}>
        Change first name to Jerry
      </button>
      <p>Last name from the store {state.lastName}</p>
      <button
        onClick={() => dispatch({
          type: 'SET_LAST_NAME',
          payload: 'Williamson'
        })}>
        Change last name to Williamson
      </button>
      <button
        onClick={() => dispatch({
          type: 'RESET',
        })}
      >
        Reset Names
      </button>
    </>
  )
};

export default TestUseContext;
