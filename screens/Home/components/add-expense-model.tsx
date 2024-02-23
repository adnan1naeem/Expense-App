import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { createExpense, editExpenseItem } from '../../../redux/app/operations';
import moment from 'moment';

const AppExpenseModal = ({ modalVisible, setModalVisible, editExpense }) => {
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const dispatch = useDispatch<any>();

    useEffect(() => {
        setExpenseTitle(editExpense?.message);
        setExpenseDate(editExpense?.message ? moment(editExpense?.message).format("YYYY-MM-DD") : "");
        setExpenseAmount(editExpense?.expense);
    }, [modalVisible])

    const handleModalSubmit = () => {
        if (!expenseTitle.trim()) {
            alert('Please enter a valid Expense Title');
            return;
        }
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(expenseDate.trim())) {
            alert('Please enter a valid Expense Date in the format YYYY-MM-DD');
            return;
        }

        const amountValue = parseFloat(expenseAmount);
        if (isNaN(amountValue) || amountValue <= 0) {
            alert('Please enter a valid positive Expense Amount');
            return;
        }
        let data = {
            message: expenseTitle,
            expense: expenseAmount,
            date: expenseDate
        }
        if (editExpense) {
            let combineData = {
                id: editExpense?.id,
                ...data,
            }
            dispatch(editExpenseItem(combineData)).then((item: any) => {
                console.log(JSON.stringify(item), "edit success");
            }).catch((error: any) => {
                console.log(JSON.stringify(error), "edit error");
            });
        } else {
            dispatch(createExpense(data)).then((item: any) => {
                console.log(JSON.stringify(item), "created");
            }).catch((error: any) => {
                console.log(JSON.stringify(error), "created error");
            });
        }
        setModalVisible(false);
    };

    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.expenseHeading}>Add Your Expense!</Text>

                    {/* Title Input */}
                    <Text style={styles.welcomeText}>Enter Your expense title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Expense Title"
                        value={expenseTitle}
                        onChangeText={(text) => setExpenseTitle(text)}
                    />

                    {/* Date and Amount Input */}
                    <Text style={styles.welcomeText}>Enter expense date</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="YYYY-MM-DD"
                        value={expenseDate}
                        onChangeText={(text) => setExpenseDate(text)}
                    />

                    <Text style={styles.welcomeText}>Enter expense amount</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="$ Amount"
                        value={expenseAmount}
                        onChangeText={(text) => setExpenseAmount(text)}
                    />

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.button} onPress={handleModalSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    {/* Close Modal Button */}
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
    );
};
export default AppExpenseModal;
