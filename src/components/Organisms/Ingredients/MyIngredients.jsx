import React from 'react'
import styled from 'styled-components'

import BasicHeader from './../../Atoms/Headers/BasicHeader.jsx'

const StyledMyIngredients = styled.div`
    text-align: left;
    margin-left: 10%;
`

const MyIngredients = (props) => {
    return (
        <StyledMyIngredients>
            <BasicHeader header={'Added ingredients'} />
            {props.myIngredients.map((mi,i) => {
                return (
                    <div className="ingredient" key={i}>
                        <p>{mi.name} || Amount: {mi.amount} {mi.unit}</p>
                    </div>
                )
            })}
        </StyledMyIngredients>
    )
}

export default MyIngredients