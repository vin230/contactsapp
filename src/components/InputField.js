import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";


export default function InputField(props) {
    return (
        <View>
            <TextInput
                placeholderTextColor="grey"
                placeholder={props.placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})