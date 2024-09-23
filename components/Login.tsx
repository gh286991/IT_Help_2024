import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 在這裡處理登入邏輯
        console.log('登入中...', { username, password });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>登入</Text>
            <TextInput
                style={styles.input}
                placeholder="用戶名"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="密碼"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="登入" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Login;