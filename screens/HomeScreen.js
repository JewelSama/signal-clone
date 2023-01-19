import { SafeAreaView, View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from '@rneui/base'
import { auth } from '../firebase'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"

const HomeScreen = ({navigation}) => {

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTitleStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style ={{marginLeft: 20}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
                        <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} style={{height: 50, width: 50}} />
                    </TouchableOpacity>
                </View>
        ),
        headerRight: () => (
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
                marginRight: 20,
            }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <AntDesign name="camerao" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <SimpleLineIcons name="pencil" size={24} color="black" />
                </TouchableOpacity>
            </View>
        )
        })
    })
    // console.log(auth?.currentUser?.photoURL)
  return (
    <SafeAreaView>
        <ScrollView>
            <CustomListItem />

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen