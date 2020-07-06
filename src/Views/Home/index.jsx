import React, {Component} from 'react';
//import axios from 'axios';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CardList from '../../Components/CardList';
import Cart from '../../Components/Cart';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return(
            <>
                <Header></Header>
                <main>
                    <section className='home'>
                        <Container>
                            <Row>
                                <Col lg={{ span: 6, offset: 1 }}>
                                    <CardList>
                                    </CardList>
                                </Col>
                                <Col lg={{ span: 4,}}>
                                    <Cart>
                                    </Cart>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    
                </main>
                <Footer></Footer>
            </>
        )
    }
}

export default Home;