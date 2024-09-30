import React, { useState } from 'react';
import { NativeBaseProvider, Box, Input, Button, Text } from 'native-base';
import { Alert } from 'react-native';

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [account, setAccount] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        setError('');

        if (!username || !email || !password || !confirmPassword || !account) {
            setError('所有欄位都是必填的');
            return;
        }

        if (password !== confirmPassword) {
            setError('密碼和確認密碼不一致');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    account,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('註冊成功', '您已成功註冊！', [{ text: '確定', onPress: () => navigation.navigate('Login') }]);
            } else {
                setError(data.message || '註冊失敗，請稍後再試。');
            }
        } catch (error) {
            setError('註冊時發生錯誤，請檢查您的網路連接。');
        }
    };

    return (
            <Box flex={1} justifyContent="center" padding={4}>
                <Text fontSize="2xl" textAlign="center" marginBottom={4}>註冊</Text>
                {error ? <Text color="red.500" textAlign="center" marginBottom={3}>{error}</Text> : null}
                <Input
                    placeholder="使用者名字"
                    value={username}
                    onChangeText={setUsername}
                    marginBottom={3}
                />
                <Input
                    placeholder="信箱"
                    value={email}
                    onChangeText={setEmail}
                    marginBottom={3}
                />
                <Input
                    placeholder="密碼"
                    type="password"
                    value={password}
                    onChangeText={setPassword}
                    marginBottom={3}
                />
                <Input
                    placeholder="確認密碼"
                    type="password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    marginBottom={3}
                />
                <Input
                    placeholder="帳號"
                    value={account}
                    onChangeText={setAccount}
                    marginBottom={3}
                />
                <Button onPress={handleRegister}>
                    註冊
                </Button>
                <Button onPress={() => navigation.navigate('Login')} marginTop={3}>
                    返回登入
                </Button>
            </Box>
    );
};

export default Register;
