import * as types from './types';

const initialState = {
  loginSuccess: null,
  expenseSuccess: [],
  error: null,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loginSuccess: payload?.data?.data,
      };
    }
    case types.EXPENSE_LIST: {
      return {
        ...state,
        expenseSuccess: payload?.data,
      };
    }

    default:
      return state;
  }
};
