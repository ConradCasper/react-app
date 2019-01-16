import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        name: "",
        description: "",
        price: 0
    }

    updateName = (event) => {
        let newName = event.target.value

        console.log(newName)

        this.setState({name: newName})
    }

    updateDescription = (event) => {
        let newDesc = event.target.value
        this.setState({description: newDesc})
    }

    updatePrice = (event) => {
        this.setState({price:event.target.value})
    }

    createNewProduct = () => {
        this.props.onCreateNewItem(this.state)
    }




    render() {
        return (
            <div>
                <h1>New Product</h1>
                <input placeholder="name" name="" type="text" value={this.state.name} onChange={this.updateName}/>
                
                <input placeholder="description" description="" type="text" value={this.state.description} onChange={this.updateDescription}/>
                

                <input placeholder="price" price="" type="number" value={this.state.price} onChange={this.updatePrice}/>

                <button onClick = {this.createNewProduct}>Create New Product</button>
                
            </div>
        );
    }
}

export default ProductForm;