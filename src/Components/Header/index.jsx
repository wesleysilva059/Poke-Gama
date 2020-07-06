import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../../Assets/Images/logo.svg';

class Header extends Component {
    render() {
        return(
            <header className='header'>
                <Container>
                    <Row>
                        <Col lg={1}>
                            <img className='h-logo' src={Logo} alt="logo"/>
                        </Col>
                        <Col lg={6}>
                            <input type="text" className='h-search'/>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Header;