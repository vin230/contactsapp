import React from 'react';
import { Text, View } from 'react-native';
import SvaeConatct from './screens/ContactsScreen';
const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center"
      }}>
      {/* <Text>Hello, world!</Text> */}
      <SvaeConatct/>
    </View>
  )
}
export default HelloWorldApp;