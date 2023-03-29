import React from 'react';
import {View, Text } from 'react-native';
import styles from './BookCard.style';

function BookCard ({item}) {
    return(
        <View style ={styles.container}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style ={styles.description}>{item.description}</Text>
            <Text style ={styles.author}>{item.author}</Text>
        </View>
    )
}

export default BookCard;