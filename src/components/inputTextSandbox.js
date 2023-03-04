import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppInputText = () => {
  const [text, setText] = useState("");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(value) => setText(value)}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setText("")}
          >
            <Icon name="delete" size={15} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  parent: {
    marginLeft: 25,
    marginRight: 25,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    height: 40,
    width: "90%",
  },
  closeButton: {
    height: 16,
    width: 16,
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});

export default AppInputText;