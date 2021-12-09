import * as React from 'react';
import { useContext, useState } from 'react';
import { Pressable } from 'react-native';
import { View } from './Themed';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { AppContext } from '../contexts/state';


export const AgeController = () => {
    const {age, setAge } = useContext(AppContext);
    const [decrementPressed, setDecrementPressed] = useState(false);
    const [incrementPressed, setIncrementPressed] = useState(false)
    return (
        <View style={styles.container}>
            <Pressable
                onPressIn={() => setDecrementPressed(true)}
                onPressOut={() => setDecrementPressed(false)}
                onPress={() => setAge(age - 1)}
                style={({ pressed }) => pressed ? styles.arithbuttonp : styles.arithbuttonu}
            >
                <Text style={decrementPressed ? styles.iconp : styles.iconu}> - </Text>
            </Pressable>
            <Text style={styles.age}>
                {age.toString()}
            </Text>
            <Pressable
                onPressIn={() => setIncrementPressed(true)}
                onPressOut={() => setIncrementPressed(false)}
                onPress={() => setAge(age + 1)}
                style={({ pressed }) => pressed ? styles.arithbuttonp : styles.arithbuttonu}
            >
                <Text style={incrementPressed ? styles.iconp : styles.iconu}> + </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        color: "white",
    },
    iconu: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconp: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
    },
    age: {
        color: "white",
        fontWeight: 'bold',
    },
    arithbuttonu: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "white",
        color: "white",
        backgroundColor: "transparent",
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        margin: 30,
    },
    arithbuttonp: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "white",
        color: "black",
        backgroundColor: "white",
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        margin: 30,
    }
});