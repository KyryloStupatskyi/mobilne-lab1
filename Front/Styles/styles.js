import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    defaultScreen:{
        backgroundColor: 'white',
        flex: 5,
        paddingLeft: 30
    },
    button: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: -32,
        padding: 10,
        backgroundColor: '#4da6ff',
        borderRadius: 5,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    },
    welcomeText: {
        position: 'relative',
        top: -24,
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    welcomeImage: {
        width: '80%',
        height: '50%',
        padding: 10,
        borderRadius: 5,
    }
})