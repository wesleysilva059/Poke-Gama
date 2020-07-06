import React, { Component } from 'react';

import Sprite from '../../Assets/Images/sprite.png';

class Card extends Component {
    render() {
        return(
            <article className='card'>
                <h3 className='c-number'>Nº </h3>
                <img className='c-sprite' src={Sprite} alt=""/>
                <h3 className='c-title'>{this.props.name}</h3>
            </article>
        )
    }
}

export default Card;