import React, { Component } from 'react';

class CartItem extends Component {
    deleteCartItem = (event) => {
        this.props.deleteCartItem(this.props.cartItemId)
    }

    render() {
        return (
            <div>
                
                <p>{this.props.item.name}</p>
                <p>{this.props.item.price}</p>
                {/* <p>{this.props.item.name}</p>
                <p>{this.props.item.name}</p> */}

            </div>
        );
    }
}

export default CartItem;