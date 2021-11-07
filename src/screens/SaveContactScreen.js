import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import InputField from '../components/InputField';
const SaveConatct = () => {
    return (
        <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset="100"
        style={styles.container}>
            <View style={styles.topCont}>
                <TouchableOpacity>
                    <Image style={styles.cancelImg} source={require('../assets/cancel.png')} />
                </TouchableOpacity>
                <Text style={styles.svaeTxt}>Save Contact</Text>
                <TouchableOpacity>
                    <Image style={styles.saveImg} source={require('../assets/save.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.secondCont}>
                <View style={styles.contactIconSpace}>
                    <Image style={{ height: 50, width: 50 }} source={require("../assets/contact2.png")} />
                    <TouchableOpacity style={styles.editIconSpace}>
                        <Image style={{height: 30,width: 30, borderRadius:100}} source={require("../assets/edit.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.thirdCont}>
                <InputField
                    placeholder="Name"
                />
                <View style={styles.line} />
                <InputField
                    placeholder="Sur Name"
                />
                <View style={styles.line} />
                <InputField
                    placeholder="Nick Name"
                />
            </View>

            <View style={styles.fourthCont}>
                <Text style={styles.money}>Money:</Text>
                <InputField  
                placeholder=" "
                />
            </View>

            <View style={styles.fourthCont}>
                <Text style={styles.money}>Work:</Text>
                <InputField
                placeholder=" "
                 />
            </View>

            <View style={styles.thirdCont}>
                <InputField
                    placeholder="Company"
                />
                <View style={styles.line} />
                <InputField
                    placeholder="Title"
                />
            </View>
            <TouchableOpacity style={styles.anotherFieldButton}>
                <Text style={{ color: 'blue', fontSize: 16 }}>Add another field</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        //alignItems: "center".
        backgroundColor: 'white'
    },
    topCont: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        //backgroundColor: "red",
    },
    saveImg: {
        height: 35,
        width: 35,
    },
    cancelImg: {
        height: 35,
        width: 35
    },
    svaeTxt: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    secondCont: {
        //backgroundColor: 'green',
        height: 200,
        justifyContent: 'center'
    },
    contactIconSpace: {
        height: 100,
        width: 100,
        backgroundColor: 'grey',
        alignSelf: 'center',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editIconSpace: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 100
    },
    thirdCont: {
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        marginHorizontal: 15,
        paddingHorizontal: 20,
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    fourthCont: {
        flexDirection: "row",
        //justifyContent:'center',
        alignItems: 'center',
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    money: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    },
    anotherFieldButton: {
        marginHorizontal: 20,
        marginVertical: 10
    }
})

export default SaveConatct;