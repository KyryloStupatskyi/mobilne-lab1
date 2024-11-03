import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from "@/Styles/styles";

const LoggedInScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Logged In!</Text>

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoggedInScreen;