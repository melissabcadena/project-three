import React from 'react';
import { Box, Image, } from '@chakra-ui/core';

function DrinkCard() {
    return(
        <Box maxW="sm" borderWidth="2px" bg="gray.2">
            <Image src="https://via.placeholder.com/250" />
            <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated>
                    Coffee
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    Price
                </Box>
                <Box as="span" fontSize="sm">
                    Description of the coffee
                </Box>
            </Box>
        </Box>
    )
}

export default DrinkCard;