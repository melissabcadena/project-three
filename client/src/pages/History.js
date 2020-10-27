import React from 'react';
import { ThemeProvider, Stack, Flex, Box, Heading, Text } from '@chakra-ui/core';
import theme  from '../theme/theme';


function OrderList({name, price, ...rest}){
    return (
        <Box p={5} shadow="lg" borderWidth="5px" {...rest}>
          <Heading fontSize="xl">{name}</Heading>
          <Text mt={4}>{price}</Text>
        </Box>
    );
}



const History = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box pl={3}>
                <Heading as='h1'>Order History</Heading>
            </Box>
            <Flex>
                <Stack>
                    <OrderList name="Coffee" price="$5.00"/>
                    <OrderList name="Espresso" price="$2.00"/>
                    <OrderList name="Water" price="$1.00"/>
                </Stack>
            </Flex>
        </ThemeProvider>
    );
};


export default History;