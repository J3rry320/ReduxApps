import React, { Component } from 'react';
import Booklist from '../Containers/book_list';
import BookDetails from '../Containers/book_detail'
export default class Home extends Component{
constructor(props){
    super(props);
    this.showBookList=this.showBookList.bind(this)
}
    showBookList(){
if(this.refs.listForMobile){
    console.log(this.refs.listForMobile.classList)
    this.refs.listForMobile.classList.value==="hide"?this.refs.listForMobile.classList.remove("hide"):this.refs.listForMobile.classList.add("hide");
}


    }
render(){

    return(
        <div className="row">
        <div className="hide-on-med-and-up">

        <i onClick={e=>{this.showBookList()}} className="material-icons padding-top-icon">
notes
</i>


      </div>
      <div className="hide-on-med-and-up">
      <div ref="listForMobile" className="hide">
      <Booklist  refProp={this.showBookList} />
      </div>
      </div>


            <div className="col  hide-on-small-only m3">
            <Booklist refProp={this.showBookList}/>
            </div>
            <div className="col s12  m9">
            <BookDetails />
            </div>

        </div>
    )
}
}