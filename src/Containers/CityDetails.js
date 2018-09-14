import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Cards";
import { Grid, Segment } from "semantic-ui-react";
import Graph from "./Graphs";
class CityDetails extends Component {
  render() {

    if (!this.props.state.weather) {
      return "Type Bitch";
    }
    return (
      <Grid columns={2} celled>
        <Grid.Row stretched divided>
          <Grid.Column>
            <Card data={this.props.state.weather} wiki={this.props.state.wiki} news={this.props.state.news} />
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Graph data={this.props.state.weather.list} kind={"temp"} />
            </Segment>

            <Segment>
              <Graph data={this.props.state.weather.list} kind={"humidity"} />
            </Segment>

            <Segment>
              <Graph data={this.props.state.weather.list} kind={"pressure"} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  const { weather, news,wiki } = state;
  return {
    state: { weather, news,wiki }
  };
}
export default connect(mapStateToProps)(CityDetails);
