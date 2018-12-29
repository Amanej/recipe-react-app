import React from 'react';
import styled from 'styled-components'
import Suggestion from './../Atoms/Suggestion.jsx'

const SuggestionContainer = (props) => {
    return (
        <Suggestions style={
            {
                'height':props.height,
                'margin': 0,
                'padding': 0
            }
        }>
            {props.ingredients.map((ingredient,i) => {
                return (
                    <Suggestion 
                        ingredient={ingredient} 
                        key={i}
                        selectIngredient={props.selectIngredient}
                    />
                )
                    
            })}
        </Suggestions>
    )
}

const Suggestions = styled.div`
    margin: auto;
    font-size: 16px;
    padding: 5px;
    background: white;
    max-height: 200px;
    overflow: hidden;
    overflow-y: scroll;
    transition: 1.2s;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: #cecece;
    box-shadow: 4px 4px 6px #827e7e;
`

/*
    width: 80%;
    position: absolute;
*/

export default SuggestionContainer