import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '@/Styles/styles';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async () => {
        const jsonData = {
            email: email,
            password: password
        }
        try {
            //const response = await fetch("http://172.20.10.7:3000/api/login", {
            const response = await fetch("http://192.168.0.171:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonData)
            });
            if (response.ok) {
                setIsLogged(true)
                const responseData = await response.json();
                navigation.navigate('LoggedIn');
                /*
                if(responseData.status === "success"){
                    navigation.navigate('LoggedIn')
                }
                 */
                console.log(responseData);
            }
        } catch (error) {
            setError('Invalid email or password')
            console.error(error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;