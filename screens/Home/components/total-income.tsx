import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { styles } from '../styles';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../../constants/colors';

const TotalIncome = ({ totalRemaining, totalIncome, totalExpense }) => {
    return (
        <View style={styles.incomeContanier}>

            {/* Total Balance */}
            <Text style={styles.incomeHeading}>Total Balance</Text>
            <Text style={styles.totalAmount}>$ {totalRemaining}</Text>

            {/* Income and Expense Details */}
            <View style={styles.innerContainer}>

                {/* Income */}
                <View style={styles.incomeTextContainer}>
                    <View style={styles.rowDirection}>
                        <FontAwesome name="arrow-down" size={18} color={Colors.green} />
                        <Text style={styles.incomeText}>Income</Text>
                    </View>
                    <Text style={styles.totalIncomeAmount}>$ {totalIncome}</Text>
                </View>

                {/* Expense */}
                <View style={styles.incomeTextContainer}>
                    <View style={styles.rowDirection}>
                        <FontAwesome name="arrow-up" size={18} color={Colors.red} />
                        <Text style={styles.incomeText}>Expense</Text>
                    </View>
                    <Text style={styles.totalIncomeAmount}>$ {totalExpense}</Text>
                </View>

            </View>
        </View>
    );
};
export default TotalIncome;
