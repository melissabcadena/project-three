import React from 'react';
import { Box, Image, Button, Collapse, FormControl, FormLabel, Radio, RadioGroup, Flex } from '@chakra-ui/core';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState.js";

function DrinkCard({ item }) {

    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);

    const [state, dispatch] = useStoreContext();

    const { cart } = state;

    const {
        _id,
        // image,
        // name,
        // price,
        // quantity
    } = item;

    const addToCart = () => {
        // find the cart item w/ a matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
        // if there is a match, we will update quantity
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                item: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
        console.log(cart);
    };

    return (
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="500px" m="10">
        <Box flexShrink="0" maxW="lg" bg="white.2" textAlign="center" flexBasis={['auto', '80%']}
        
         width={[
            "100%", // base
            "50%", // 480px upwards
            "25%", // 768px upwards
            "15%", // 992px upwards
          ]}>
            <Image src={item.image} mt="10%" width={['auto', '80%']} />
            <Box p="4">
                <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" >
                    {item.name} &nbsp;
                    ${item.price}
                </Box>
                <Box as="span" fontSize="sm">
                    {item.description}
                </Box>

                <br></br>
                <Button onClick={handleToggle}
                    borderRadius="8px"
                    py="3"
                    px="2"
                    mt="4"
                    lineHeight="1"
                    size="md">
                    Customize
                </Button>
                <Collapse mt={4} isOpen={show}>
                    <FormControl as="fieldset">
                        <FormLabel as="legend">Select Size</FormLabel>
                        <RadioGroup defaultValue="Small">
                            <Radio value="Small">Small</Radio>
                            <Radio value="Large">Large (+ $1.00)</Radio>
                        </RadioGroup>
                    </FormControl>
                    <FormControl as="fieldset">
                        <FormLabel as="legend">Add Milk</FormLabel>
                        <RadioGroup defaultValue="No Milk">
                            <Radio value="No Milk">No Milk</Radio>
                            <Radio value="Milk">Milk</Radio>
                        </RadioGroup>
                    </FormControl>

                </Collapse>
                <Button
                    borderRadius="8px"
                    py="3"
                    px="2"
                    mt="2"
                    lineHeight="1"
                    size="md"
                    onClick={addToCart}>
                    Add to Cart
                </Button>

            </Box>

        </Box>
        </Flex>
    );
}


export default DrinkCard;