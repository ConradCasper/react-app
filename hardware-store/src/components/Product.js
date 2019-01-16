import React, { Component } from 'react';

class Product extends Component {

    deleteProduct = (event) => {
        this.props.deleteProduct(this.props.productId)
    }



    render() {
        return (
            <div>
                <h1>{this.props.productName}</h1>
                <p>{this.props.productDescription}</p>
                <p>{this.props.productPrice}</p>

                {this.props.showDelete
                ? <button onClick = {this.deleteProduct}> Delete </button>
                : null
                }
            </div>
        );
    }
}

export default Product;