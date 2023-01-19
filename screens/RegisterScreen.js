import { View,  KeyboardAvoidingView, StyleSheet } from 'react-native'
import React, {useState, useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Text } from '@rneui/base'
import { auth } from '../firebase'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login" //Works for ios only
        })
    }, [navigation])


    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"
                })
            })
            .catch((error) => alert(error.message))
    }

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <StatusBar style="light" />
      <Text h3 style={{marginBottom: 50}}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input placeholder="Full Name" autofocus type="text" 
            value={name} 
            onChangeText = {(text) => setName(text)}
        />

        <Input placeholder="Email" type="email" 
                    value={email} 
                    onChangeText = {(text) => setEmail(text)}
                />

        <Input placeholder="Password" type="password" 
                    value={password} 
                    secureTextEntry
                    onChangeText = {(text) => setPassword(text)}
                />

        <Input placeholder="Profile Picture Url (Optional)" type="text" 
                    value={imageUrl} 
                    onChangeText = {(text) => setImageUrl(text)}
                    onSubmitEditing = {register}
                />
      </View>
      <Button containerStyle={styles.button} title="Register" raised onPress={register} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    button:{
        width: 200,
        marginTop: 10,
    },
    inputContainer:{
        width: 300,
    }
})