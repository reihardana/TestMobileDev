
import * as React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import DetailsScreen from './screens/DetailsScreen';
import ContactsScreen from './screens/ContactsScreen';
import MainTabScreen from './screens/MainTabScreen';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './components/context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



const App = () => {
  const initialSignInState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const signInReducer = (prevState, action) =>{
    switch( action.type ){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGNIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGNOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      // case 'SIGNUP':
      //   return {
      //     ...prevState,
      //     email: action.id,
      //     userToken: action.token,
      //     isLoading: false,
      //   };
    }
  }

  const [signInState, dispatch] = React.useReducer(signInReducer, initialSignInState)

  const authContext = React.useMemo(() => ({
    signIn: (email, password) => {
      let userToken;
      userToken = null;
      if( email !== "" || password !== ""){
        if( email === 'admin@admin.com' && password === 'admin') {
          userToken = 'qwerty';
        }else{
          Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'}
        ]);
        }
      }else{
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      }
      dispatch({ type: 'SIGNIN', id: email, token: userToken });
    },
    signOut: () => {
      dispatch({ type: 'SIGNOUT'})
    },
    // signUp: () => {
    //   dispatch({ type: 'SIGNUP', id: email, token:userToken });
    // },
  }), []);

  React.useEffect(() => {
    setTimeout(() => {
      let userToken;
      userToken = null;
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if( signInState.isLoading ) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { signInState.userToken !== null ?(
        
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='MainScreen' component={MainTabScreen} />
            <Stack.Screen name='ContactsScreen' component={ContactsScreen}/>
            <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
        </Stack.Navigator> 
        
        
      ):
        <RootStackScreen/>
      }
      
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;