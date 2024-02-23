import * as types from './types';

// Action creator for a successful user login
export const loginSuccess = (data: object) => ({
  type: types.LOGIN_SUCCESS,  // Action type indicating a successful login
  payload: {
    data,  // Data associated with the successful login
  },
});

// Action creator for receiving the expense list successfully
export const expenseListSuccess = (data: object) => ({
  type: types.EXPENSE_LIST,  // Action type indicating a successful expense list retrieval
  payload: {
    data,  // Data associated with the expense list
  },
});

// Action creator for creating a new expense successfully
export const createExpenseSuccess = (data: object) => ({
  type: types.CREATE_EXPENSE,  // Action type indicating successful creation of a new expense
  payload: {
    data,  // Data associated with the newly created expense
  },
});

// Action creator for updating an existing expense successfully
export const updateExpenseSuccess = (data: object) => ({
  type: types.UPDATE_EXPENSE,  // Action type indicating successful update of an expense
  payload: {
    data,  // Data associated with the updated expense
  },
});

// Action creator for deleting an existing expense successfully
export const deleteExpenseSuccess = (data: object) => ({
  type: types.DELETE_EXPENSE,  // Action type indicating successful deletion of an expense
  payload: {
    data,  // Data associated with the deleted expense
  },
});
