import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { AppState } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './contexts/state';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { SignupModal } from './screens/SignupModal';
import { APP_STATE, SleepEntry } from './types';



export default function App() {
  const isLoadingComplete = useCachedResources();
  
  const { getItem, setItem, removeItem } = useAsyncStorage('@APPSTATE');
  let stateItem;
  useEffect( () => {
    (async () => {
      stateItem = await getItem();
    })()
    
  }, [])
  let savedState: APP_STATE = stateItem ? JSON.parse(stateItem) : null;
  const colorScheme = useColorScheme();
  const [loggedin, setLoggedIn] = useState(savedState?.loggedin ?? false);
  const [name, setName] = useState(savedState?.name ?? "");
  const [age, setAge] = useState(savedState?.age ?? 21);
  const [sleepEntries, setSleepEntries] = useState(savedState?.sleepEntries ?? Array<SleepEntry>());
  AppState.addEventListener('change', async state => {
    if (state === 'background') {
        await setItem(JSON.stringify({
          loggedin: loggedin,
          name: name,
          age: age,
          sleepEntries: sleepEntries,
      }));
    } else if (state === 'inactive') {
      await setItem(JSON.stringify({
        loggedin: loggedin,
        name: name,
        age: age,
        sleepEntries: sleepEntries,
    }));
    }
  });
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
