import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Loader from '../../components/loader';
import { styles } from './styles';
import Header from '../../components/header'
import { Colors } from '../../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import TotalIncome from './components/total-income';
import TransectionList from './components/transection-list';
import { useDispatch, useSelector } from 'react-redux';
import AppExpenseModal from './components/add-expense-model';
import { expenseList } from '../../redux/app/operations';

const Index = () => {
    const expenseListData = useSelector((state: any) => state?.app?.expenseSuccess);
    const [loading, setLoading] = useState(true);
    const [totalRemaining, setTotalRemaining] = useState(0);
    const [totalIncome, setTotalIncome] = useState(900000);
    const [totalExpense, setTotalExpense] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [editExpense, setEditExpense] = useState(null);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        // Initial API call when the component mounts
        callExpenseApi();
    }, []);

    useEffect(() => {
        // Update totalExpense and totalRemaining when expenseListData changes
        if (expenseListData) {
            const totalExpense = expenseListData?.reduce((sum: string, item: any) => sum + parseInt(item?.expense), 0);
            setTotalExpense(totalExpense);
            setTotalRemaining(totalIncome - totalExpense);
        }
    }, [expenseListData]);

    const callExpenseApi = async () => {
        // Dispatch the expenseList action and update loading state
        await dispatch(expenseList()).then(() => setLoading(false));
        setLoading(false);
    }

    const handleFloatingClick = () => {
        // Open the modal for adding a new expense or editing an existing one
        setEditExpense(null);
        setModalVisible(true);
    };

    return (
        <View style={styles.mainConatainer}>
            <ScrollView style={styles.mainBody}>

                {/* Header Component */}
                <Header title={"Home"} />

                {/* Loader Component */}
                <Loader loading={loading} />

                <View style={styles.childContainer}>

                    {/* Welcome Module */}
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            {/* Logo Image */}
                            <Image
                                source={require('../../assets/logo.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            {/* Welcome Text */}
                            <Text style={styles.welcomeText}>Welcome!</Text>
                            {/* User's Name */}
                            <Text style={styles.nameText}>Usama Laeeq</Text>
                        </View>
                    </View>

                    {/* Total income */}
                    <TotalIncome
                        totalRemaining={totalRemaining}
                        totalIncome={totalIncome}
                        totalExpense={totalExpense}
                    />

                    {/* List of income */}
                    <TransectionList
                        expenseListData={expenseListData}
                        setModalVisible={setModalVisible}
                        setEditExpense={setEditExpense}
                    />
                </View>
            </ScrollView>

            {/* Floating button */}
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={handleFloatingClick}
            >
                {/* Plus Icon */}
                <FontAwesome name="plus" size={24} color={Colors.white} />
            </TouchableOpacity>

            {/* Modal View */}
            <AppExpenseModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                editExpense={editExpense}
            />
        </View>
    );

};
export default Index;
