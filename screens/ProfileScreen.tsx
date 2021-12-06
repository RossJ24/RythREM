import * as React from 'react';
import { useState } from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { HollowButton } from '../components/HollowButton';
import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  const [name, setName] = useState("Name");
  const [age, setAge] = useState(21);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, Name!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        value={name}
        style={styles.namecontainer}
        onChangeText={setName}
      />
      <TextInput
        value={age.toString()}
        style={styles.namecontainer}
        onChangeText={setName}
      />
      <HollowButton
        buttontext="Clear Sleep History"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  namecontainer:{
    color: "white",
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    width: "80%",
    height: "10%",
    textAlign: "center",
    borderRadius: 12,
  }
});
