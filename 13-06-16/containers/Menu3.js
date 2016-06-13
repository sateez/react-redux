import React, {Component}from 'react'
import { connect } from 'react-redux'
import * as c from '../constants/constants'
import { render } from 'react-dom'
import * as a from '../actions'
import {bindActionCreators} from 'redux'
import { Link, browserHistory } from 'react-router'

class Menu3 extends Component {
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
 console.log(this.props.formValues);

 console.log(a);
      return (
      <div style={{paddingLeft:'20px'}}>
        Menu 3 Content Goes here
      </div>
      )
}
}


function mapStateToProps(state){
 console.log('executing mapStateToProps');
 return {
  formValues:state.formValues
 }
}
function mapDispatchToProps(dispatch){
 console.log('executing mapDispatchToProps');
 return bindActionCreators({submitForm:a.submitForm},dispatch)
}
Menu3 = connect(mapStateToProps,mapDispatchToProps)(Menu3)

export default Menu3
