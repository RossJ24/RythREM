import * as React from 'react';
import { useContext, useState } from 'react';
import { Modal, Platform, StyleSheet, TextInput } from 'react-native';
import { AgeController } from '../components/AgeController';
import { HollowButton } from '../components/HollowButton';

import { Text, View } from '../components/Themed';
import { AppContext } from '../contexts/state';

export const SignupModal = () => {
    const {loggedin, setLoggedIn, name, setName, age, setAge } = useContext(AppContext);
    return (
        <Modal
            visible={!loggedin}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Hi!</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

                <Text style={styles.title}>Welcome to RythRem</Text>
                <Text >Please enter the information below.</Text>
                <TextInput
                    value={name.toString()}
                    style={styles.namecontainer}
                    onChangeText={setName}
                    placeholder={"name"}

                />
                <AgeController/>
                <HollowButton
                    buttontext="Submit"
                    callback={() => setLoggedIn(true)}
                />
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        flex: 1,
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
    namecontainer: {
        color: "white",
        margin: 30,
        borderWidth: 2,
        borderTopColor: "white",
        borderBottomColor: "white",
        width: "80%",
        height: "10%",
        textAlign: "center",
    }
});
