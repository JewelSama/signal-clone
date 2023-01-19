import { SafeAreaView, View, Text } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from '@rneui/base'
import { auth, db } from '../firebase'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import { StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([])

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) => 
            setChats(
                snapshot.docs.map(doc => ({
                    id: snapshot.id,
                    data: doc.data()
                }))
            )
        )

        return unsubscribe;
    })


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

                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AddChat")}>
                    <SimpleLineIcons name="pencil" size={24} color="black" />
                </TouchableOpacity>
            </View>
        )
        })
    })
    // console.log(auth?.currentUser?.photoURL)

    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id,
            chatName
        })
    }

  return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
            {
                chats.map(({id, data: {chatName}}) => (
                    <CustomListItem 
                        key={id} 
                        id={id} 
                        chatName={chatName}
                        enterChat={enterChat}
                    />
                ))
            }

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        height: "100%"
    }
})