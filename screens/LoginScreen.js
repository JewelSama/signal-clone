import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native'
import React, {useState} from 'react'
import { Button, Input,  Image} from '@rneui/base'
import { StatusBar } from 'expo-status-bar'
import Logo from "../assets/icon.png"


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const signIn =() => {

    }

  return (
    <KeyboardAvoidingView behaviour = "padding" style={styles.container}>
        <StatusBar style="light" />

        <Image 
            // source={Logo}
            source ={{
                uri: "https://logos-download.com/wp-content/uploads/2020/06/Signal_Logo.png"
                // uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASignal-Logo.svg&psig=AOvVaw19IXXIhmOWYldBtSwgpIjf&ust=1674168764506000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMixmeaa0vwCFQAAAAAdAAAAABAE"
            }}
            style={{width: 150, height: 150, borderRadius: 20}}
        />
        <View style={styles.inputContainer}>
            <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} autoFocus type="email" />
            <Input placeholder="Password"
             value={password} onChangeText={(text) => setPassword(text)}
             secureTextEntry type="password" />
        </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type="outline" title="Register" onPress={() => navigation.navigate("Register")} />
            <View style={{height: 40}}></View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor:"white"
    },
    inputContainer:{
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})