import React, { Component } from 'react'
import ProductList from '../components/ProductList'

export default class Martketplace extends Component {
    render() {
        const products = this.props.products
        console.log(products)
        return (
            <div className="row">
                <ProductList products={this.props.products} handleAddToCart={this.props.handleAddToCart}/>
                
        {/*<div className="col-md-4">
            <figure className="card card-product">
                <div className="img-wrap"><img src="" className="img-fluid" /></div>
                <figcaption className="info-wrap">
                    <h4 className="title">Name</h4>
                    <p className="desc">Description</p>
                </figcaption>
                <div className="bottom-wrap">
                    <a href="" className="btn btn-sm btn-outline-primary float-right">Add to Cart</a>
                    <div className="price-wrap h5">
                        <span className="price-new">$0.00</span> <del className="price-old">$0.00</del>
                    </div> 
                </div> 
            </figure>
        </div>*/}
    
</div> 
        )
    }
}
