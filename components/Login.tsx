import React, { useState } from 'react';
import { NativeBaseProvider, Box, Input, Button, Text } from 'native-base';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('登入中...', { username, password });
        // 假設登入成功
        navigation.navigate('Homepage'); // 導航到首頁
    };

    return (
        <Box flex={1} justifyContent="center" padding={4}>
            <Text fontSize="2xl" textAlign="center" marginBottom={4}>登入</Text>
            <Input
                placeholder="用戶名"
                value={username}
                onChangeText={setUsername}
                marginBottom={3}
            />
            <Input
                placeholder="密碼"
                type="password"
                value={password}
                onChangeText={setPassword}
                marginBottom={3}
            />
            <Button onPress={handleLogin}>
                登入
            </Button>
            <Button onPress={() => navigation.navigate('Register')} marginTop={3}>
                註冊
            </Button>
        </Box>
    );
};

export default Login;