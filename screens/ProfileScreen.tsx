import * as React from 'react';
import { useContext, useState } from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AgeController } from '../components/AgeController';

import EditScreenInfo from '../components/EditScreenInfo';
import { HollowButton } from '../components/HollowButton';
import { Text, View } from '../components/Themed';
import { AppContext } from '../contexts/state';

export default function ProfileScreen() {
  const {name, setName, setSleepEntries } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {name}!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        value={name}
        style={styles.namecontainer}
        onChangeText={setName}
      />
      <AgeController/>
      <HollowButton
        buttontext="Clear Sleep History"
        callback={() => setSleepEntries([])}
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
    borderTopColor: "white",
    borderBottomColor: "white",
    width: "80%",
    height: "10%",
    textAlign: "center",
  }
});
