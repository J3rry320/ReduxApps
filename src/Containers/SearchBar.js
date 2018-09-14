import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../Actions'
import {fetchNews} from '../Actions'
import {bindActionCreators} from 'redux';
import {Container,Grid, Input, Button,Icon } from 'semantic-ui-react'

class SearchBar extends Component {
constructor(props){
  super(props);
  this.state={
    term:""
  }
  this.InputHandler=this.InputHandler.bind(this)
  this.onSubmit=this.onSubmit.bind(this)
}

  focus = () => {
    this.inputRef.focus()
  }
InputHandler(e){
  this.setState({term:e.target.value})
}
onSubmit(e){
  e.preventDefault();
  this.props.fetchNews(this.state.term);
  this.props.fetchWeather(this.state.term);
  this.setState({term:" "})

}
  render() {
    return (
      <Container fluid>
<Grid>
<Grid.Row columns={1}>
      <Grid.Column>
      <center className="padding-top">
      <form onSubmit={this.onSubmit}>
      <Input value={this.state.term} onChange={this.InputHandler} action={   <Button   color='blue'>
        <Icon name='search' />
 Search
      </Button>} size='huge'   placeholder='Enter  name of the city' />

      </form>

    <br />
      </center>
      </Grid.Column>

    </Grid.Row>
</Grid>

      </Container>

    )
  }
}
function mapDispatchToProps(dispatch){
return bindActionCreators(Object.assign({}, {fetchWeather}, {fetchNews}),dispatch);

}

export default connect(null,mapDispatchToProps)(SearchBar)
