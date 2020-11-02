import React from 'react';
// import { Box, Image, Button, Collapse, FormControl, FormLabel, Radio, RadioGroup, Flex } from '@chakra-ui/core';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Collapse, Card, CardTitle, CardText, CardBody, CardImg, UncontrolledPopover, PopoverHeader } from 'reactstrap';
function DrinkCard({ item }) {
    const [show, setShow] = React.useState(false);
    const [customize, setCustomize] = React.useState({milk:"", flavor:"", size:""})
    const handleToggle = () => setShow(!show);
    // const [popoverOpen, setPopoverOpen] = useState(false);
    // const toggle = () => setPopoverOpen(!popoverOpen);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    const {
        // image,
        // name,
        _id,
        // price,
        // quantity
    } = item;

    const onChange = (e) => {
        const {name, value} = e.target
        setCustomize({...customize, [name]: value })
    }

    const addToCart = () => {
        // const customize = 
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
            item.customize = customize;
            console.log("_______")
            console.log(item);
            dispatch({
                type: ADD_TO_CART,
                item: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
        console.log(cart);
    };
    return (
        <div flexWrap="wrap" alignItems="center" justifyContent="center" maxW="500px" m="10">
            <Card flexShrink="0" maxW="lg" bg="white.2" textAlign="center" flexBasis={['auto', '80%']}
                width={[
                    "100%", // base
                    "50%", // 480px upwards
                    "25%", // 768px upwards
                    "15%", // 992px upwards
                ]}>
                <CardImg src={item.image} mt="10%" />
                <CardBody p="4">
                    <CardTitle mt="1" fontWeight="semibold" as="h3" lineHeight="tight" >
                        {item.name} &nbsp;
                    ${item.price}
                    </CardTitle>
                    <CardText as="span" fontSize="sm">
                        {item.description}
                    </CardText>
                    <br></br>
                    <Button 
                    onClick={handleToggle}
                        borderRadius="8px"
                        py="3"
                        px="2"
                        mt="4"
                        lineHeight="1"
                        size="md">
                        Customize
                    </Button>{'  '}
                    <Collapse mt={4} isOpen={show}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Select Size</Label>
                                <Input type="select" name="size" id="exampleSelect" onChange={onChange}>
                                    <option>Small</option>
                                    <option>Large (+$1.00)</option>
                                </Input>
                                <Label for="exampleSelect">Add Milk</Label>
                                <Input type="select" name="milk" id="exampleSelect" onChange={onChange}>
                                    <option>No Milk</option>
                                    <option>2% Milk</option>
                                    <option>Oat Milk</option>
                                    <option>Almond Milk</option>
                                </Input>
                                <Label for="exampleSelect">Add Flavor</Label>
                                <Input type="select" name="flavor" id="exampleSelect" onChange={onChange}>
                                    <option>None</option>
                                    <option>Pumpkin Spice</option>
                                    <option>Caramel</option>
                                    <option>Vanilla</option>
                                </Input>
                            </FormGroup>
                            </Form>
                    </Collapse>
                            <Button id="PopoverFocus" type="button"
                                borderRadius="8px"
                                py="3"
                                px="2"
                                mt="2"
                                lineHeight="1"
                                size="md"
                                onClick={addToCart}>
                                Add to Cart
                            </Button>
                            <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                                <PopoverHeader>Item added to cart!</PopoverHeader>   
                            </UncontrolledPopover>
                </CardBody>
            </Card>
        </div>
    );
}
export default DrinkCard;