import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    mainConatainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    mainBody: {
        flex: 1,
        backgroundColor: Colors.white,
        alignContent: 'center',
    },
    childContainer: {
        flex: 1,
        padding: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: Colors.primaryblue,
        borderRadius: 100,
        overflow: 'hidden',
        marginRight: 10,
    },
    image: {
        width: 70,
        height: 70,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black
    },
    nameText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.primaryblue
    },


    //income container
    incomeContanier: {
        marginVertical: 30,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        backgroundColor: Colors.primaryblue
    },
    incomeTextContainer: {
        alignItems: 'center',
    },
    rowDirection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    incomeHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white
    },
    incomeText: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: Colors.black
    },
    totalAmount: {
        fontSize: 27,
        fontWeight: 'bold',
        color: Colors.white,
        marginVertical: 10,
    },
    totalIncomeAmount: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.black,
        marginVertical: 10,
    },
    innerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.secondary
    },


    //All transection
    transectionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryblue
    },
    itemList: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    listChildContainer: {
        flex: 1,
        padding: 20,
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listImageContainer: {
        backgroundColor: Colors.primaryblue,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10,
        marginVertical: 20,
    },
    listImage: {
        width: 60,
        height: 60,
    },
    listTextContainer: {
        width: "55%",
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    listHeadingText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    listDate: {
        fontSize: 18,
        color: Colors.primaryblue
    },
    listAmount: {
        fontSize: 18,
        color: Colors.red,
        end: 0,
    },
    rightActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    actionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        backgroundColor: 'red',
    },
    actionText: {
        color: 'white',
    },


    //Floating button
    floatingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: Colors.primaryblue,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },


    //Modal View Style
    openModalButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    openModalButtonText: {
        color: 'white',
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    modalContent: {
        backgroundColor: Colors.secondary,
        padding: 20,
        borderRadius: 10,
        height: "75%",
        width: '90%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 8,
        padding: 10,
        borderRadius: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rowInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 5,
        padding: 10,
        borderRadius: 5,
    },
    expenseHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primaryblue,
        marginBottom: 50,
    },
    button: {
        backgroundColor: Colors.primaryblue,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});