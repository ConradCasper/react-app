import React, { Component } from 'react';
import Shop from './Shop'
import Admin from './Admin'
import Cart from './Cart'
// import ProductForm from './ProductForm'



class HomePage extends Component {
    state = {
        productList: [
            {
                name: "shovel",
                description: "screwdriver is confused",
                price: 1000
            }
        ],
        cart: {
            totalPrice: "0.00",
            products: [{
                name: "hammer",
                description: "tool",
                price: 5.99,
                quantity: 1
            }]

        },
        showAdmin: false,
    }

    changePage = () => {
        //get
        let banana = this.state.showAdmin

        // modify
        banana = !banana

        this.setState({ showAdmin: banana })
    }

    addProduct = (newItem) => {
        // get value from state
        let pList = this.state.productList



        // modify that value
        pList.push(newItem)

        // put that value back in 
        this.setState({
            productList: pList
        })

    }

    deleteProduct = (productId) => {

        let pList = this.state.productList

        pList.splice(productId, 1)

        this.setState({
            productList: pList
        })
    }    
    

    render() {
        return (
            <div>
                <Cart cartList={this.state.cart}/>
                <Shop productList={this.state.productList} />
                <button onClick={this.changePage}> Change Page </button>
                {this.state.showAdmin
                    ? <Admin 
                    productList={this.state.productList} 
                    onCreateNewItem = {this.addProduct}
                    deleteProduct = {this.deleteProduct}
                    />
                    : <Shop productList={this.state.productList} />
                }

            </div>
        );
    }
}

export default HomePage;