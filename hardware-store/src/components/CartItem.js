import React, { Component } from 'react';

class CartItem extends Component {
    deleteCartItem = (event) => {
        this.props.deleteCartItem(this.props.cartItemId)
    }

    render() {
        return (
            <div>
                <h1>{this.props.cartItemTotalPrice}</h1>
                <p>{this.props.cartItemProducts}</p>
            </div>
        );
    }
}

export default CartItem;