import React from 'react';
import { 
    Stack, Box, Heading, 
    Text, Button, Input } from '@chakra-ui/core';

const CartItem = ({ item }) => {
    return (
        <Box p={5} shadow="lg" borderWidth="5px">
        <Heading fontSize="xl">{item.name}</Heading>
        <Text mt={4}>{item.price}</Text>
        <Stack spacing={2}>
          <Text mt={4}>Quantity</Text>
          <Input
          type="number"
          placeholder="1"
          value={item.purchaseQuantity}
        />          <Button width="full" size="xl" borderRadius="8px">Remove</Button>
        </Stack>
        
      </Box>
    )
}

export default CartItem;