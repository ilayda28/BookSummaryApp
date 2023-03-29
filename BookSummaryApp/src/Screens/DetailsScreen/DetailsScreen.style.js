import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container :{
        flex:1,
        backgroundColor : "#e6e6fa",
    }, 
    body :{ 
        borderWidth:1,
        borderColor:'#bcbcbc', 
        marginTop: 50,
    },
    title :{
        fontSize : 20,
        fontWeight :'bold', 
        textAlign :'center',
        color : "#685C79",
        margin :5,

    },
    description:{
        fontSize :15,
        margin :8,
        fontStyle: 'italic',
        color: 'black',
    },
    summary:{
        fontSize :18,
        margin :8,
        color: 'black',
    },
    author :{
        fontWeight : 'bold',
        textAlign : 'right',
        margin :8,
    },
})