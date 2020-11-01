import React, { useEffect } from "react";
import DrinkCard from "../DrinkCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DRINKS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_DRINKS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { ThemeProvider, Box, Grid} from '@chakra-ui/core';
import theme from '../../theme/theme';
//import spinner from "../public/images/spinner.gif"

function DrinkList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DRINKS);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_DRINKS,
          drinks: data.drinks
        });
        data.drinks.forEach((drink) => {
          idbPromise('drinks', 'put', drink);
        });
    } else if (!loading) {
      idbPromise('drinks', 'get').then((drinks) => {
        dispatch({
          type: UPDATE_DRINKS,
         drinks: drinks
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterDrinks() {
    if (!currentCategory) {
      return state.drinks;
    }

    return state.drinks.filter(drink => drink.category._id === currentCategory);
  }

  return (
    <ThemeProvider theme={theme}>
                
            <Box>
      <h2>Our Drinks:</h2>
      {state.drinks.length ? (
        <div className="flex-row">
            {filterDrinks().map(drink => (
                <DrinkCard
                  key= {drink._id}
                  _id={drink._id}
                  image={drink.image}
                  name={drink.name}
                  price={drink.price}
                  quantity={drink.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any drinks yet!</h3>
      )}
      {/* { loading ? 
      <img src={spinner} alt="loading" />: null} */}
    </Box>
            
            </ThemeProvider>
  );
}

export default DrinkList;
