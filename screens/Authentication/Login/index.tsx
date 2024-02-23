import React, { useState, createRef } from 'react';
import {
    TextInput,
    View,
    Text,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import Loader from '../../../components/loader';
import { styles } from './styles';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/app/actions';

const LoginScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('aali@techtiz.co');
    const [userPassword, setUserPassword] = useState('Tecthiz@123');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const passwordInputRef = createRef<any>();
    const dispatch = useDispatch();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!isEmailValid(userEmail)) {
            alert('Please enter valid Email');
            return;
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;
        }
        setLoading(true);
        let data = {
            email: userEmail,
            password: userPassword
        }
        signIn(data);
    };

    const signIn = async ({ email, password }: {
        email: string;
        password: string;
    }) => {
        try {
            const signedInUser = await Auth.signIn(email, password);
            await AsyncStorage.setItem('TOKEN', signedInUser?.signInUserSession?.idToken?.jwtToken);
            dispatch(actions.loginSuccess(signedInUser));
            setLoading(false);
            navigation.navigate("home");
            return signedInUser;
        } catch (err) {
            console.log(JSON.stringify(err, null, 2), "errerr\n\n")
            setLoading(false);
            return null;
        }
    };

    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <View style={styles.mainBody}>
            <Loader loading={loading} />
            <View>
                <KeyboardAvoidingView enabled>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <Text style={styles.welcomeText}>Welcome to Expense Tracker!</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) =>
                                setUserEmail(UserEmail)
                            }
                            value={userEmail}
                            placeholder="Enter Email" //dummy@abc.com
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            secureTextEntry={false}
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserPassword) =>
                                setUserPassword(UserPassword)
                            }
                            value={userPassword}
                            placeholder="Enter Password"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="default"
                            ref={passwordInputRef}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            secureTextEntry={true}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                        />
                    </View>
                    {errortext != '' ? (
                        <Text style={styles.errorTextStyle}>
                            {errortext}
                        </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitPress}>
                        <Text style={styles.buttonTextStyle}>LOGIN</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};
export default LoginScreen;
