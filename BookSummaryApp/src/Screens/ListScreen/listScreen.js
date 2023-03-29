import React from "react";
import { View, } from "react-native";
import BookCard from "../../components/BookCard";
import styles from './listScreen.style';

function listScreen () {
    return (
        <View style = {styles.container}>
            <BookCard></BookCard>
        </View>
    )
}

export default listScreen ;

