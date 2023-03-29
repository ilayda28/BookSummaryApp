import React from 'react';
import {View, Text } from 'react-native';
import styles from './BookCard.style';

function BookCard () {
    return(
        <View style ={styles.container}>
            <Text style={styles.name}>Kitabın İsmi:</Text>
            <Text style ={styles.description}>Açıklama:</Text>
            <Text style ={styles.author}>Yazarı:</Text>
        </View>
    )
}

export default BookCard;