import React from 'react'
import styled from 'styled-components'

const RecipesContainer = styled.div`
    width: 80%;
    text-align: left;
    margin-left: 10%;
`

const RecipesContainerTitle = styled.h3`
    border-bottom: 1px solid;
`

const DescParagraph = styled.p`
    fontStyle: 'italic'
`

const Recipes = (props) => {
    return (
        <RecipesContainer>
            <RecipesContainerTitle>Recipes</RecipesContainerTitle>
            {props.recipes.map((r,i) => {
                return (
                    <div className="recipe" key={i}>
                        <h4>{r.title}</h4>
                        <DescParagraph>Short description of ingredients...</DescParagraph>
                        <p>Missing ingredients: {r.ingredients.length}</p>
                    </div>                    
                )
            })}
        </RecipesContainer>
    )
}

export default Recipes