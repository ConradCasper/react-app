import React, { Component } from 'react';

class CartItem extends Component {
    deleteCartItem = (event) => {
        this.props.deleteCartItem(this.props.cartItemId)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CartItem;