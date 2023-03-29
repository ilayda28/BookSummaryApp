import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
    container :{
        backgroundColor : '#e6e6fa',
        borderColor : '#bdbdbd',
        borderWidth :1,
        borderRadius :10,
    },
    name :{
        fontSize: 18,
        fontWeight:'bold',
        color:'black',
        paddingLeft:10,
        paddingBottom:5,
        textAlign : 'center'
    },
    author :{
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
        paddingLeft:10,
        paddingBottom:10,
        textAlign : 'right'
    },

    description :{
        fontSize: 15,
        fontWeight:'400',
        color:'black',
        paddingLeft:10,
        paddingBottom:5,
    }
})