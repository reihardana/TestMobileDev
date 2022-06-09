import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#333333',
        shadowOffset: {
            width: 1, height: 1
        },shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 6,
        alignItems: 'center',
        justifyContent:'center'
    },
    cardContent: {
        justifyContent: 'center',
        marginHorizontal: 18,
        marginVertical: 15,
        alignItems: 'center',
    }
})