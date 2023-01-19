import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { Button, Input,  Image} from '@rneui/base'
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase'

const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add new Chat",
        })
    }, [navigation])

    const createChat = () => {
        db
            .collection("chats")
            .add({
                chatName: input,
            })
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => alert(error))
    }


  return (
    <View style={styles.container}>
      <Input 
      placeholder="Enter a chat name" 
      value={input} 
      onChangeText={(text) => setInput(text)} 
      leftIcon = {
        <Icon name="wechat" type="antdesign" size={24} color="black" />
      }
      />
      <Button onPress={createChat} title="Create new Chat" />
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    }
})