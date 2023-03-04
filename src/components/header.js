import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height:80,
        padding:20,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize:20
    }
});
