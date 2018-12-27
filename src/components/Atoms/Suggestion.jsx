import React from 'react';
import styled from 'styled-components'

const SuggestionBtn = styled.span`
    width: 100%;
    display: block;
`

const suggestion = (props) => {
    return (
        <SuggestionBtn>{props.ingredient}</SuggestionBtn>
    )
}

export default suggestion