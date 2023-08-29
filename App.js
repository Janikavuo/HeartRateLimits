import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState(0);
  const [upper,setUpper] = useState(0);

  function calculate() {
    setLower(((220 - age) * 0.65));
    setUpper(((220 - age) * 0.85));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)}
      keyboardType='decimal-pad' 
      placeholder='Enter your age' />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{lower.toFixed(0)} - {upper.toFixed(0)} bpm</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 200,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 8,
  },
});
