import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { HollowButton } from '../components/HollowButton';
import { ReportCard } from '../components/ReportCard';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ReportsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Sleeping Reports</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ReportCard
        title={"card"}
        metric={"metric"}
        value={1}
      />
      <ReportCard
        title={"card"}
        metric={"metric"}
        value={1}
      />
      <ReportCard
        title={"card"}
        metric={"metric"}
        value={1}
      />
      <Text style={styles.title}>Best Sleep for Tonight</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View
        style={styles.prediction}
      >
        <Text>
          Based on you recent sleeping habits,
        </Text>
        <Text>
          this is how you should sleep tonight.
        </Text>
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HollowButton
          buttontext={"View Recommendation"}
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
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
