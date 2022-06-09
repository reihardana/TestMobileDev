import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Platform,
    Button,
    StatusBar,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    });

    const textInputChange = (val) =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg.test(val) === true) {
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

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
    }

    const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = (val) => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <View style={styles.footer}>
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
                    : <Animatable.View
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
                        onPress={updateSecureTextEntry}
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
                <Text style={[styles.text_footer, {marginTop:35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#00b6d9"
                        size={20}
                    />
                    <TextInput
                        placeholder= "Confirm Your Password"
                        placeholderTextColor='grey'
                        secureTextEntry={data.confirmSecureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                    {data.confirmSecureTextEntry?
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
                    <LinearGradient 
                        colors={['#00b6d9', '#002a4f']}
                        style={styles.signUp}
                    >
                        <Text style={[styles.textSign, 
                            {color:"#fff"}]}
                        >Sign Up</Text>
                    </LinearGradient>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signUp,{
                            borderColor: '#cccccc',
                            borderWidth: 2,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color:'#cccccc'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen;

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
    signUp: {
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