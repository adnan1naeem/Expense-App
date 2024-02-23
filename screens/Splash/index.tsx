
import { View, Image } from 'react-native';
import { styles } from './styles';
import { useEffect } from 'react';

export default function Index({ navigation }) {
    useEffect(() => {
        // Set a timeout for 2000 milliseconds (2 seconds)
        setTimeout(() => {
            // Replace the current screen with the "login" screen
            navigation.replace("login");
        }, 2000);
    }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount


    return (
        // The main container for the Splash component
        <View style={styles.container}>
            {/* Logo container */}
            <View style={styles.logoContainer}>
                {/* Logo image */}
                <Image
                    source={require('../../assets/logo.png')} // Provide the path to your logo image
                    style={styles.logo} // Apply styles to the logo
                    resizeMode="contain"  // Adjust the image resizeMode as needed
                />
            </View>
        </View>
    );
}
