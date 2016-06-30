import React from 'react';
import { Link, browserHistory } from 'react-router';
import css from '../styles/primaryNavigation.css';
var Chevdown = require('babel!svg-react!../images/chevron-down.svg?name=Chevdown');
var Backarrow = require('babel!svg-react!../images/back-arrow.svg?name=Backarrow');
var ListIcon = require('babel!svg-react!../images/list.svg?name=ListIcon');
var Check =  require('babel!svg-react!../images/check.svg?name=Check');
var Edit =  require('babel!svg-react!../images/edit.svg?name=Edit');
var Signin =  require('babel!svg-react!../images/login.svg?name=Signin')
import styleable from 'react-styleable';
var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var Checkbox = require('react-bootstrap').Checkbox;
var Radio = require('react-bootstrap').Radio;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Table = require('react-bootstrap').Table;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var Modal  =  require('react-bootstrap').Modal ;


const Components = (props) => (

 <div className="container">

 <div> Primary </div>
 <br />
 <div>States</div>
 <hr />
 <Button  bsStyle="success" bsSize="small"> Save </Button>
 <br />
 <hr />
 <Button  bsStyle="primary" bsSize="small"> Add </Button>
 <br />
 <hr />
 <Button  bsStyle="primary" bsSize="small"><Signin /> Add </Button>
 <br />
 <hr />
 <Button  bsStyle="option" bsSize="xsmall"> Cancel </Button>
 <br />
 <hr />

 <div>Sizes</div>
 <br />
 <Button  bsStyle="primary" bsSize="large"><Signin /> SIGN IN </Button>
 <br />
 <hr />
 <Button  bsStyle="primary" bsSize="small"> Add </Button>
 <br />
 <hr />

 <Button  bsStyle="primary" bsSize="xsmall"> Update </Button>

 <br />
 <hr />
 <div>Icon Btn </div>
 <br />
 <div>States </div>
 <br />
<div className="icon-btn">
 <Edit />
</div>

 <br />
 <hr />
 <div>Secondary</div>
 <div>States</div>
 <br />
 <div className="icon-btn">
 <Edit />
<label>Edit</label>
 </div>
 <br />
 <hr />
 <div className="col-xs-5">
 <FormGroup>
 <ControlLabel htmlFor="exampleInputEmail1">
 Hotel Name
 </ControlLabel>



 <FormControl
 type="email"
 id="exampleInputEmail1"
 placeholder="Disabled"
 disabled/>



 </FormGroup>



 <FormGroup>



 <ControlLabel htmlFor="exampleInputEmail1">
 Hotel Name
 </ControlLabel>
 <FormControl
 type="email"
 id="exampleInputEmail1"
 placeholder="Enter Name" />
 </FormGroup>
 </div>
 <br />
 <div className="clearfix"></div>
 <hr />
 <div>Which is your hotel brand ?</div>
 <div className="dropdown-wrapper">
  <Chevdown  className=' tealChevron chevdown colorTeal normalSvg  '/>
  <DropdownButton bsStyle='default'  noCaret title="default">
       <MenuItem eventKey="1">Option 1</MenuItem>
       <MenuItem eventKey="2">Option 2</MenuItem>
       <MenuItem eventKey="3" active>Option 3</MenuItem>
       <MenuItem eventKey="4">Option 4</MenuItem>
     </DropdownButton>
 </div>
 <br />
 <div className="clearfix"></div>
 <hr />
<div>
<div>Would you like to require any of the following at guest check in ?</div>

<div className="pull-left">
 <Checkbox defaultChecked >
 <span className="cr">
 <i className="cr-icon glyphicon glyphicon-ok"></i>
 </span>
 Yes
 </Checkbox>
 </div>
 <div className="pull-left">
 <Checkbox defaultChecked >
 <span className="cr">
 <i className="cr-icon glyphicon glyphicon-ok"></i>
 </span>
 Yes
 </Checkbox>
 </div>
 <div className="pull-left">
 <Checkbox defaultChecked >
 <span className="cr">
 <i className="cr-icon glyphicon glyphicon-ok"></i>
 </span>
 Yes
 </Checkbox>
 </div>
 <div className="pull-left">
 <Checkbox defaultChecked >
 <span className="cr">
 <i className="cr-icon glyphicon glyphicon-ok"></i>
 </span>
 Yes
 </Checkbox>
 </div>
 </div>
 <div className="clearfix"></div>
 <br />
 <hr />

 <div className="col-sm-12">
<div>What is your property ownership ?</div>

 <FormGroup>

 <Radio name="testradio" >
 <span className="cr">
 <i className="cr-icon fa fa-circle"></i>
 </span>
 <label>
 Yes
 </label>
 </Radio>
 <Radio defaultChecked name="testradio">
 <span className="cr">
 <i className="cr-icon fa fa-circle"></i>
 </span>
 <label>
 No
 </label>
  </Radio>
 </FormGroup>
 </div>

 <br />

<div className="clearfix"></div>

 <hr />
 <Panel header="Requesting code settings">
 Panel content(table yet to be implemented)
 </Panel>


 <br />



 <hr />



 <ListGroup>



 <ListGroupItem>
 HOTEL DEFAULTS
 </ListGroupItem>



 <ListGroupItem>
 GROUP RESERVATIONS
 </ListGroupItem>



 <ListGroupItem>
 LOCAL INFO
 </ListGroupItem>



 <ListGroupItem>
 RECEIPT SETUP
 </ListGroupItem>



 <ListGroupItem>
 REQUEST CODES
 </ListGroupItem>


 <ListGroupItem>
 CURRENCY
 </ListGroupItem>



 </ListGroup>



 <br />



 <hr />


 <Nav bsStyle="pills" >


 <NavItem className="active">
 GENERAL SETUP
 </NavItem>


 <NavItem>
 ROOMS
 </NavItem>


 <NavItem>
 HOUSEKEEPING
 </NavItem>

 <NavItem>
 POSTING
 </NavItem>


 <NavItem>
 REPORTS
 </NavItem>


 </Nav>


 <br />



 <hr />


 <Nav bsStyle="pills" stacked >


 <NavItem className="active">
 GENERAL SETUP
 </NavItem>


 <NavItem>
 ROOMS
 </NavItem>


 <NavItem>
 HOUSEKEEPING
 </NavItem>

 <NavItem>
 POSTING
 </NavItem>


 <NavItem>
 REPORTS
 </NavItem>


 </Nav>


 <br />



 <hr />

  <Table responsive striped  condensed hover>
      <thead>
        <tr>
          <th>CODE</th>
          <th>DESCRIPTION</th>
          <th>TYPE</th>
          <th>USED ON LOCATION</th>
          <th>ROOM FEAT</th>
          <th>HOUSEKEEPING REQ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         <td>24</td>
          <td>24 hours conference Guests</td>
          <td>Disability</td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
        </tr>
        <tr>
          <td>CR</td>
          <td>Accessable rooms @ check in</td>
          <td>None</td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
        </tr>
        <tr>
          <td>RJ</td>
          <td>Adjacent room @ check in</td>
          <td>None</td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
          <td><Checkbox defaultChecked >
          <span className="cr">
          <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          </Checkbox></td>
        </tr>
      </tbody>
    </Table>

 <br />



 <hr />



 <div
 className="alert  alert-save alert-dismissible"
 role="alert">



 <button
 type="button"
 className="close"
 data-dismiss="alert"
 aria-label="Close">



 <span aria-hidden="true">&times;</span>



 </button>



 <Check className="alert-heading">


 </Check>



 <div className="message"> Updates Saved ! </div>



 </div>



 </div>



)
export default styleable(css)(Components);
