import React from 'react'
import styled from 'styled-components'

class Recipe extends React.Component {
    
    calculateMissingIngredients = (recipeIngredients,myIngredients) => {
        let _myIngredients = myIngredients.map(e => e.name);
        let counter = 0;
        recipeIngredients.filter(function(e) {
            if(!(_myIngredients.indexOf(e)+1)) {
                counter++
            }
            return counter
        });
        console.log("Counter ",counter);
        return counter //recipeIngredients.length
    }

    render() {
        return (
            <div className="recipe">
                <h4>{this.props.recipe.title}</h4>
                <DescParagraph>Short description of ingredients...</DescParagraph>
                {this.calculateMissingIngredients(this.props.recipe.ingredients, this.props.myIngredients) &&
                    <p>Missing ingredients: {this.calculateMissingIngredients(this.props.recipe.ingredients, this.props.myIngredients)}</p>
                }
                {!this.calculateMissingIngredients(this.props.recipe.ingredients, this.props.myIngredients) &&
                    <p>You have all ingredients</p>
                }
            </div>                   
        )
    }
}

const DescParagraph = styled.p`
    fontStyle: 'italic'
`

export default Recipe