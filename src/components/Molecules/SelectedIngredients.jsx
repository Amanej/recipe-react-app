import React from 'react'
import styled from 'styled-components'

const IngredientName = styled.span`
    font-weight: bold;
    margin-right: 10px;
`

const AmountInput = styled.input`
    border: none;
    width: 75px;
    border-bottom: 1px solid #333;
    text-align: center;
`

const Unit = styled.span`
    font-size: 0.75rem;
    margin: 0 5px;
`

const AddButton = styled.button`
    padding: 5px 10px;
    margin: 5px;
    background: darkblue;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background: blue;
    }
`

const SelectedIngredient = (props) => {
    return (
            <div className="selectedIngredient">
                <IngredientName>{props.selectedIngredient.name}</IngredientName>
                <AmountInput 
                    type="text" 
                    name="amount" 
                    className="amount" 
                    placeholder="Set amount" 
                    onChange={e => {
                        props.setAmount(e.target.value)
                    }}
                />
                <Unit>{props.selectedIngredient && props.selectedIngredient.unit}</Unit>
                <AddButton 
                    className="add" 
                    onClick={() => {
                        props.addIngredient(props.selectedIngredient, props.amount)
                    }} 
                >Add ingredient</AddButton>
            </div>
    )
}

export default SelectedIngredient