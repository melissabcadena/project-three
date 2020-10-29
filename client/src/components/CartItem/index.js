import React from 'react';
import { 
    Stack, Box, Heading, 
    Text, Button, Input } from '@chakra-ui/core';
import { REMOVE_FROM_CART } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';

const CartItem = ({ item }) => {
    const [state, dispatch] = useStoreContext();
    const removeFromCart = () => {
        dispatch({ 
            type: REMOVE_FROM_CART,
            _id: item._id
        });
    };

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
        />          
        <Button onClick={removeFromCart} width="full" size="xl" borderRadius="8px">Remove</Button>
        </Stack>
        
      </Box>
    )
}

export default CartItem;