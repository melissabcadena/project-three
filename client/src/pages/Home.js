import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';


function HomeStrap(props) {

    return (
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Image src="./images/cover.jpg" alt="coffee banner" fluid />

                        <h1>Sleepy?</h1>
                        <h2>{"Why not take a <br> for Java?"}<br></br>Order from our delicious menu</h2>
                        <Button variant='secondary' href='/menu' size='lg'>
                            Order Now
                        </Button>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>

    )
}

export default HomeStrap;
