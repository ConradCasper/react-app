import React, { Component } from 'react';
import CartItem from './CartItem'


class Cart extends Component {
    render() {
        return null
        // return (
        //      <div>
        //         {this.props.cartItems.map((cartItem, i) => {
        //             return (
        //                 <CartItem
        //                     key={i}
        //                     cartItemTotalPrice={cartItem.totalPrice}
        //                     cartItemProducts={cartItem.products}
        //                     deleteCartItem={this.props.deleteCartItem}
        //                     cartItemId={i}
        //                     showDelete={this.props.showDeleteOnCartItems}
        //                 />

        //             )
        //         })}

        //      </div></div>
        // );
    }
}

export default Cart;