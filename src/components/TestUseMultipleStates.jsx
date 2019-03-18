import React from 'react';
import { useMultipleStates } from '../hooks'

const TestUseMultipleStates = () => {
  const state = useMultipleStates([
    ['email', 'email@mail.com'],
    ['password', 'password'],
    ['confirmPassword', 'confirmPassword'],
    ['company', 'someCompany']
  ]);
  return (
    <div>
      <p>Email: {state.email}</p>
      <input
        name="email"
        onChange={(e) => state.setEmail(e.target.value)}
      />
      <p>Password: {state.password}</p>
      <input
        name="passsword"
        onChange={(e) => state.setPassword(e.target.value)}
      />
      <p>Confirm Password: {state.confirmPassword}</p>
      <input
        name="confirmPassword"
        onChange={(e) => state.setConfirmPassword(e.target.value)}
      />
      <p>Company: {state.company}</p>
      <input
        name="company"
        onChange={(e) => state.setCompany(e.target.value)}
      />
    </div>
  )
};

export default TestUseMultipleStates
