import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './Cards';
import {Grid,Segment} from 'semantic-ui-react';
import Graph from './Graphs';
class CityDetails extends Component{
    render(){

        if(!this.props.weather){
            return("Type Bitch")
        }
        return(
            <Grid>
                <Grid.Row columns={'equal'} divided>
<Grid.Column>


<Card data={this.props.weather}/>

</Grid.Column>
<Grid.Column>
    <Segment>
        <Graph data={this.props.weather.list} kind={"temp"}/>
    </Segment>
    <Segment>
        1
    </Segment>
</Grid.Column>
                </Grid.Row>
            </Grid>

        )

    }

}
function mapStateToProps({weather}){
    return ({weather})
}
export default connect(mapStateToProps)(CityDetails)