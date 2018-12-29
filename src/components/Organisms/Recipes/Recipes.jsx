import React from 'react'
import styled from 'styled-components'
import Recipe from './Recipe.jsx'

import BasicHeader from './../../Atoms/Headers/BasicHeader.jsx'

const RecipesContainer = styled.div`
    width: 80%;
    text-align: left;
    margin-left: 10%;
`

const Recipes = (props) => {
    return (
        <RecipesContainer>
            <BasicHeader header={'Recipes'} />
            {props.recipes.map((r,i) => {
                return (
                    <Recipe key={i} recipe={r} myIngredients={props.myIngredients} />
                )
            })}
        </RecipesContainer>
    )
}

export default Recipes