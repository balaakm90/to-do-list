import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

const LoginScreen = (prop, { navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const uName = 'balaakm90';
        const pwd = 'Bala@16041990';
        if (uName === username && pwd === password) {
            prop.onSuccess();
        }
        else {
            Alert.alert('Login failed', 'Incorrect credentials.')
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };

    const handleForgotPassword = () => {
        Alert.alert('Forgot Password', 'Redirecting to password recovery...');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    forgot: {
        color: '#007BFF',
        textAlign: 'right',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        padding: 15,
        borderRadius: 8,
        flex: 1,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
