import React from "react";
import { View, FlatList } from "react-native";
import BookCard from "../../components/BookCard";
import styles from './listScreen.style';

function listScreen () {
    return (
        <View style = {styles.container}>
            <FlatList ></FlatList>
        </View>
    )
}

export default listScreen ;

