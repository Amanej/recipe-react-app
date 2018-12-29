import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
    text-decoration: underline;
    color: #333;
    font-size: 1.4rem;
    font-weight: 400;
`

const BasicHeader = (props) => {
    return (
        <Header>{props.header}</Header>
    )
}

export default BasicHeader