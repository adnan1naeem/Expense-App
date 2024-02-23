import * as actions from './actions';
import RestApi from '../../services/restclient/RestApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Expense List Record
export const expenseList = () => async (dispatch: any) => {
    try {
        let token = await AsyncStorage.getItem('TOKEN');
        return RestApi.getInstance().get('getMessages', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
            .then((json: any) => {
                const { data } = json;
                dispatch(actions.expenseListSuccess(data));
                return data;
            })
            .catch(async (error) => {
                console.log("Error expense list: ", error);
            });
    } catch (error) {
        console.log('error expense list.. ', JSON.stringify(error));
    }
};

//Create a new Expense Record
export const createExpense = params => async (dispatch: any) => {
    try {
        let token = await AsyncStorage.getItem('TOKEN');
        return RestApi.getInstance().post('putMessage', params, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
            .then((json: any) => {
                const { data } = json;
                dispatch(actions.createExpenseSuccess(data));
                dispatch(expenseList());
                return data;
            })
            .catch(async (error) => {
                console.log("Error create expense: ", error);
            });
    } catch (error) {
        console.log('error create expense.. ', JSON.stringify(error));
    }
};

//Edit a new Expense Record
export const editExpenseItem = params => async (dispatch: any) => {
    try {
        let token = await AsyncStorage.getItem('TOKEN');
        return RestApi.getInstance().post('updateMessage', params, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
            .then((json: any) => {
                const { data } = json;
                dispatch(actions.updateExpenseSuccess(data));
                dispatch(expenseList());
                return data;
            })
            .catch(async (error) => {
                console.log("Error eidt expense: ", error);
            });
    } catch (error) {
        console.log('error edit expense.. ', JSON.stringify(error));
    }
};

//Delete a new Expense Record
export const deleteExpense = params => async (dispatch: any) => {
    try {
        let token = await AsyncStorage.getItem('TOKEN');
        return RestApi.getInstance().post('removeMessage', params, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
        })
            .then((json: any) => {
                const { data } = json;
                dispatch(actions.deleteExpenseSuccess(data));
                dispatch(expenseList());
                return data;
            })
            .catch(async (error) => {
                console.log("Error delete expense: ", error);
            });
    } catch (error) {
        console.log('error delete expense.. ', JSON.stringify(error));
    }
};