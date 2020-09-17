import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState(' ');
  const [age, setAge] = useState(0);
  const [birthdays, setBirthdays] = useState([]);

  const clickHandler = () => {
    setAge(age +1);
    setBirthdays(
      birthdays.concat({age: (age + 1).toString()})
    );
  }

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
	  style={styles.input} 
	  placeholder="Name"
	  onChangeText={(val) => setName(val)}/>
      <Text>{name} is {age} years old.</Text>
      <View>
	  <Button title='Birthday' onPress={clickHandler} />
      </View>
      <FlatList
	  data={birthdays}
	  renderItem={({ item }) => (
	    <Text>{ item.age }</Text>
	  )}
	  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
