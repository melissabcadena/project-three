import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
import { ThemeProvider, Stack, Flex, Box, Heading, Text } from '@chakra-ui/core';
import theme from '../theme/theme';


function OrderList({ name, price, ...rest }) {
    return (
        <Box p={5} shadow="lg" borderWidth="5px" {...rest}>
            <Heading fontSize="xl">{name}</Heading>
            <Text mt={4}>{price}</Text>
        </Box>
    );
}


const History = () => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }
    return (
        <ThemeProvider theme={theme}>
            <Link to="/menu">
                    ← Back to Menu
                </Link>
            {/* {user ? ( */}
                <>
                <Box pl={3}>
                    { <Heading as='h1'>{/*user.firstName*/} {/*user.lastName*/}'s Order History</Heading>}
                </Box>
                
                <Flex justifyContent='space-between'>
                    <Stack>
                        <OrderList name="Coffee" price="$5.00" />
                        <OrderList name="Espresso" price="$2.00" />
                        <OrderList name="Water" price="$1.00" />
                    </Stack>
                </Flex>
                </>
            {/* ) : null} */}
        </ThemeProvider>
    );
};


export default History;