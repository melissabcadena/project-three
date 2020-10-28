import React from 'react';
import { ThemeProvider, 
    Stack, Flex, Box, Heading, 
    Text, Button, Input } from '@chakra-ui/core';
import theme  from '../theme/theme';

function OrderList({name, price, ...rest}){
    return (
        <Box p={5} shadow="lg" borderWidth="5px" {...rest}>
          <Heading fontSize="xl">{name}</Heading>
          <Text mt={4}>{price}</Text>
          <Stack spacing={2}>
            <Text mt={4}>Quantity</Text>
            <Input variant="outline" placeholder="Enter quantity" size='lg' py="3" ></Input>
            <Button width="full" size="xl" borderRadius="8px">Remove</Button>
          </Stack>
          
        </Box>
    );
}


const MyOrder = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box pl={5}>
                <Heading as='h1'>Cart</Heading>
            </Box>
            <Flex justify="center">
                <Stack>
                    <OrderList name="Coffee" price="$5.00"/>
                    <OrderList name="Espresso" price="$2.00"/>
                    <OrderList name="Water" price="$1.00"/>
                    
                </Stack>
                <Box pl={3}>
                    <Heading as='h1'>Total</Heading>
                    <Heading as='h2'>$12.00</Heading>
                    <Button width="full" type="submit" size="xl" py="4" px="4" borderRadius="8px">Checkout</Button>
                </Box>
                
            </Flex>
        </ThemeProvider>
    );
};


export default MyOrder;