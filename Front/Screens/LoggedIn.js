import React from 'react';
import {View, Text} from 'react-native';
import {styles} from "@/Styles/styles";
import MyButton from "../Elements/MyButton";

const OpeningScreen = ({navigation}) => {
    return(
        <View style={styles.defaultScreen}>
            <Text style={styles.welcomeText}>Logged IN!</Text>
            <MyButton onPress={() => {navigation.navigate('Login')}} style={styles.helloButton}> START </MyButton>
        </View>
    );
}

export default OpeningScreen;