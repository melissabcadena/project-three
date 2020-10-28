import React from 'react';
import { Box, Image, Button, Collapse, FormControl, FormLabel, Radio, RadioGroup } from '@chakra-ui/core';

function DrinkCard({drink }) {

    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);

    return (

        <Box maxW="sm" borderWidth="2px" bg="white.2">
            <Image src={drink.image} />
            <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
                    {drink.name}
                    </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {drink.price}
                    </Box>
                <Box as="span" fontSize="sm">
                    {drink.description} 
                    </Box>
            </Box>
            <Button variantColor="primary"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md" onClick={handleToggle}>
                Customize
                </Button>
            <Collapse mt={4} isOpen={show}>
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
    );
}





export default DrinkCard;