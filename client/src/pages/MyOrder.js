import React, { useEffect } from 'react';
// import { ThemeProvider, 
//     Stack, Flex, Box, Heading, Button } from '@chakra-ui/core';
// import theme  from '../theme/theme';
import Auth from "../utils/auth";
import CartItem from '../components/CartItem';
import { useStoreContext } from "../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries"
import { useLazyQuery } from '@apollo/react-hooks';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');



const MyOrder = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
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

    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session })
          })
        }
      }, [data]);
    
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
          sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
      }

      function submitCheckout() {
        const drinkIds = [];
    
        state.cart.forEach((item) => {
          for (let i = 0; i < item.purchaseQuantity; i++) {
            drinkIds.push(item._id);
          }
        });
    
        getCheckout({
          variables: { drinks: drinkIds }
        });
      }

      return (
        <div>
            <div pl={5}>
                <h1 as='h1'>Cart</h1>
            </div>
                          
            <div>
              {state ? state.cart.map(item=>(
                <CartItem key={item._id} item={item} />
              )): (<div> You haven't added anything to the cart yet! </div>)}

            </div>
                
            <div pl={3}>
                <h1 as='h1'>Total</h1>
                <h1 as='h2'>${calculateTotal()}</h1>
                { Auth.loggedIn() ? 
                <Button width="full" type="submit" size="xl" py="4" px="4" borderRadius="8px" onClick={submitCheckout}>Checkout
                </Button> 
                :       
                <span>Log in to check out!</span>
                }
            </div>
            
            </div>
        );
};


export default MyOrder;