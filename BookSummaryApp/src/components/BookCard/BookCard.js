import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import styles from './BookCard.style';

function BookCard ({item, click}) {
    return(
        <TouchableOpacity onPress={click}>
        <View style ={styles.container}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style ={styles.description}>{item.description}</Text>
            <Text style ={styles.author}>{item.author}</Text>
        </View>
        </TouchableOpacity>
    )
} 

export default BookCard;