import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './contexts/state';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { SignupModal } from './screens/SignupModal';
import { SleepEntry } from './types';



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loggedin, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);
  const [sleepEntries, setSleepEntries] = useState(Array<SleepEntry>());
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{loggedin, setLoggedIn, name, setName, age, setAge, sleepEntries, setSleepEntries }}
        >
        <SignupModal/>
        <Navigation colorScheme={colorScheme}/>
        <StatusBar />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
