import React from "react";
import { View, FlatList } from "react-native";
import BookCard from "../../components/BookCard";
import UseFetch from "../../Hook/UseFetch";
import styles from './listScreen.style';

function listScreen ({navigation}) {
    const click = (id) => {
        navigation.navigate ("Details", {id})
    }
    const url="http://10.0.2.2:5049/books"
    const {data} = UseFetch(url)
    const renderBook = ({item}) => <BookCard item={item} click ={ () => click (item.id)}/> 
    console.log(data)
    return (
        <View style = {styles.container}>
            <FlatList data={data}  keyExtractor={item=>item.id}  renderItem ={renderBook} ></FlatList>
        </View>
    )
}

export default listScreen ;

