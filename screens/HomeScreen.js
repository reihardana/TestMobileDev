import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    StyleSheet,
    ImageBackground
} from "react-native";
const HomeScreen = ({navigation}) => {
    const onPressHandler = (val) => {
        navigation.navigate(val);
    }
    return (
        <View style={styles.body}>
            <ImageBackground source={require('../assets/home_background.png')} style={styles.backgroundImage}>
            <StatusBar backgroundColor='black' barStyle='light-content' />
            <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
                <Text
                    style={{
                    fontSize: 40,
                    color: "white",
                    fontFamily: "RobotoBold",
                    marginBottom:10,
                    textShadowColor: 'black',
                    textShadowRadius: 10,
                    }}
                >
                    Hello, there...
                </Text>
                <TouchableOpacity onPress={() => onPressHandler('Contacts')}>
                <View style={styles.mainCard}>
                    <Image 
                        source={require('../assets/contact_background.jpg')}
                        style={styles.image}
                    >
                    </Image>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressHandler('Profile')}>
                <View style={styles.mainCard}>
                    <Image 
                        source={require('../assets/profile_background.jpg')}
                        style={styles.image}
                    >
                    </Image>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressHandler('Setting')}>
                <View style={styles.mainCard}>
                    <Image 
                        source={require('../assets/setting_background.jpg')}
                        style={styles.image}
                    >
                    </Image>
                    
                </View>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: 'white',
    },
    mainCard: {
        borderRadius: 20,
        elevation: 3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        width: 250,
        height: 180
    },
    image: {
        shadowOffset: {
            width: 1, height: 1
        },shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 6,
        borderRadius: 20,
        flex: 1,
        resizeMode: 'stretch',
        width:280
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
})

export default HomeScreen;