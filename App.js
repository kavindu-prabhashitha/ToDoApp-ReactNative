import React, { useState } from 'react';
import { View, StyleSheet, FlatList ,Text, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './src/components/header';
import ToDoItem from './src/components/todoitem';
import AddTodo from './src/components/addTodo';
import Sandbox from './src/components/sandbox';
import AppInputText from './src/components/inputTextSandbox';

function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play a game', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) =>{

    if (text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: makeid(5)},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: ()=> console.log('alert closed')}
      ]);
    }
  }


  return (
    //<Sandbox />
    //<AppInputText />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
     {/* header */}
     <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
              <ToDoItem 
              item={item} 
              pressHandler = {pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  console.log(result)
  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    flex:1
  },
  list:{
    flex:1,
    marginTop:10,
  }
  
})

export default App;