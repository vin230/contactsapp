import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const RenderItem = ({ item }) => (
    <TouchableOpacity style={styles.container}>
        <View style={styles.firstCont}>
            <Image style={{ height: 50, width: 50, borderRadius:100 }} source={require("../assets/contact3.png")} />
        </View>
        <View style={styles.secondCont}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.number}</Text>
        </View>
        <View style={styles.thirdCont}>
            <Image style={{ height: 30, width: 30 }} source={require("../assets/arrow.png")} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       // backgroundColor: 'red',
        marginHorizontal:10,
        marginVertical:8,
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    firstCont: {

    },
    secondCont:{
        marginHorizontal:20
    },
    thirdCont:{
        flex:1,
        //backgroundColor:'green',
        //justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    name:{
        fontSize:18,
        color:'black'
    }

})

export default RenderItem;