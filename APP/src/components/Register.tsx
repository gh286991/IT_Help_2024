import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Input, Button, Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearError } from '../store/registerSlice';
import { Alert } from 'react-native';

const Register = ({ navigation }) => {
    const dispatch = useDispatch();
    const { error, success } = useSelector((state) => state.register);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [account, setAccount] = useState('');

    const handleRegister = () => {
        if (!username || !email || !password || !confirmPassword || !account) {
            Alert.alert('所有欄位都是必填的');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('密碼和確認密碼不一致');
            return;
        }

        dispatch(registerUser({ username, email, password, account }));
    };

    useEffect(() => {
        if (error) {
            Alert.alert('註冊失敗', error, [{ text: '確定', onPress: () => dispatch(clearError()) }]);
        }
        if (success) {
            Alert.alert('註冊成功', '您已成功註冊！', [
                { text: '確定', onPress: () => {
                    dispatch(clearError()); // 清除錯誤
                    navigation.navigate('Login');
                }}
            ]);
        }
    }, [error, success, dispatch, navigation]);

    useEffect(() => {
        // 當組件卸載時，重置註冊狀態
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

    return (
        <Box flex={1} justifyContent="center" padding={4}>
            <Text fontSize="2xl" textAlign="center" marginBottom={4}>註冊</Text>
            <Input placeholder="使用者名字" value={username} onChangeText={setUsername} marginBottom={3} />
            <Input placeholder="信箱" value={email} onChangeText={setEmail} marginBottom={3} />
            <Input placeholder="密碼" type="password" value={password} onChangeText={setPassword} marginBottom={3} />
            <Input placeholder="確認密碼" type="password" value={confirmPassword} onChangeText={setConfirmPassword} marginBottom={3} />
            <Input placeholder="帳號" value={account} onChangeText={setAccount} marginBottom={3} />
            <Button onPress={handleRegister}>註冊</Button>
            <Button onPress={() => navigation.navigate('Login')} marginTop={3}>返回登入</Button>
        </Box>
    );
};

export default Register;