import * as actions from './actions';
import RestApi from '../../services/restclient/RestApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Action to fetch the list of expenses
export const expenseList = () => async (dispatch: any) => {
    try {
        // Retrieve the authentication token from AsyncStorage
        let token = await AsyncStorage.getItem('TOKEN');

        // Make an API call to fetch the expense list
        return RestApi.getInstance().get('getMessages', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
        .then((json: any) => {
            const { data } = json;

            // Dispatch an action to update the state with the fetched expense list
            dispatch(actions.expenseListSuccess(data));

            // Return the fetched data
            return data;
        })
        .catch(async (error) => {
            console.log("Error expense list: ", error);
        });
    } catch (error) {
        console.log('error expense list.. ', JSON.stringify(error));
    }
};

// Action to create a new expense record
export const createExpense = params => async (dispatch: any) => {
    try {
        // Retrieve the authentication token from AsyncStorage
        let token = await AsyncStorage.getItem('TOKEN');

        // Make an API call to create a new expense record
        return RestApi.getInstance().post('putMessage', params, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
        .then((json: any) => {
            const { data } = json;

            // Dispatch an action to update the state with the created expense record
            dispatch(actions.createExpenseSuccess(data));

            // Dispatch the expenseList action to update the state with the latest expense list
            dispatch(expenseList());

            // Return the created data
            return data;
        })
        .catch(async (error) => {
            console.log("Error create expense: ", error);
        });
    } catch (error) {
        console.log('error create expense.. ', JSON.stringify(error));
    }
};

// Action to edit an existing expense record
export const editExpenseItem = params => async (dispatch: any) => {
    try {
        // Retrieve the authentication token from AsyncStorage
        let token = await AsyncStorage.getItem('TOKEN');

        // Make an API call to edit an existing expense record
        return RestApi.getInstance().post('updateMessage', params, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
        .then((json: any) => {
            const { data } = json;

            // Dispatch an action to update the state with the edited expense record
            dispatch(actions.updateExpenseSuccess(data));

            // Dispatch the expenseList action to update the state with the latest expense list
            dispatch(expenseList());

            // Return the edited data
            return data;
        })
        .catch(async (error) => {
            console.log("Error edit expense: ", error);
        });
    } catch (error) {
        console.log('error edit expense.. ', JSON.stringify(error));
    }
};

// Action to delete an existing expense record
export const deleteExpense = params => async (dispatch: any) => {
    try {
        // Retrieve the authentication token from AsyncStorage
        let token = await AsyncStorage.getItem('TOKEN');

        // Make an API call to delete an existing expense record
        return RestApi.getInstance().post('removeMessage', params, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
        .then((json: any) => {
            const { data } = json;

            // Dispatch an action to update the state with the deleted expense record
            dispatch(actions.deleteExpenseSuccess(data));

            // Dispatch the expenseList action to update the state with the latest expense list
            dispatch(expenseList());

            // Return the deleted data
            return data;
        })
        .catch(async (error) => {
            console.log("Error delete expense: ", error);
        });
    } catch (error) {
        console.log('error delete expense.. ', JSON.stringify(error));
    }
};
