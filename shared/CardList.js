import React from "react";
import { StyleSheet, View } from "react-native";

export default function CardList(props) {
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
        justifyContent:'center'
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 19,
        marginVertical: 15,
    }
})