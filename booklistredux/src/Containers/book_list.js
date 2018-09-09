import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SelectBook from "../Actions/index";
class Booklist extends Component {
  renderlist() {
    return this.props.books.map(book => {
      return (
        <li
          className="collection-item"
          onClick={e => {
            this.props.selectBook(book);
            document.body.scrollTop=0;
            document.documentElement.scrollTop = 0;
          }}
          key={book.link}
          className="collection-item justify"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">
     <li className="collection-header"><h4 className="center">Books</h4></li>
    {this.renderlist()}</ul>;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: SelectBook }, dispatch);
}
function mapStateToProps(state) {
  return {
    books: state.books
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);
