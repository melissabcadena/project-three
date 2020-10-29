import React from 'react';
import { Box, Image, Button, Collapse, FormControl, FormLabel, Radio, RadioGroup } from '@chakra-ui/core';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState.js";

function DrinkCard({ item }) {

    const [state, dispatch] = useStoreContext();

    const { cart } = state;


    const addToCart = () => {
        console.log(item)
    dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
    });
    console.log(cart);
    };
    
    return (
        <Box maxW="sm" borderWidth="2px" bg="white.2" textAlign="center">
            <Image src={item.image} mt="4" />
            <Box p="4">
                <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
                    {item.name} &nbsp;
                    $ {item.price}
                </Box>
                <Box as="span" fontSize="sm">
                    {item.description}
                </Box>
                <Button variantColor="primary"
                    borderRadius="8px"
                    py="3"
                    px="2"
                    lineHeight="1"
                    size="md"
                    onClick={addToCart}>
                    Add to Cart
                </Button>
            <br></br>
                <Button variantColor="primary"
                    borderRadius="8px"
                    py="3"
                    px="2"
                    mt="4"
                    lineHeight="1"
                    size="md">
                    Customize
                </Button>
                <Collapse mt={4}>
                    <FormControl as="fieldset">
                        <FormLabel as="legend">Select Size</FormLabel>
                        <RadioGroup defaultValue="Small">
                            <Radio value="Small">Small</Radio>
                            <Radio value="Large">Large</Radio>
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
            </Box>

        </Box>
    );
}


export default DrinkCard;