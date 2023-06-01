import React, { Component } from 'react'
import '../DrinkDetails/DrinkDetails.css';
import { fetchDetails } from '../API/apiCalls';
import { Details } from "../../Types/Details"
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { useParams } from 'react-router-dom'



class DrinkDetails extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            drink: {},
        }
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo() {
        const { id } = this.props
        fetchDetails(id).then((data) => {
            this.setState({
                drink: data
            })
        })
    }

    render() {

        const { id } = this.props
        return (
            <div id={id} className="drink-details">
                <div className="left-side">
                    <h2 className="detail-name">{this.state.drink.strDrink}</h2>
                    <img className="detail-image" src={this.state.drink.image} alt={this.state.drink.strDrink} />
                </div>
                <div className="right-side">
                    <h4 className="glass">{this.state.drink.strGlass}</h4>
                    <p className="ingredients">{this.state.drink.strIngredient1}{this.state.drink.strMeasure1}</p>
                    <p className="instructions">{this.state.drink.strInstructions}</p>
                </div>
            </div>
        )
    }
}



export default DrinkDetails










