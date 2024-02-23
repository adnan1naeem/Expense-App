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

    const renderItem = ({ item, index }) => {
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

        const handleEdit = (item: any) => {
            closeRow();
            setEditExpense(item);
            setModalVisible(true);
        }
        const handleDelete = (item: any) => {
            closeRow();
            let data = {
                id: item?.id
            }
            dispatch(deleteExpense(data));
        }

        const closeRow = () => {
            if (prevOpenedRow && prevOpenedRow !== row[index]) {
                prevOpenedRow.close();
            }
            prevOpenedRow = row[index];
        };

        const getDate = (date) => {
            return moment(date).format("YYYY-MM-DD")
        }

        return <Swipeable
            renderRightActions={renderRightActions}
            onSwipeableOpen={closeRow}
            ref={(ref) => (row[index] = ref)}>
            <View style={styles.listContainer}>
                <View style={styles.listImageContainer}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.listImage} />
                </View>
                <View style={styles.listTextContainer}>
                    <Text style={styles.listHeadingText}>{item?.message}</Text>
                    <Text style={styles.listDate}>{getDate(item?.date)}</Text>
                </View>
                <Text style={styles.listAmount}>- {item?.expense} $</Text>
            </View>
        </Swipeable>
    };

    return (
        <View>
            <Text style={styles.transectionText}>All Transection</Text>
            <FlatList
                data={expenseListData}
                renderItem={renderItem}
                keyExtractor={(item) => item.value}
            />
        </View>

    );
};
export default TransectionList;
