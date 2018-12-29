import React from 'react';
import styled from 'styled-components'
import BasicHeader from './../../Atoms/Headers/BasicHeader.jsx'
import Suggestions from './../../Molecules/Suggestions.jsx'

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

const AmountHolder = styled.div`
    width: 80%;
    margin: auto;
    font-size: 16px;
    padding: 5px;
`


class AddIngredient extends React.Component {
    state = {
        searchActive: 'none', //true,
        height: '0', //true,
        selectedIngredient: null,
        amount: 0
    }

    selectIngredient = (v) => {
        console.log(v);
        console.log(this.state.searchActive)
        this.setState({
            selectedIngredient: v,
            searchActive: 'none',
            height: '0'
        })
    }
    
    render () {
        //console.log(this.props);
        return (
            <AddIngredientHolder>
                <SearchContainer>
                    <SearchInput 
                        type="text" name="search" className="search" placeholder="Enter ingredient" autoComplete="off" 
                        onKeyUp={e => {
                            if(e.keyCode === 13) {
                                console.log(e.target.value);
                                // Add to state
                                    this.selectIngredient(e.target.value)
                                    // Clear input
                            } else {
                                // organize suggestions by match with query
                            }
                        }}
                        onFocus={e => {
                            this.setState({
                                searchActive: 'block', //true
                                height: '200px'
                            })
                        }} 
                        onBlur={e => {
                            this.setState({
                                searchActive: 'none', //false
                                height: '0'
                            })
                        }} 
                    />
                    <Suggestions
                        height={this.state.height}
                        show={this.state.searchActive}
                        ingredients={this.props.ingredients}
                        selectIngredient={this.selectIngredient}
                    />
                </SearchContainer>
                <AmountHolder>
                    <BasicHeader header={'Selected ingredient'} />
                    <p>{this.state.selectedIngredient && this.state.selectedIngredient.name}</p>
                    <p>Unit: {this.state.selectedIngredient && this.state.selectedIngredient.unit}</p>
                    <input 
                        type="text" 
                        name="amount" 
                        className="amount" 
                        placeholder="Set amount" 
                        onChange={e => {
                            this.setState({
                                amount: e.target.value
                            })
                        }}
                     />
                    <button 
                        className="add" 
                        onClick={() => {
                            this.props.addIngredient(this.state.selectedIngredient, this.state.amount)
                        }} 
                    >Add ingredient</button>
                </AmountHolder>
            </AddIngredientHolder>
        )
    }
}

export default AddIngredient

