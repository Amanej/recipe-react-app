import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
          <HeaderMainTitle>Recipify</HeaderMainTitle>
          <HeaderSecondTitle>Find recipes by ingredients</HeaderSecondTitle>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    text-align: center;
    color: #333;
    margin-top: 20px;
`

const HeaderMainTitle = styled.h2`
    font-size: 1.8rem;
    margin: 10px;
`

const HeaderSecondTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: normal;
    margin: 10px;
`

export default Header