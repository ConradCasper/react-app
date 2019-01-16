import React, { Component } from 'react';
import CartItem from './CartItem'


class Cart extends Component {
    render() {
        return (
             <div>
                {this.props.cartItems.products.map((cartItem, i) => {
                    return (
                        <CartItem
                            key={i}
                            item = {cartItem}
                        />

                    )
                })}

             </div>
        );
    }
}

export default Cart;