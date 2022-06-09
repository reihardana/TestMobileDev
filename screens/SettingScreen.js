import React from "react";
import { AuthContext } from "../components/context";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from "react-native";
const SettingScreen = ({navigation}) => {
    const { signOut } = React.useContext(AuthContext);
    const onPressHandler = () => {
        signOut();
    }
    return (
        <View style={styles.body}>
            <ImageBackground source={require('../assets/setting_background2.png')} style={styles.backgroundImage}>
            <Text style={styles.text}>Thank you so much for the opportunity you gave me, I appreciate the 
            opportunity to join in the React Mobile Developer position at your company</Text>
            <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                <Text style={styles.textButton}>Logout</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: 'white',
        alignContent:'center'
    },
    text: {
        alignSelf: 'center',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal:20,
        marginVertical: 200,
        color: 'white'
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginHorizontal:100,
        shadowColor:'white',
        shadowRadius:50,
        shadowOpacity:50,
        shadowOffset:50,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
})

export default SettingScreen;