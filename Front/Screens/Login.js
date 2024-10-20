import {styles} from "@/Styles/styles";
import {loginStyles} from "@/Styles/LoginStyles";

import React, {useEffect, useState} from 'react'
import {View, Text, TextInput} from 'react-native'

import MyButton from "@/Elements/MyButton";

const LoginScreen = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    async function handleLogin(){

        const jsonData = {
            Email: email,
            Password: password
        }

        try{
            const response = await fetch("localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(jsonData)
            });
            if(response.ok){
                setIsLogged(true)
                const responseData = await response.json();
                if(responseData.status === "success"){
                    navigation.navigate('LoggedIn')
                }
            }
        }
        catch (error){
            setError('Invalid email or password')
            console.error(error);
            if (error.response){
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    }


    return (
        <View style={loginStyles.login_container}>
            <Text style={styles.welcomeText}>Please login!</Text>
            <View style={loginStyles.formContainer}>
                <Text style={styles.text}>Login:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Login"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    defaultValue={email}
                />
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    defaultValue={password}
                />
            </View>

            <MyButton onPress={handleLogin} style={loginStyles.button}>
                <Text style={loginStyles.buttonText}>Login</Text>
            </MyButton>

        </View>
    );
}

export default LoginScreen;