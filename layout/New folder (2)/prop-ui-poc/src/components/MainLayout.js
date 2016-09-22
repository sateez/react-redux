import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  Row,
  Col,
  Nav,
  NavItem,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../assets/styles/_main-layout.scss';
import routes from '../config/routes';
import {RouterUtils} from '@prop-ui/common';

// Import SVG files
var BackSvg = require('babel!svg-react!../assets/images/back.svg?name=list');
var ListSvg = require('babel!svg-react!../assets/images/list.svg?name=list');
var ChevdownSvg = require('babel!svg-react!../assets/images/chevron-down.svg?name=list');

class MainLayout extends Component {
  constructor(props) {
    super();
    this.state = {
      primaryListItem: undefined,
      secondaryListItem: undefined
    }

    this.handlePrimaryNav = this.handlePrimaryNav.bind(this);
    this.handleSecondaryNav = this.handleSecondaryNav.bind(this);
    this.createNavId = this.createNavId.bind(this);
    this.renderRolesMenu = this.renderRolesMenu.bind(this);
    this.renderPrimaryList = this.renderPrimaryList.bind(this);
    this.renderSecondaryList = this.renderSecondaryList.bind(this);
    this.rolesMenu = [
      {
        'name': 'Front Desk Associate'
      }, {
        'name': 'User Settings'
      }, {
        'name': 'DB Maintainance'
      }, {
        'name': 'Logout'
      }
    ]
  }

  // on click of primary navigation item it shows the secondary navigation menu
  handlePrimaryNav(key) {
    this.setState({primaryListItem: key})
  }

  // on click of primary navigation item it shows the secondary navigation menu
  handleSecondaryNav(key) {}

  // Generates the nav id
  createNavId(primaryListItem, secondaryListItem) {
    return 'layout-' + primaryListItem + '-' + secondaryListItem;
  }

  // function to render the dropdown menu in roles section
  renderRolesMenu(rolesMenuItem) {
    return (
      <MenuItem className={rolesMenuItem.name === 'Front Desk Associate'
        ? 'front-desk-item'
        : ''} eventKey={rolesMenuItem.eventKey}>{rolesMenuItem.name}</MenuItem>
    )
  }

  //function to render the primary and secondary navigation menus
  renderPrimaryList(primaryListItem, index) {
    console.log(primaryListItem, index);
    return (
      <div >

        <LinkContainer key={this.createNavId(index, 0)} eventKey={this.createNavId(index, 0)} to={RouterUtils.formatURL(primaryListItem.url, this.props.routeParams)}>
          <NavItem className='primary-list-item' onClick={() => {
            this.handlePrimaryNav(index)
          }}>
            <div >
              <i className={'glyphicon glyphicon-' + primaryListItem.logo + ' primary-list-item-icon'}/>{primaryListItem.key}
            </div>
          </NavItem>
        </LinkContainer>
        <Nav className={index === this.state.primaryListItem
          ? ' active slider-wrapper'
          : 'slider-wrapper'}>
          <div className='back-btn-wrapper' onClick={() => {
            this.handlePrimaryNav(undefined)
          }}>
            <BackSvg className='back-icon'/>
            <span className='back-btn'>Back
            </span>
            <i className={'selected-icon glyphicon glyphicon-' + primaryListItem.logo}></i>
          </div>
          {primaryListItem.childRoutes.map(this.renderSecondaryList)}
        </Nav>
      </div>
    )
  }

  //function to render the  secondary navigation menu items
  renderSecondaryList(secondaryListItem, index) {
    console.log(secondaryListItem, index);
    return (
      <LinkContainer key={this.createNavId(this.state.primaryListItem, index)} eventKey={this.createNavId(this.state.primaryListItem, index)} to={RouterUtils.formatURL(secondaryListItem.url, this.props.routeParams)}>

        <NavItem className='secondaryListItem '>{secondaryListItem.key}</NavItem>
      </LinkContainer>
    )
  }

  //method that renders the entire main layout component
  render() {
    return (
      <Grid>
        <Row >
          <Col className='navigation'>
            <div className='navigationWrapper'>
              <div className='navigationIconWrapper'>
                <div className='navigationIcon'/>
              </div>
              <div className='navigationRolesWrapper'>
                <div className='rolesWrapper'>
                  <div className='userName'>Laura Sutton</div>
                  <div className='userRole'>Front Desk Associate</div>
                </div>
                <div className='rolesMenu'>
                  <div className='dropdown-wrapper'>
                    <ChevdownSvg className='chevdown'/>
                    <DropdownButton bsStyle='default' bsSize='lg' noCaret title=''>
                      <div className='arrow-up'/> {this.rolesMenu.map(this.renderRolesMenu)}
                    </DropdownButton>
                  </div>
                </div>
              </div>
              <div className={(this.state.primaryListItem !== undefined)
                ? 'navigationToggleWrapper toggledSecondaryNavigation'
                : 'navigationToggleWrapper'}>
                <div className='navigationToggleHeader'>
                  <ListSvg className='listIcon '/>
                </div>
                <Nav activeKey='this.state.primaryNav'>
                  {this.props.routes.childRoutes.map(this.renderPrimaryList)}
                </Nav>
              </div>
            </div>
          </Col>
          <Col className='dataArea'>
            <div >{this.props.children}</div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

MainLayout.propTypes = {
  routes: PropTypes.object.isRequired
};

export default MainLayout;
