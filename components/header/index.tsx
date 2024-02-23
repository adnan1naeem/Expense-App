import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const Index = ({ title }) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerTitleStyle}>{title}</Text>
        </View>
    );
};
export default Index;

const styles = StyleSheet.create({
    headerStyle: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: Colors.primaryblue, // Replace with your primary color
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white, // Replace with your text color
    },
});