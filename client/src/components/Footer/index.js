import React from 'react';
import {Flex, Text} from '@chakra-ui/core';

function Footer() {
    return(
        <Flex
        bg="gray.1"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                <Text p={3} color="white.2" fontSize="xl">
                    Made with React
                </Text>
            </Flex>
        </Flex>
    )
}

export default Footer;