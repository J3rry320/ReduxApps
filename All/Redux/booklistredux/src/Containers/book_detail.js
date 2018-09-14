import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../App.css";
import "flag-icon-css/css/flag-icon.css";
var CountryNames = require("country-list")();

class BookReducers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiArticle: ""
    };
  }
  searchWiki(bookName) {
    axios
      .get(
        "https://en.wikipedia.org/w/api.php?action=query&exintro&explaintext&origin=*",
        {
          params: {
            titles: bookName,
            exchars: 200,
            exlimit: 200,
            prop: "extracts",
            format: "json"
          }
        }
      )
      .then(result => {
        let propName = Object.keys(result.data.query.pages);

        let article = result.data.query.pages[propName].extract;

        this.setState({ wikiArticle: article });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props, this.state.wikiArticle);
    if (!this.props.activeBook) {
      return <center><h3>"Click on a book to get started"</h3></center>;
    } else {
      let classNameToAdd =
        this.props.activeBook.country != undefined &&
        CountryNames.getCode(this.props.activeBook.country) != undefined
          ? CountryNames.getCode(this.props.activeBook.country).toLowerCase()
          : "hide";
      return (
        <div className="row  full-height flow-text">

          <div className="col s12 m4">
            <img
              className="responsive-img padding-top"
              src={`/${this.props.activeBook.imageLink}`}
              alt={this.props.activeBook.title}
            />

            <div className="card-action">
              <a
                target="_blank"
                href={this.props.activeBook.link}
                className="btn-large margin-top black white-text btn-flat"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col s12 m8">
            <div className="valign-wrapper">
              <h2 className="padding-right underline">{this.props.activeBook.title}</h2>
              <div className=" padding-top-icon">
                {classNameToAdd === "hide" ? <img className="padding-left" src="/images/404.png" /> : ""}
                <span className={` flag-icon flag-icon-${classNameToAdd}`} />
              </div>
            </div>

            <em className="valign-wrapper">
              <i className="material-icons">account_circle</i>
              By:
              <span className="padding-left">
                {this.props.activeBook.author}
              </span>
            </em>
            <br />
            <strong className="valign-wrapper">
              <i className="material-icons">book</i>
              Pages:
              <span className="padding-left">
                {this.props.activeBook.pages}
              </span>
            </strong>
            <br />

            <strong className="valign-wrapper">
              <i className="material-icons">calendar_today</i>
              Year:
              <span className="padding-left">
                {this.props.activeBook.year < 0
                  ? this.props.activeBook.year.toString().substring(1) + " BC"
                  : this.props.activeBook.year + " AD"}
              </span>
            </strong>
            <br />
            <em className="valign-wrapper">
              <i className="material-icons">language</i>
              {this.props.activeBook.language}
            </em>

            <p className="flow-text">
              {this.state.wikiArticle !== "..." ? this.state.wikiArticle : ""}
              <br />
              {this.state.wikiArticle !== "..." ? (
                <a
                  href={this.props.activeBook.link}
                  className=" link"
                  target="_blank"
                >
                  Click Here and read the rest
                </a>
              ) : (
                ""
              )}
            </p>
          </div>

        </div>
      );
    }
  }
  componentDidMount() {
    if (this.props.activeBook) {
      this.searchWiki(this.props.activeBook.title);
    }
  }
  componentWillReceiveProps(props) {
    this.searchWiki(props.activeBook.title);
  }
}

function mapStateToProps(state) {
  return { activeBook: state.activeBook };
}
export default connect(mapStateToProps)(BookReducers);
