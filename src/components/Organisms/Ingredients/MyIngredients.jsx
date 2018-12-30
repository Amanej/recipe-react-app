import React from 'react'
import styled from 'styled-components'

import BasicHeader from './../../Atoms/Headers/BasicHeader.jsx'

const StyledMyIngredients = styled.div`
    text-align: left;
    margin-left: 10%;
`

const MyIngredientsHolder = styled.div`
    display: flex;
    width: 80%;
`

const IngredientName = styled.span`
    font-size: 1.4rem;
    text-transform: capitalize;
`

const AmountCount = styled.span`
    font-size: 0.75rem;
    display: block;
`

const Ingredient = styled.div`
    margin: 0 15px;
`

const MyIngredients = (props) => {
    return (
        <StyledMyIngredients>
            <BasicHeader header={'Added ingredients'} />
            <MyIngredientsHolder>
                {props.myIngredients.map((mi,i) => {
                    return (
                        <Ingredient key={i}>
                            <p>
                                <IngredientName>
                                    {mi.name} 
                                    <span 
                                        style={{color: 'red',fontSize: '1.25rem', marginLeft: '15px'}} 
                                        onClick={() => {console.log("Remove ingredient")}}>X</span>
                                </IngredientName>
                                <AmountCount>Amount: {mi.amount} {mi.unit}</AmountCount>
                            </p>
                        </Ingredient>
                    )
                })}
            </MyIngredientsHolder>
        </StyledMyIngredients>
    )
}

export default MyIngredients