import React, { Component } from 'react';
// import Carousel from '../../components/Carousel';
// import Category from '../../components/body/Category';
// import New from '../../components/body/New';
// import Popular from '../../components/body/Popular';
import Navbar from './../component/navbar';
import Category from './../component/category'
import Cards from './../component/new';




class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Navbar />
                    <h2>Carousel</h2>
                    
                    <h2>Category</h2>
                    <Category />
                    <h2>New</h2>
                    <p className="lead text-muted">You've never seen it before</p>
                    <Cards />
                    <h2>Popular</h2>
                    <p className="lead text-muted">Find clothes that are trending recently</p>
                    <Cards />
                </div>
            </>
        )
    }
}


export default Home;