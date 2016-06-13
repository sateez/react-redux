import React from 'react';
var DropdownButton =  require('react-bootstrap').DropdownButton;
var MenuItem =  require('react-bootstrap').MenuItem;
var Chevdown = require('babel!svg-react!../images/chevron-down.svg?name=Chevdown');
import css from '../css/navigationDropDown.css'
var Dropdown = React.createClass({

	render:function(){
		return(
			<div id="custom-dropdown">
			<Chevdown  className=' tealChevron chevdown colorTeal normalSvg  '/>
			<DropdownButton bsStyle="default chevrons" title="" key="1" noCaret id={`split-button-basic-1`}>

		<MenuItem className="disabled" eventKey="1">Front desk Associate</MenuItem>
		<MenuItem eventKey="2">User settings</MenuItem>
		<MenuItem eventKey="3">Db settings</MenuItem>
		<MenuItem eventKey="4">Log off</MenuItem>
		</DropdownButton>
		</div>
		)
	}
})

export default Dropdown
