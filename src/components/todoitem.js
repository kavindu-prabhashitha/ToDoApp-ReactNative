import React from 'react';
import {StyleSheet ,Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ToDoItem({item, pressHandler}){
    return (
        <TouchableOpacity >
            <View style={styles.item}>
            <Icon name="delete" size={15} onPress={()=> pressHandler(item.key)}/>
            <Text style={styles.itemText}>
                {item.text}
            </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },
    itemText : {
        marginLeft: 10
    }
})