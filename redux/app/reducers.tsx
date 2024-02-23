import * as types from './types';

const initialState = {
  loginSuccess: null,
  expenseSuccess: [],
  error: null,
};

// Reducer function for handling state updates based on dispatched actions
export default (state = initialState, action: any) => {
  // Destructure the action to get type and payload
  const { type, payload } = action;

  // Switch statement to handle different action types
  switch (type) {
    // Case for handling a successful login
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        // Update the state with login success data from the payload
        loginSuccess: payload?.data?.data,
      };
    }

    // Case for handling the success of fetching the expense list
    case types.EXPENSE_LIST: {
      return {
        ...state,
        // Update the state with the fetched expense list data from the payload
        expenseSuccess: payload?.data,
      };
    }

    // Default case for handling unknown action types
    default:
      return state;
  }
};
