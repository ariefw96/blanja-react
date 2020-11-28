import React, { Component } from 'react';
import './style.css'
import Thumbnail from './../../assets/image/Thumbnail/thumbnail.png'

export default class Cards extends Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Thumbnail} alt="Thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Men Formal Suit - Black Edition(3)</h5>
                            <p className="card-text">$40.00</p>
                            <p className="card-text">Zalora Cloth</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    {/* col */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Thumbnail} alt="Thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Men Formal Suit - Black Edition(3)</h5>
                            <p className="card-text">$40.00</p>
                            <p className="card-text">Zalora Cloth</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    {/* col */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Thumbnail} alt="Thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Men Formal Suit - Black Edition(3)</h5>
                            <p className="card-text">$40.00</p>
                            <p className="card-text">Zalora Cloth</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    {/* col */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Thumbnail} alt="Thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Men Formal Suit - Black Edition(4)</h5>
                            <p className="card-text">$40.00</p>
                            <p className="card-text">Zalora Cloth</p>
                            <div className="row">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    {/* col */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Thumbnail} alt="Thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Men Formal Suit - Black Edition(3)</h5>
                            <p className="card-text">$40.00</p>
                            <p className="card-text">Zalora Cloth</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    {/* col */}
                </div>
            </>
        )
    }
}