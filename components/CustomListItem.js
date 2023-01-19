import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/base'
import React from 'react'

const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
        <Avatar 
            rounded
            source={{
                uri: "https://logos-download.com/wp-content/uploads/2020/06/Signal_Logo.png"
            }}
        />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "800" }}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle  numberOfLines={1} ellipsizeMode="tail">
            ABC
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})