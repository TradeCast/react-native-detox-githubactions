import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const styles = {
    container: {
        flex: 1,
        marginTop: 25,
        padding: 20,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 30,
        color: 'black',
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        fontSize: 15,
        marginVertical: 20,
    }
}

/**
*
*/
export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(undefined);

    function onSubmit() {
        setError(undefined);

        if (!username) {
            setError("Username is a required value")
        } else if (!password) {
            setError("Password is a required value")
        } else {
            alert("Login complete!")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} onChangeText={text => setUsername(text)} value={username} placeholder="John Doe" testID="LoginFormUsername"/>

            <Text style={styles.label}>password</Text>
            <TextInput style={styles.input} onChangeText={text => setPassword(text)} value={password} placeholder="•••••••" secureTextEntry testID="LoginFormPassword"/>

            {error ? (
                <Text testID="LoginFormError" style={styles.error}>{error}</Text>
            ) : null}

            <Button onPress={onSubmit} title="Submit form" testID="LoginFormSubmitButton"/>
        </View>
    );
}