import React from "react";
import { View, Text } from "react-native";
import UseFetch from "../../Hook/UseFetch";
import styles from "./DetailsScreen.style"

function DetailsScreen ({route}) {
    const {id} = route.params 
    const {data} = UseFetch("http://10.0.2.2:5049/books/" + id)
    if (!data) {
        return <Text>Loading...</Text>;
      }
    console.log (data) 
    return (
        <View style ={styles.container} >
            <Text style = {styles.title}>{data.title}</Text>
            <Text style ={styles.description}>{data.description}</Text>
            <View style ={styles.body}>
                <Text style ={styles.summary}> {data.summary}</Text>
                <Text style ={ styles.author}>Author : {data.author}</Text>
            </View> 
        </View> 
        
    )
}

export default DetailsScreen ; 