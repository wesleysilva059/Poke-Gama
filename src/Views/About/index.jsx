import React, {Component} from 'react';
//import axios from 'axios';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import './_home.scss';

class About extends Component {
    render() {
        return(
            <>
                <Header></Header>
                <main>
                    <section>
                        <h1>Pokéstore</h1>
                    </section>
                </main>
                <Footer></Footer>
            </>
        )
    }
}

export default Home;