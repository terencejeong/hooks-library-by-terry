import React, { useContext } from 'react';
import { partial } from 'ramda';
import { TerryContext } from '../context/TerryContext';

const TestUseContext = () => {
  let { state, dispatch } = useContext(TerryContext);
  return (
    <>
      <p>Name from the store {state.name}</p>
      <button
        onClick={
          partial(
            dispatch,
            [{
              type: 'SET_NAME',
              payload: 'Zion'
            }]
          )
        }>
        Change first name to Zion
      </button>
      <p>Last name from the store {state.lastName}</p>
      <button
        onClick={
          partial(
            dispatch,
            [{
              type: 'SET_LAST_NAME',
              payload: 'Williamson'
            }]
          )
        }>
        Change last name to Williamson
      </button>
      <button
        onClick={ partial(dispatch, [{ type: 'RESET', }]) }
      >
        Reset Names
      </button>
    </>
  )
};

export default TestUseContext;
