import React, { useState } from 'react';
import { NativeBaseProvider, Box, Input, Button, Text } from 'native-base';
import { Alert } from 'react-native';

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        setError('');

        if (!username || !email || !password || !confirmPassword) {
            setError('所有欄位都是必填的');
            return;
        }

        if (password !== confirmPassword) {
            setError('密碼和確認密碼不一致');
            return;
        }

        Alert.alert('註冊成功', '您已成功註冊！', [{ text: '確定', onPress: () => navigation.navigate('Login') }]);
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