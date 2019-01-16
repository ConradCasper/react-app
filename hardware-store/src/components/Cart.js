import React, { Component } from 'react';
import CartItem from './CartItem'


class Cart extends Component {
    render() {
        return (
            <div>
                {this.props.cartList.map((cartItem, i) => {
                    return (
                        <CartItem
                            key={i}
                            cartItemTotalPrice={cartItem.totalPrice}
                            cartItemProducts={cartItem.products}
                            deleteCartItem={this.props.deleteCartItem}
                            cartItemId={i}
                            showDelete={this.props.showDeleteOnCartItems}
                        />

                    )
                })}

            </div>
        );
    }
}

export default Cart;