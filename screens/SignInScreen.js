import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    Alert,
    StatusBar,
    TextInput,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from "../components/context";
const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if( reg.test(val) === true ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updataSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const signInHandle = (email, password) => {
        signIn(email, password);
    }

    const forgotPassword = () =>{
        Alert.alert('Email & Password', 'Email: admin@admin.com\nPassword: admin', [
            {text: 'Okay'}
        ]);
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="at"
                        color="#00b6d9"
                        size={20}
                    />
                    <TextInput
                        placeholder= "Your Email"
                        placeholderTextColor='grey'
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation="fadeIn"
                    >
                    <Feather
                        name="check-circle"
                        color="#00b6d9"
                        size={20}
                    />
                    </Animatable.View>
                    : 
                    <Animatable.View
                    animation="fadeIn"
                    >
                        <Feather
                        name="alert-circle"
                        color="red"
                        size={20}
                    />
                    </Animatable.View> }
                </View>
                
                <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#00b6d9"
                        size={20}
                    />
                    <TextInput
                        placeholder= "Your Password"
                        placeholderTextColor='grey'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updataSecureTextEntry}
                    >
                    {data.secureTextEntry?
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather
                        name="eye"
                        color="#00b6d9"
                        size={20}
                    />
                    }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {signInHandle( data.email, data.password )}}
                    >
                    <LinearGradient 
                        colors={['#00b6d9', '#002a4f']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, 
                            {color:"#fff"}]}
                        >Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {forgotPassword()}}>
                        <Text style={{color: '#00b6d9', marginTop:15}}>Forgot password?</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            borderColor: '#cccccc',
                            borderWidth: 2,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color:'#cccccc'
                        }]}>Sign Up</Text>
                    </TouchableOpacity> */}
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'white'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#333333',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: 'white',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.Android === 'android' ? 0 : -13,
        paddingLeft: 10,
        color: '#cccccc',
    },
    errorMsg: {
        color: '#cccccc',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });