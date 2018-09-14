import React, { Component } from 'react'
import CityDetails from '../Containers/CityDetails'
import SearchBar from '../Containers/SearchBar'
export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
<SearchBar/>
<CityDetails/>
            </div>

        )
    }
}