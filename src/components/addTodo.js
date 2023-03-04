import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <View style={styles.inputParent}>
        <TextInput
          placeholder="new todo..."
          style={styles.input}
          value={text}
          onChange={changeHandler}
          onChangeText={val => changeHandler(val)}></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          submitHandler(text);
          setText('')
        }}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    backgroundColor: 'coral',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
