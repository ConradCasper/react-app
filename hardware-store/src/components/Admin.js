import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductForm from './ProductForm'

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>Admin</h1>
              <ProductList 
                productList={this.props.productList} 
                showDeleteOnProducts = {true}
                deleteProduct={this.props.deleteProduct}
                />
              <ProductForm onCreateNewItem = {this.props.onCreateNewItem}/>
            </div>
        );
    }
}

export default Admin;