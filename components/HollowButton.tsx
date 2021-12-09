import * as React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from "react-native"

export const HollowButton = (props: { buttontext: String, callback?:CallableFunction }) => {
    const [parentPressed, setparentPressed] = useState(false);
    return (
        <Pressable
            style={({ pressed }) => pressed ? styles.pressedbutton : styles.unpressedbutton}
            onPressIn={() => setparentPressed(true)}
            onPressOut={() => setparentPressed(false)}
            onPress={() => props.callback?.()}
        >
            <Text
                style={ parentPressed ? styles.pressedbuttontext : styles.unpressedbuttontext}
            >
            {props.buttontext}
        </Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    unpressedbutton: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "white",
        color: "white",
        backgroundColor: "transparent",
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    unpressedbuttontext: {
        color: "white",
        alignSelf: 'center'
    },
    pressedbutton: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "white",
        color: "white",
        backgroundColor: "white",
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    pressedbuttontext: {
        color: "black",
        alignSelf: 'center'
    }

})