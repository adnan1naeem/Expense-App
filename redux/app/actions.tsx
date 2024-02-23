import * as types from './types';

export const loginSuccess = (data: object) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    data,
  },
});

export const expenseListSuccess = (data: object) => ({
  type: types.EXPENSE_LIST,
  payload: {
    data,
  },
});

export const createExpenseSuccess = (data: object) => ({
  type: types.CREATE_EXPENSE,
  payload: {
    data,
  },
});

export const updateExpenseSuccess = (data: object) => ({
  type: types.UPDATE_EXPENSE,
  payload: {
    data,
  },
});

export const deleteExpenseSuccess = (data: object) => ({
  type: types.DELETE_EXPENSE,
  payload: {
    data,
  },
});