import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { TouchableOpacity, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Store from './Store';
import RadioForm from 'react-native-simple-radio-button'


export default SettingScreen = (props) => {

    var options = [
        { value: "au", label: "aus" },
        { value: "ca", label: "canada" },
        { value: "in", label: "India" },
    ]

    return (
        <View>
            <RadioForm
                radio_props={options}
                onPress={(val) => {
                    Store.url = val
                }}
            />
            <TouchableOpacity
                // placeholder='change'
                onPress={() => {
                    props.navigation.navigate("Headlines")
                }}
            >
                <Text>
                    rinos
                </Text>
            </TouchableOpacity>
            {/* <FlatList
                data={[
                    {
                        id: '1',
                        name: 'Austalia',
                        url: 'https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '2',
                        name: 'Canada',
                        url: 'https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '3',
                        name: 'India',
                        url: 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '4',
                        name: 'Malaysia',
                        url: 'https://newsapi.org/v2/top-headlines?country=my&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '5',
                        name: 'New Zealand',
                        url: 'https://newsapi.org/v2/top-headlines?country=nz&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '6',
                        name: 'Singapore',
                        url: 'https://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '7',
                        name: 'United Kingdom',
                        url: 'https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    },
                    {
                        id: '8',
                        name: 'United States',
                        url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2719918152a7463492d900316ee90bf1'
                    }
                ]}
                renderItem={({ item }) => (
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple("grey")}
                        onPress={() => {
                            Store.url = item.url
                            props.navigation.navigate("Headlines")
                            console.log(Store.url)
                        }}
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableNativeFeedback>
                )}
                keyExtractor={(item) => (item.id)}
            /> */}
        </View>

    )
}