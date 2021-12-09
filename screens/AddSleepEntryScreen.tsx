import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { DatePickerOptions } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useContext, useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { HollowButton } from '../components/HollowButton';
import { AppContext } from '../contexts/state';

import { SleepEntry } from '../types';

export default function AddSleepEntryScreen() {

  const [sleepQuality, setsleepQuality] = useState(0);
  const [sleepTime, setSleepTime] = useState(new Date());
  const [wakeTime, setWakeTime] = useState(new Date());
  const {sleepEntries, setSleepEntries } = useContext(AppContext);
  return (
    <View style={styles.container}>

      <Text style={styles.title}>When did you go to sleep?</Text>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="rgba(0,0,0,0.05)">
        <DateTimePicker
          display={"spinner"}
          mode={"time"}
          value={sleepTime}
          minuteInterval={30}
          onChange={(event:any, date?: any) => setSleepTime(date)}
        />
      </View>
      <Text style={styles.title}>When did you wake up?</Text>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="rgba(0,0,0,0.05)">
        <DateTimePicker
          display={"spinner"}
          mode={"time"}
          value={wakeTime}
          minuteInterval={30}
          onChange={(event:any, date:any) => setWakeTime(date)}
        />
      </View>
      <Text>
        On a scale of 1 to 10, how good was your sleep?
      </Text>
      <Text>{sleepQuality}</Text>
      <Slider
        value={sleepQuality}
        onValueChange={(value) => setsleepQuality(parseFloat(value.toString()))}
        maximumValue={10}
        minimumValue={0}
        minimumTrackTintColor={"white"}
        maximumTrackTintColor="white"
        step={1}
        trackStyle={{ borderColor: "white", width: 200 }}
      />
      <HollowButton
        buttontext={"Submit"}
        callback={() => setSleepEntries(sleepEntries.concat([{quality: sleepQuality, wakeTime: wakeTime, sleepTime: sleepTime} as SleepEntry]))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    width: 300
  },
});
