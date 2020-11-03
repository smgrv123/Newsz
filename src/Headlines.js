import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TouchableNativeFeedback, Linking, Button } from 'react-native';
import Axios from 'axios';
import Store from './Store';
import { WebView } from 'react-native-webview'


export default Headlines = (props) => {
    const [News, setNews] = useState([]);
    useEffect(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?country='+Store.url+'&category=business&apiKey=2719918152a7463492d900316ee90bf1').then(res => {
            var temp = [];
            res.data.articles.forEach(nwz => {
                temp.push(nwz);
            })
            setNews(temp);
        })
    }, [])
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('Settingscreen')
                }}
            >
                <Text
                    style={{
                        fontSize: 20
                    }}
                >
                    change country
                </Text>
            </TouchableOpacity>
            <FlatList
                data={News}
                renderItem={({ item }) => (
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple("grey")}
                        onPress={() => {
                            props.navigation.navigate("page")
                            Store.img=item.urlToImage
                            Store.des=item.description
                            Store.title=item.title
                            Store.art=item.url
                        }}
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View>
                            {
                                item.urlToImage == "" ? null : item.urlToImage == null ? null :
                                    <Image source={{ uri: item.urlToImage }} style={{
                                        width: 400,
                                        height: 200,
                                        flex: 1,
                                        flexDirection: 'column',
                                        paddingBottom: 10,
                                        margin: 10,
                                    }} />
                            }
                            <Text>
                                {item.title == "" ? null : item.title == null ? null : item.title}
                            </Text>
                            {/* <Text>
                                {item.author == "" ? null : item.author == null ? null : item.author}
                            </Text> */}
                        </View>
                    </TouchableNativeFeedback>
                )}
                keyExtractor={(item) => (item.title)}
            />
        </View>
    )
}