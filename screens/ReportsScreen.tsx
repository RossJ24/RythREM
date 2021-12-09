import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { HollowButton } from '../components/HollowButton';
import { ReportCard } from '../components/ReportCard';
import { Text, View } from '../components/Themed';
import { AppContext } from '../contexts/state';
import { getAccumulatedSleepDebt, getBestBedtime, getBestDuration, getBestWaketime } from '../ml/buckets';
import { RootTabScreenProps } from '../types';

export default function ReportsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const {sleepEntries, age } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Sleeping Reports</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ReportCard
        title={"Best Sleep Duration"}
        metric={"Hours (Approximate)"}
        value={getBestDuration(sleepEntries)}
      />
      <ReportCard
        title={"Best Bedtime"}
        metric={"Time (Approximate)"}
        value={getBestBedtime(sleepEntries)}
      />
      <ReportCard
        title={"Best Waketime"}
        metric={"Time (Approximate)"}
        value={getBestWaketime(sleepEntries)}
      />
      <Text style={styles.title}>Best Sleep for Tonight</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Text>
          Based on you recent sleeping habits,
        </Text>
        <Text>
          this is how you should sleep tonight.
        </Text>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ReportCard
        title={"Accumulated Sleep Debt"}
        metric={"Time (Approximate)"}
        value={getAccumulatedSleepDebt(sleepEntries, age)}
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
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
