import React, { Component } from 'react';
import Booklist from '../Containers/book_list';
import BookDetails from '../Containers/book_detail'
export default class Home extends Component{
render(){
    return(
        <div className="row">
            <div className="col s5 m3">
            <Booklist/>
            </div>
            <div className="col s7 m9">
            <BookDetails/>
            </div>

        </div>
    )
}
}