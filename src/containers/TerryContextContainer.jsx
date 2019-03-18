import React from 'react';
import { TerryContextProvider } from '../context/TerryContext';
import TestUseContext from '../components/TestUseContext'

const TerryContextContainer = () => {
  return (
    <TerryContextProvider>
      <TestUseContext />
    </TerryContextProvider>
  )
};

export default TerryContextContainer
