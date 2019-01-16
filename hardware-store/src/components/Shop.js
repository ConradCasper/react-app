import React, { Component } from 'react';
import ProductList from './ProductList'
class Shop extends Component {
    render() {
        return (
            <ProductList productList={this.props.productList} showDeleteOnProducts = {false}/>
        );
    }
}

export default Shop;