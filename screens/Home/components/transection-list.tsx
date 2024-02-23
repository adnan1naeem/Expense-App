import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import moment from 'moment';
import { Colors } from '../../../constants/colors';
import { Swipeable } from 'react-native-gesture-handler';
import { deleteExpense } from '../../../redux/app/operations';
import { useDispatch } from 'react-redux';

const TransectionList = ({ expenseListData, setModalVisible, setEditExpense }) => {
    const dispatch = useDispatch<any>();
    let row = [];
    let prevOpenedRow;

    // Function to render each item in the FlatList
    const renderItem = ({ item, index }) => {
        // Function to render swipeable right actions
        const renderRightActions = () => {
            return (
                <View style={styles.rightActions}>
                    {/* Edit Button */}
                    <TouchableOpacity
                        onPress={() => handleEdit(item)}
                        style={[styles.actionButton, { backgroundColor: Colors.green }]}>
                        <Text style={styles.actionText}>Edit</Text>
                    </TouchableOpacity>

                    {/* Delete Button */}
                    <TouchableOpacity
                        onPress={() => handleDelete(item)}
                        style={[styles.actionButton, { backgroundColor: Colors.red }]}>
                        <Text style={styles.actionText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            );
        };

        // Function to handle edit action
        const handleEdit = (item: any) => {
            closeRow();
            setEditExpense(item);
            setModalVisible(true);
        };

        // Function to handle delete action
        const handleDelete = (item: any) => {
            closeRow();
            let data = {
                id: item?.id
            };
            dispatch(deleteExpense(data));
        };

        // Function to close the currently opened row
        const closeRow = () => {
            if (prevOpenedRow && prevOpenedRow !== row[index]) {
                prevOpenedRow.close();
            }
            prevOpenedRow = row[index];
        };

        // Function to format date using Moment.js
        const getDate = (date) => {
            return moment(date).format("YYYY-MM-DD");
        };

        // Return a Swipeable-wrapped view for each item
        return (
            <Swipeable
                renderRightActions={renderRightActions}
                onSwipeableOpen={closeRow}
                ref={(ref) => (row[index] = ref)}>
                <View style={styles.listContainer}>
                    {/* Image Container */}
                    <View style={styles.listImageContainer}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={styles.listImage}
                        />
                    </View>
                    {/* Text Container */}
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listHeadingText}>{item?.message}</Text>
                        <Text style={styles.listDate}>{getDate(item?.date)}</Text>
                    </View>
                    {/* Amount Text */}
                    <Text style={styles.listAmount}>- {item?.expense} $</Text>
                </View>
            </Swipeable>
        );
    };

    // Return the main component JSX
    return (
        <View>
            <Text style={styles.transectionText}>All Transaction</Text>
            <FlatList
                data={expenseListData}
                renderItem={renderItem}
                keyExtractor={(item) => item.value}
            />
        </View>
    );
};
export default TransectionList;
