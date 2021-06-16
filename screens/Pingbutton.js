import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function App() {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function renderEncouragingText() {
    if (count >= 10) {
      return "Keep going!!!!"
    }
  }

  return (
    <View style={styles.container}>

      <CounterText color="blue" fontSize={40}>{count}</CounterText>
      <CounterText color="red" fontSize={30}>{count}</CounterText>
      <CounterText color="green" fontSize={20}>{count}</CounterText>
      
      <TouchableOpacity style={styles.buttonContainer} onPress={increment}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <Text>{renderEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
    margin: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }

});
