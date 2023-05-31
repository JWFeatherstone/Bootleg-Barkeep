import React, { Component } from 'react'
import '../DrinkDetails/DrinkDetails.css';
import { fetchDetails } from '../API/apiCalls';
import { Details } from "../../Types/Details"
import { Error } from '../Error/Error';


interface data {
    data: string
}

class DrinkDetails extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            drink: {}
        }
    }

    componentDidMount() {
        const { id } = this.props
        console.log(id)
        fetchDetails(id).then((data) => this.setState({
            drink: data
        }), () => {
        })
        console.log(this.state.drink)
    }

    render() {
        const { name, image, glass, ingredients, amount, instructions } = this.state.drink
        const { id } = this.props
        return (
            <div id={id} className="drink-details">
                <div className="left-side">
                    <h2 className="detail-name">{name}</h2>
                    <img className="detail-image" src={image} alt={name} />
                </div>
                <div className="right-side">
                    <h4 className="glass">{glass}</h4>
                    <p className="ingredients">{ingredients}{amount}</p>
                    <p className="instructions">{instructions}</p>
                </div>
            </div>
        )
    }
}



export default DrinkDetails










