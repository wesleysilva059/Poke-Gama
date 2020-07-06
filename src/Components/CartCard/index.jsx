import React, { Component } from 'react';

import Sprite from '../../Assets/Images/sprite.png';

class CartCard extends Component {
    render() {
        return(
            <article className="cartCard">
                <h3 className='cc-number'>Nº XYZ</h3>
                <img className='cc-sprite' src={Sprite} alt=""/>
                <h3 className='cc-title'>Togekiss</h3>
                <span className='cc-price'>P$: 55</span>
                <button className='cc-btn'>
                    X
                </button>
            </article>
        )
    }
}

export default CartCard;