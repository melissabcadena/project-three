import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ThemeProvider, Box, Grid} from '@chakra-ui/core';
import theme  from '../theme/theme';

import DrinkCard from '../components/DrinkCard';
import { QUERY_ALL_DRINKS } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_DRINKS } from "../utils/actions";



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
        }
    }, [loading, data, dispatch]);
    console.log(state.drinks);

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    {state.drinks.map(item => (
                        <DrinkCard item={item} key={item._id}/>
                    ))}
                    {/* <DrinkCard/>
                    <DrinkCard/>
                    <DrinkCard/> */}
                </Grid>
            </Box>
            

        </ThemeProvider>
    );
};


export default Menu;