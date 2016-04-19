import React, {Component}from 'react'
import { connect } from 'react-redux'
import * as c from '../constants/constants'
import { render } from 'react-dom'
import * as a from '../actions'
import {bindActionCreators} from 'redux'
import { Link, browserHistory } from 'react-router'

class DetailsForm extends Component {
render(){
 console.log(this.props.formValues);

  return (
   <div className="container contact-form">
         <h2>Sample Management Screen </h2>
       <div className="row">
      <div className="col-xs-3">Name</div>
      <div className="col-xs-9  pull-left">{this.props.formValues.name}</div>
       </div>
       <div className="row">
      <div className="col-xs-3">Address</div>
      <div className="col-xs-9 pull-left">{this.props.formValues.address}</div>
       </div>
       <div className="row">
      <div className="col-xs-3">City</div>
      <div className="col-xs-9 pull-left">{this.props.formValues.city}</div>
       </div>
       <div className="row">
      <div className="col-xs-3">Postal Code</div>
      <div className="col-xs-9 pull-left">{this.props.formValues.postalCode}</div>
       </div>

     <div className="row">
      <div className="col-xs-3">State</div>
      <div className="col-xs-9 pull-left">{this.props.formValues.state}</div>
       </div>

       <div className="row">
      <div className="col-xs-3">Country</div>
      <div className="col-xs-9 pull-left">{this.props.formValues.country}</div>
       </div>

       <div className="row">
      <div className="col-xs-3">Phone Number</div>
      <div className="col-xs-9 pull-left">{this.props.formValues.phone}</div>
       </div>


       <button className="btn btn-primary submit-btn" onClick={(e) => {this.props.editForm(this.props.formValues); browserHistory.push('/ContactForm')}}>Edit</button>
        </div>
  )
}
}
function mapStateToProps(state){
 console.log('executing mapStateToProps',state);
 return {
  formValues:state.formValues
 }
}
function mapDispatchToProps(dispatch){
 console.log('executing mapDispatchToProps');
 return bindActionCreators({editForm:a.editForm},dispatch)
}
DetailsForm = connect(mapStateToProps,mapDispatchToProps)(DetailsForm)

export default DetailsForm
