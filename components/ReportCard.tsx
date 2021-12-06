import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Dimensions } from 'react-native';

export const ReportCard = (props: { title: String, metric: String, value: number }) => {
    return (
        <View style={styles.reportcardcontainer}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View style={styles.separator} lightColor="white" darkColor="white" />
            <Text style={styles.report}>
                {props.value ? `${props.metric}: ${props.value}` : `Need more data`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    reportcardcontainer: {
        borderRadius: 12,
        color: "white",
        backgroundColor: "transparent",
        width: Dimensions.get('window').width * .8,
        height: Dimensions.get('window').height * .1,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        borderColor: "white",
        borderWidth: 2
    },

    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },

    report: {
        color: "white"
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: '60%',
    }
});