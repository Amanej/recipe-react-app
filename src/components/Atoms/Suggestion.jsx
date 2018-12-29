import React from 'react';
import styled from 'styled-components'

const SuggestionBtn = styled.span`
    width: 100%;
    display: block;
    cursor: pointer;
    padding: 5px;
`

const suggestion = (props) => {
    //console.log(props)
    return (
        <SuggestionBtn
            onClick={e => {
                console.log(e.target.innerText);
                // Add to selected
                console.log(props.ingredient)
                props.selectIngredient(props.ingredient);
            }} 
        >{props.ingredient.name}</SuggestionBtn>
    )
}

export default suggestion