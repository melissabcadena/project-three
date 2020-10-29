import React, { useEffect } from 'react';
import { ThemeProvider, 
    Stack, Flex, Box, Heading, Button } from '@chakra-ui/core';
import theme  from '../theme/theme';
import Auth from "../utils/auth";
import CartItem from '../components/CartItem';
import { useStoreContext } from "../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const MyOrder = () => {
    const [state, dispatch] = useStoreContext();
    console.log(state);
    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, drinks: [...cart] })
        };
        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
          sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
      }

      return (
        <ThemeProvider theme={theme}>
            <Box pl={5}>
                <Heading as='h1'>Cart</Heading>
            </Box>
            <Flex justify="center">
                
                    <Stack>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    </Stack>
                
                    <Box pl={3}>
                        <Heading as='h1'>Total</Heading>
                        <Heading as='h2'>${calculateTotal()}</Heading>
                        { Auth.loggedIn() ? 
                        <Button width="full" type="submit" size="xl" py="4" px="4" borderRadius="8px">Checkout
                        </Button> 
                        :       
                        <span>Log in to check out!</span>
                        }
                    </Box>
            </Flex>
            </ThemeProvider>
        );
};


export default MyOrder;