import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Contact from './Contact';
const Contacts = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(false);
    const [contacts, setContacts] = useState([]);
    let getContacts = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => setContacts(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getContacts();
    }, []);
    return(
        <View style={{ paddingHorizontal: 10, backgroundColor: '#010101' }}>
            <StatusBar backgroundColor='#010101' barStyle='light-content' />
            
            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={contacts}
                    key={({ id }) => id.toString()}
                    renderItem={
                        ({ item }) =>

                        <TouchableOpacity
                            onPress={() => 
                                navigation.navigate("DetailsScreen", {
                                    name: item.name,
                                    username: item.username,
                                    email: item.email,
                                    phone: item.phone,
                                    website: item.website,
                                    companyName: item.company.name,
                                    street: item.address.street,
                                    city: item.address.city,
                                    zipCode: item.address.zipcode,
                                })
                            }
                        >
                            <View>
                                <Contact contact={item} />
                            </View>
                        </TouchableOpacity>
                    }
                />
            )}
        </View>
    );
};
export default Contacts;