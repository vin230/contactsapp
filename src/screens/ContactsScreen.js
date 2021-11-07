import React from "react";
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from "react-native";
import InputField from "../components/InputField";
import RenderItem from "../components/RenderItem";
const DATA = [
    {
        id:1,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:2,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:3,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:4,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:5,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:6,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:7,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:8,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:9,
        name:"vinod desai",
        number:8197717145
    },
    {
        id:10,
        name:"vinod desai",
        number:8197717145
    },
]
export default function ContactScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.firstView}>
               <Image style={{height:25, width:25}} source={require('../assets/dots.png')}/>
            </View>
            <View style={styles.searchCont}>
                <Image style={{height:25, width:25, alignSelf:'center'}} source={require("../assets/search.png")}/>
                <InputField
                placeholder="Search for Contact"
                />
            </View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <RenderItem item={item}/>
                )}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.floatongBtn}>
                <Text style={styles.floatTxt}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingBottom:30,
    },
    firstView:{
       //backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingHorizontal:10
    },
    searchCont:{
        flexDirection:'row',
        paddingHorizontal:20,
        backgroundColor:"#D3D3D3",
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:20
    },
    floatongBtn:{
        position:"absolute",
        bottom:50,
        right:30,
        backgroundColor:"blue",
        height:45, 
        width:45,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:100
    },
    floatTxt:{
        fontSize:20,
        color:"white",
        fontWeight:"bold",
        textAlign:'center'
    }
})