import React from 'react'
import { Image, Text, View,StyleSheet } from 'react-native';
// import {WebView} from 'react-native-webview'
import Store from './Store'

export default page = () => {
  return (
    <View>
      {/* <WebView source={{uri:"https://opentdb.com/api_config.php"}} /> */}
      <Image source={{ uri: Store.img }} style={{
        width: 400,
        height: 200,
        // flex: 1,
        // flexDirection: 'column',
        // paddingBottom: 10,
        // margin: 10,
      }} />
      <Text style={styles.text}>
        {Store.title}
      </Text>
      <Text style={styles.text}>
        {Store.des}
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({
  text:{
    backgroundColor:'black',
    margin:15,
    color:'white'
  }
})