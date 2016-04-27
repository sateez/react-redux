import React, {Component}from 'react'
import { connect } from 'react-redux'
import * as c from '../constants/constants'
import { render } from 'react-dom'
import * as a from '../actions'
import {bindActionCreators} from 'redux'
import { Link, browserHistory } from 'react-router'

class ContactForm extends Component {
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
       <div className="container contact-edit-form">
      	  <h1>Contact Form</h1>
      		 <div className="form-group">
      		   <label for="name">Name</label>
      		   <input type="text" className="form-control" ref="name" defaultValue={this.props.formValues.name} />

      		 </div>

      		 <div className="form-group">
      		   <label for="alterEgo">Address</label>
      		   <input type="text" className="form-control" ref="address" defaultValue={this.props.formValues.address}  />

      		 </div>

      		 <div className="form-group">
      		   <label for="power">City</label>
      		   <input type="text" className="form-control" ref="city" defaultValue={this.props.formValues.city}  />

      		 </div>
      		 <div className="form-group">
      		   <label for="power">Postal Code</label>
      		   <input type="text" className="form-control" ref="postalCode" defaultValue={this.props.formValues.postalCode}  />

      		 </div>
      		 <div className="form-group">
      		   <label for="state">State</label>
      		  <input type="text" className="form-control" ref="state" defaultValue={this.props.formValues.state}  />

      		 </div>

      		 <div className="form-group">
      		   <label for="country">Country</label>
      		  <input type="text" className="form-control" ref="country" defaultValue={this.props.formValues.country}  />

      		 </div>

      		 <div className="form-group">
      		   <label for="phone">Phone number</label>
      		  <input type="text" className="form-control" ref="phone" defaultValue={this.props.formValues.phone}  />

      		 </div>

      		 <button className="btn btn-primary edit-btn" onClick={(e) => {this.props.submitForm({
              name     : this.refs.name.value,
              address : this.refs.address.value,
              city    : this.refs.city.value,
           postalCode    : this.refs.postalCode.value,
              phone    : this.refs.phone.value,
              state    : this.refs.state.value,
              country    : this.refs.country.value,
            }); browserHistory.push('/DetailsForm')} }>Submit</button>
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
ContactForm = connect(mapStateToProps,mapDispatchToProps)(ContactForm)

export default ContactForm
