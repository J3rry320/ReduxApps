import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SelectBook from "../Actions/index";
class Booklist extends Component {
  renderlist() {
    return this.props.books.map(book => {
      return (
        <li

          onClick={e => {
            this.props.selectBook(book);
            document.body.scrollTop=0;
            document.documentElement.scrollTop = 0;
if(this.props.refProp){
  this.props.refProp()
}

          }}
          key={book.title}
          className="list-collection-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-collection">
     <li className="collection-header"><h4 className="center">Books</h4></li>
    {this.renderlist()}</ul>;
  }
  componentDidMount(){
    console.log(this.props)
  }

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: SelectBook }, dispatch);
}
function mapStateToProps(state,ownProps) {

  return {
    books: state.books,

  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);
