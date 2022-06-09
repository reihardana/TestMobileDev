import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native-animatable";
import Contacts from "../components/Contacts";

const ContactsScreen = () => {
    const route = useRoute(); 
    return (
        <View style={{backgroundColor: 'black'}}>
            <Text style={{color: 'white', fontSize: 50, marginLeft:10}}>Contacts</Text>
            <Contacts navigation={route.navigation} />
        </View>
    );
};

export default ContactsScreen;