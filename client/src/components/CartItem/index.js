import React from 'react';
// import {
//     Stack, Box, Heading,
//     Text, Button, Input, Image
// } from '@chakra-ui/core';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Card, CardTitle, CardText, CardBody, CardImg, Row, Col } from 'reactstrap';

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
       
        <Card p={5} shadow="lg" borderWidth="5px">
           
            <CardImg src={item.image} mt="4" />
            <CardBody p="4">
            <CardTitle >{item.name}</CardTitle>
            <CardText mt={4}>$ {item.price}</CardText>
            <CardText mt={4}>Size: {item.customize.size}</CardText>
            <CardText mt={4}>Flavor: {item.customize.flavor}</CardText>
            <CardText mt={4}>Milk: {item.customize.milk}</CardText>
            
           
                <CardText mt={4}>Quantity</CardText>
                <Input
                    type="number"
                    placeholder="1"
                    value={item.purchaseQuantity}
                    onChange={onChange}
                />
                <br></br>
                <Button onClick={removeFromCart} width="full" size="xl" borderRadius="8px">Remove</Button>
           
            </CardBody>
            

        </Card>
       

    )
}

export default CartItem;