import React, { Component } from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Card from './../Card'

import axios from 'axios';

const pokeapi = 'https://pokeapi.co/api/v2/pokemon/';

class CardList extends Component {
    state = {
        pokemon: []
    }
    
    componentDidMount() {
    axios.get(pokeapi)
        .then(res => {
            const pokemon = res.data.results
            console.log(res.data.results) 
            this.setState({ pokemon })
        })
    }

    render() {
        return(
            <section className='cardList'>
                <Container>
                    <Row>
                        {
                            this.state.pokemon.map((pokemon, index) =>
                                // chamar api para cada pokemon
                        )
                        }
                    </Row>
                    <ul>
                        { this.state.pokemon.map(pokemon => <li>{pokemon.name}</li>)}
                    </ul>
                </Container>
            </section>
        )
    }
}

export default CardList;

/**
 * <Col lg={4}>
                            <Card></Card>
                        </Col>
                        <Col lg={4}>
                            <Card></Card>
                        </Col>
                        <Col  lg={4}>
                            <Card></Card>
                        </Col>
                        <Col lg={4}>
                            <Card></Card>
                        </Col>
                        <Col lg={4}>
                            <Card></Card>
                        </Col>
                        <Col  lg={4}>
                            <Card></Card>
                        </Col>
                        <Col lg={4}>
                            <Card></Card>
                        </Col>
                        <Col lg={4}>
                            <Card></Card>
                        </Col>
                        <Col  lg={4}>
                            <Card></Card>
                        </Col>
 */