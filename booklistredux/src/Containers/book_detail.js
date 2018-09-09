import React, { Component } from "react";
import { connect } from "react-redux";
import '../App.css'

class BookReducers extends Component {
  render() {

    console.log(this.props, this.props.books);
    if (!this.props.activeBook) {
      return "Click on a book to get started";
    }
    return (
      <div className="row">
        <div className="col s4">
          <img
            className="responsive-img"
            src={`/${this.props.activeBook.imageLink}`}
          />
        </div>
        <div className="col s8">
          <h3> {this.props.activeBook.title}</h3>
          <em className="valign-wrapper">
            <i className="material-icons">account_circle</i>
            By:
            {this.props.activeBook.author}
          </em>
          <br/>
          <strong className="valign-wrapper">
            <i className="material-icons">book</i>
            Pages:
            {this.props.activeBook.pages}


          </strong>
          <br/>
<strong className="valign-wrapper">
<i className="material-icons">calendar_today</i>
            Year:
            {this.props.activeBook.year}
</strong>
<br/>
          <em className="valign-wrapper">
            <i className="material-icons">language</i>
            {this.props.activeBook.language}
          </em>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { activeBook: state.activeBook };
}
export default connect(mapStateToProps)(BookReducers);
