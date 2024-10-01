import React from 'react';
import { Box, Button, VStack, HStack } from 'native-base';

const Homepage = ({ navigation }) => {
    return (
        <Box flex={1} padding={4} justifyContent="flex-start" alignItems="center">
            <VStack space={4} width="100%">
                <HStack space={4} width="100%" justifyContent="space-between">
                    <Button width="48%" height="60px" onPress={() => navigation.navigate('CreateReport')}>
                        Create a new report
                    </Button>
                    <Button width="48%" height="60px" onPress={() => {/* Handle report list */}}>
                        Report list
                    </Button>
                </HStack>
                <HStack space={4} width="100%" justifyContent="space-between">
                    <Button width="48%" height="60px" onPress={() => {/* Handle settings */}}>
                        Settings
                    </Button>
                    <Button width="48%" height="60px" onPress={() => {/* Handle help & support */}}>
                        Help & Support
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Homepage;