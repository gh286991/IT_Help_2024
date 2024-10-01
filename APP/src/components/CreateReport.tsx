import React, { useState } from 'react';
import { Box, Input, Button, Text, Alert } from 'native-base';

const CreateReport = ({ navigation }) => {
    const [reportTitle, setReportTitle] = useState('');
    const [reportContent, setReportContent] = useState('');

    const handleSubmit = () => {
        if (!reportTitle || !reportContent) {
            Alert.alert('錯誤', '所有欄位都是必填的');
            return;
        }

        // 在這裡處理報告提交的邏輯
        Alert.alert('成功', '報告已提交！', [{ text: '確定', onPress: () => navigation.navigate('Homepage') }]);
    };

    return (
        <Box flex={1} padding={4} justifyContent="center">
            <Text fontSize="2xl" textAlign="center" marginBottom={4}>新增報告</Text>
            <Input
                placeholder="報告標題"
                value={reportTitle}
                onChangeText={setReportTitle}
                marginBottom={3}
            />
            <Input
                placeholder="報告內容"
                value={reportContent}
                onChangeText={setReportContent}
                marginBottom={3}
                multiline
                numberOfLines={4}
            />
            <Button onPress={handleSubmit}>
                提交報告
            </Button>
            <Button onPress={() => navigation.navigate('Homepage')} marginTop={3}>
                返回首頁
            </Button>
        </Box>
    );
};

export default CreateReport;