import React from 'react';
import { Text, ScrollView } from 'react-native';
import CardList from '../shared/CardList';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Contact = route => {
    return (
            <ScrollView style={{}}>
                <CardList>
                    <MaterialIcon
                        name='account-circle'
                        color='white'
                        size={25}
                        style={{
                            marginRight:10,
                        }}
                    />
                    <Text
                    style={{fontSize: 20, color: 'white' }} 
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    >{route.contact.name}</Text>
                </CardList>
            </ScrollView>
    );
};
export default Contact;