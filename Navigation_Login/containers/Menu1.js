import React, {Component}from 'react'
import { connect } from 'react-redux'
import * as c from '../constants/constants'
import { render } from 'react-dom'
import * as a from '../actions'
import {bindActionCreators} from 'redux'
import { Link, browserHistory } from 'react-router'

class Menu1 extends Component {
 //  getRefValues : function(){
 // var data =
 // console.log(formValues);
 // var temp = {}
 // for(var key in data){
 // temp[key]= formValues.value;
 // }
 // console.log(temp);
 // }
render(){
 console.log(this.props.itemName);

 console.log(a);
      return (
      <div style={{paddingLeft:'20px'}}>
        Welcome to Embassy Suites
      </div>
      )
}
}


function mapStateToProps(state){
 console.log('executing mapStateToProps');
 return {
  formValues:state.itemName
 }
}
function mapDispatchToProps(dispatch){
 console.log('executing mapDispatchToProps');
 return bindActionCreators({sideMenuSelection:a.sideMenuSelection},dispatch)
}
Menu1 = connect(mapStateToProps,mapDispatchToProps)(Menu1)

export default Menu1
