import React from 'react';
import {
    Stack, Box, Heading,
    Text, Button, Input, Image
} from '@chakra-ui/core';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
    const [state, dispatch] = useStoreContext();
    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };
    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                id: item._id
            });
            idbPromise('cart', 'delete', { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
    };

    return (
        <Box p={5} shadow="lg" borderWidth="5px">
            <Image src={item.image} mt="4" />
            <Heading fontSize="xl">{item.name}</Heading>
            <Text mt={4}>{item.price}</Text>
            <Stack spacing={2}>
                <Text mt={4}>Quantity</Text>
                <Input
                    type="number"
                    placeholder="1"
                    value={item.purchaseQuantity}
                    onChange={onChange}
                />
                <Button onClick={removeFromCart} width="full" size="xl" borderRadius="8px">Remove</Button>
            </Stack>

        </Box>
    )
}

export default CartItem;