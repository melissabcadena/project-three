import React from 'react';
import { ThemeProvider, Flex, Box, Image, Stack, Heading, Button, Link, Text} from '@chakra-ui/core';
import theme  from '../theme/theme';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
        <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={10}
        mb={16}
        >
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Image src="./images/cover.jpg" alt="coffee banner"size="100%" rounded="1rem" shadow="2xl" />
            </Box>
            <Stack
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
            >
            <Heading
                as="h1"
                size="xl"
                fontWeight="bold"
                color="primary.800"
                textAlign={["center", "center", "left", "left"]}
            >
                {"Sleepy? Tired? Bad day?"}<br></br>
                {"Why not take a <br> for Java?"}
            </Heading>
            <Heading
                as="h2"
                size="md"
                color="primary.800"
                opacity="0.8"
                fontWeight="normal"
                lineHeight={1.5}
                textAlign={["center", "center", "left", "left"]}
            >
                Order from our delicious menu
            </Heading>
            <Link href="/menu">
                <Button
                variantColor="primary"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
                >
                Order Now
                </Button>
            </Link>
            </Stack>

        </Flex>
        </ThemeProvider>
    );
};


export default Home;