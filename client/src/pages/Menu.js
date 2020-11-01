import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ThemeProvider, Flex, Box, Grid} from '@chakra-ui/core';
import theme  from '../theme/theme';

import DrinkCard from '../components/DrinkCard';
import { QUERY_ALL_DRINKS } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_DRINKS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const Menu = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_ALL_DRINKS);
console.log("state", state);
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DRINKS,
                drinks: data.drinks
            });

            data.drinks.forEach((item) => {
                idbPromise('drinks', 'put', item);
            });
        } else if (!loading) {
            idbPromise('drinks', 'get').then((drinks) => {
                dispatch({
                    type: UPDATE_DRINKS, 
                    drinks: drinks
                })
            })
        }
    }, [loading, data, dispatch]);
    // console.log(state.drinks);

    return (
        <ThemeProvider theme={theme}>
            <Flex wrap="wrap" align='center' justify='center'>
                <Box p={5}>
                    <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap={6}>
                        {state.drinks.map(item => (
                            <DrinkCard item={item} key={item._id}/>
                        ))}
                        {/* <DrinkCard/>
                        <DrinkCard/>
                        <DrinkCard/> */}
                    </Grid>
                </Box>
            </Flex>
            
            

        </ThemeProvider>
    );
};


export default Menu;