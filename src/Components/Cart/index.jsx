import React, { Component } from 'react';
import CartCard from './../CartCard'; 



class Cart extends Component {
    render() {
        return(
            <section className='cart'>
                <header>
                    <h2 className='c-title'>Carrinho</h2>
                </header>
                <section className='c-list'>
                    <CartCard></CartCard>
                    <CartCard></CartCard>
                </section>
                <footer className='c-footer'>   
                    <section className='c-total'>
                        <span className='total-text'>Total: 22.0</span>
                    </section>
                    <button className='c-button'>
                        Confirmar
                    </button>
                </footer>
            </section>
        )
    }
}

export default Cart;