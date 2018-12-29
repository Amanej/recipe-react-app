import React from 'react'
import styled from 'styled-components'
import Recipe from './Recipe.jsx'

const RecipesContainer = styled.div`
    width: 80%;
    text-align: left;
    margin-left: 10%;
`

const RecipesContainerTitle = styled.h3`
    border-bottom: 1px solid;
`

const Recipes = (props) => {
    return (
        <RecipesContainer>
            <RecipesContainerTitle>Recipes</RecipesContainerTitle>
            {props.recipes.map((r,i) => {
                return (
                    <Recipe key={i} recipe={r} myIngredients={props.myIngredients} />
                )
            })}
        </RecipesContainer>
    )
}

export default Recipes