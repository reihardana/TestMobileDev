import { useRoute } from "@react-navigation/native";
import React from "react";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import CardDetails from "../shared/CardDetails";
const DetailsScreen = ({navigation}) => {
    const route = useRoute();
    return (
        <View style={styles.body}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
            <MaterialIcon name="arrow-back-ios" color='#00b6d9'size={20} style={{paddingLeft:20}}/>
            </TouchableOpacity>
            <MaterialIcon name='account-circle' color='#00b6d9' size={150} style={{alignSelf: 'center', paddingTop: 10}} />
            <Text style={{ 
                textAlign: 'center',
                fontSize: 25,
                color: 'white',
                paddingBottom:15 
            }}>{route.params.name}</Text>
            <CardDetails>
                <Text style={styles.text_white}>Phone</Text>
                <Text style={styles.text_blue}>{route.params.phone}</Text>
            </CardDetails>
            <CardDetails>
                <Text style={styles.text_white}>Email</Text>
                <Text style={styles.text_blue}>{route.params.email}</Text>
            </CardDetails>
            <CardDetails>
                <Text style={styles.text_white}>Website</Text>
                <Text style={styles.text_blue}>{route.params.website}</Text>
            </CardDetails>
            <CardDetails>
                <Text style={styles.text_white}>Company</Text>
                <Text style={styles.text_blue}>{route.params.companyName}</Text>
            </CardDetails>
            <CardDetails>
                <Text style={styles.text_white}>Address</Text>
                <Text style={styles.text_blue}>{route.params.street}, {route.params.city}, {route.params.zipCode}</Text>
            </CardDetails>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    text_white: {
        fontSize: 20,
        marginHorizontal:10,
        color: 'white',

    },
    text_blue: {
        fontSize:15,
        marginHorizontal: 10,
        marginTop:5,
        color: '#00b6d9',
    }
});

export default DetailsScreen;
