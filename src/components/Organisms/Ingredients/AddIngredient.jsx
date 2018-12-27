import React from 'react';
import styled from 'styled-components'
import Suggestion from './../../Atoms/Suggestion.jsx'

const AddIngredientHolder = styled.div`
    text-align: left;
`

const SearchContainer = styled.div`
    width: 80%;
    margin: auto;
`

const SearchInput = styled.input`
    width: 100%;
    margin: auto;
    font-size: 16px;
    padding: 5px;
    border: none;
`

const Suggestions = styled.div`
    width: 100%;
    margin: auto;
    font-size: 16px;
    padding: 5px;
    border-none;
    position: absolute;
    background: white;
    max-height: 200px;
    overflow: hidden;
    overflow-y: scroll;
`

const AmountHolder = styled.div`
    width: 80%;
    margin: auto;
    font-size: 16px;
    padding: 5px;
`



class AddIngredient extends React.Component {
    state = {
        searchActive: false
    }

    render () {
        return (
            <AddIngredientHolder>
                <SearchContainer>
                    <SearchInput 
                        type="text" name="search" className="search" placeholder="Enter ingredient" autoComplete="off" 
                        onKeyUp={e => {
                            if(e.keyCode === 13) {
                                console.log(e.target.value);
                                // Add to state
                                    // Clear input
                            } else {
                                // organize suggestions by match with query
                            }
                        }}
                        onFocus={e => {
                            this.setState({
                                searchActive: true
                            })
                        }} 
                        onBlur={e => {
                            this.setState({
                                searchActive: false
                            })
                        }} />
                    {this.state.searchActive &&                
                        <Suggestions>
                            {this.props.ingredients.map((ingredient,i) => {
                                return <Suggestion ingredient={ingredient} key={i} />
                            })}
                        </Suggestions>
                    }
                </SearchContainer>
                <AmountHolder>
                    <input type="text" name="amount" className="amount" placeholder="Set amount" />
                    <button className="add">Add ingredient</button>
                </AmountHolder>
            </AddIngredientHolder>
        )
    }
}

export default AddIngredient

