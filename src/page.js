import React from 'react'
import { Image, Text, View,StyleSheet, TouchableOpacity, Linking } from 'react-native';
// import {WebView} from 'react-native-webview'
import Store from './Store'

export default page = () => {
  return (
    <View>
      <Image source={{ uri: Store.img }} style={{
        width: 400,
        height: 200,
      }} />
      <Text style={styles.text}>
        {Store.title}
      </Text>
      <Text style={styles.text}>
        {Store.des}
      </Text>
      <TouchableOpacity
      onPress={()=>{
        Linking.openURL(Store.art)
      }}
      >
        <Text>
          Open Article
        </Text>
      </TouchableOpacity>
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