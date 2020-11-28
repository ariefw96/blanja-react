import React, { Component } from 'react';
import './style.css'
import Tshirt from './../../assets/image/Category/TshirtCategory.png';
import Short from './../../assets/image/Category/ShortCategory.png';
import Jacket from './../../assets/image/Category/JacketCategory.png';
import Pants from './../../assets/image/Category/PantsCategory.png';
import Shoes from './../../assets/image/Category/ShoesCategory.png';

export default class Category extends Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-center">

                    <div class="box-category">
                        <img class="center-image" src={Tshirt} />
                        <div class="center-text">
                            <h3>T-shirt</h3>
                        </div>
                    </div>
                    <div class="box-category" >
                        <img class="center-image" src={Tshirt} />
                        <div class="center-text">
                            <h3>T-shirt</h3>
                        </div>
                    </div>
                    <div class="box-category" >
                        <img class="center-image" src={Tshirt} />
                        <div class="center-text">
                            <h3>T-shirt</h3>
                        </div>
                    </div>
                    <div class="box-category" >
                        <img class="center-image" src={Tshirt} />
                        <div class="center-text">
                            <h3>T-shirt</h3>
                        </div>
                    </div>
                    <div class="box-category" >
                        <img class="center-image" src={Tshirt} />
                        <div class="center-text">
                            <h3>T-shirt</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}