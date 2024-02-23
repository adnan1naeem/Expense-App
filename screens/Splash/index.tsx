
import { View, Image } from 'react-native';
import { styles } from './styles';
import { useEffect } from 'react';

export default function Index({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("login");
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}
