/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  Grid,
  Row,
  Col,
  Nav,
  Navbar,
  NavItem,
  Modal
} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
var Database = require('babel!svg-react!../assets/images/database.svg?name=database');
var Save = require('babel!svg-react!../assets/images/save-18.svg?name=save');
var Check = require('babel!svg-react!../assets/images/check.svg?name=check');
var Close = require('babel!svg-react!../assets/images/close.svg?name=close');
var List = require('babel!svg-react!../assets/images/list.svg?name=list');
var NavList = require('../config/navigation.json');
import {loadMenuItems} from '../actions/Menuitems';

/* Populated by react-webpack-redux:reducer */
class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('props and context : ', props, context);
    this.state = {
      currentView: props.currentView || 'General Setup'
    }
    this.viewChanged = this.viewChanged.bind(this);
    this.changeScrollIndicator = this.changeScrollIndicator.bind(this);
    this.changeScrollIndicator = _.debounce(this.changeScrollIndicator, 50);
    // Process NavList. Populate the eventKey and the names from the resource bundle
    for (var i = 0; i < NavList.length; i++) {
      var navItem = NavList[i];
      navItem.eventKey = (i + 1);
    }
  }

  componentDidMount() {
    var icon = $.parseHTML('<img class="svg listIcon" src="/assets/images/list.svg" alt="list here"><span class="centerHeader">' + this.state.currentView + '</span>');
    $('button.navbar-toggle').text('').css('border', 'none').prepend(icon);
    window.addEventListener("resize", this.changeScrollIndicator);
    console.log(this.props);
    $('.nav-view').on("click", this.viewChanged);
    setTimeout(function() {
      this.changeScrollIndicator();
    }.bind(this), 300);

  }
  changeScrollIndicator(onLoad) {
    var percent = 0;
    var top = $(window).scrollTop();
    var mbodyHeight = $(".scroll-body").height();
    var wrapperHeight = $(".modal-content").height();
    var wraperTop = $(".modal-content").offset().top;
    var mDialogTop = $(".scroll-body").offset().top;
    console.log(wraperTop, mDialogTop, mbodyHeight, wrapperHeight);
    var percent = ((wraperTop - mDialogTop) / (mbodyHeight - wrapperHeight)) * 100;
    if (mDialogTop < -50) {
      $('#scrollIndicator').css({
        width: "" + percent + "%",
        display: 'block'
      })
      $('.sidemenu').addClass('fixedTop');
      if (window.innerWidth > 1024) {
        $('#scrollIndicator,.navbar-collapse.collapse,.navbar-header,.navbar-nav').addClass('fixedTop');
        $('.navbar-brand .header,.navbar-toggle,.checkIcon').hide();
        $('.databaseIcon').show();
      } else {
        setTimeout(function() {
          if ($('.navbar-collapse.collapse').css('height') !== "1px") {
            $('.navbar-toggle').trigger('click');
          }
        }, 100);

        $('#scrollIndicator,.navbar-header').removeClass('fixedTop');
        $('.navbar-brand .checkIcon,.navbar-toggle,.centerHeader').show();
        $('.header,.databaseIcon').hide();
      }
    } else {

      $('.sidemenu,.margin-top-105').removeClass('fixedTop');
      if (window.innerWidth > 1024) {
        $('#scrollIndicator,.navbar-collapse.collapse,.navbar-header,.navbar-nav').removeClass('fixedTop');
        $('.header,.databaseIcon').show();
      } else {
        setTimeout(function() {
          var navHeight = $('.navbar-collapse.collapse').css('height');
          var isNavbar = $('.navbar-collapse.in').length;
          if ((isNavbar === 0 && navHeight === "63px") || navHeight === "1px") {
            $('.navbar-toggle').trigger('click');
          }
          $('.sidemenu,.margin-top-105').addClass('fixedTop');
          $('.navbar-brand .checkIcon,.navbar-toggle,.centerHeader').hide();
          $('.header,.databaseIcon').show();
        }, 100);
      }
      $('#scrollIndicator').css({width: "0", display: 'none'})
    }
  }
  viewChanged(event) {
    console.log(event)
    let viewText = $(event.target).closest('a').text();
    $('button.navbar-toggle').find('.centerHeader').text(viewText)
    this.props.loadMenuItems(viewText);
  }

  render() {
    return (
      <Modal bsStyle="fullscreen" id="fullscreenModal" show="true" onScroll={this.changeScrollIndicator.bind(this)}>
        <Modal.Header className="fullscreen  pull-right"></Modal.Header>
        <Grid className="scroll-body">
          <Row>
            <Navbar inverse fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Check className="checkIcon"></Check>
                  <Database className="databaseIcon"></Database>
                  <span className="header">Hotel Configuration</span>
                </Navbar.Brand>
                <Navbar.Brand className="pull-right">
                  <Close className="closeIcon"></Close>
                  <div className="rightHeader">Save</div>
                  <Save className="saveIcon"></Save>
                </Navbar.Brand>
                <Navbar.Toggle/>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={this.props.currentView || 'GENERAL SETUP'}>
                  {NavList.map(function(nav) {
                    return (
                      <LinkContainer eventKey={nav.name} to={{
                        pathname: nav.url
                      }}>
                        <NavItem className="nav-view" href="#">{nav.name}</NavItem>
                      </LinkContainer>
                    );
                  })}
                </Nav>

              </Navbar.Collapse>
              <div id="scrollIndicator"></div>
            </Navbar>
          </Row>
          <Row>
            <Col xs={3} md={3} lg={3}>
              <Nav bsStyle="pills" stacked className="sidemenu">

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
              <div >&nbsp;
              </div>
            </Col>
            <Col xs={9} md={9} lg={9}>

              <div className="margin-top-105">
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Grid>
      </Modal>
    )
  }
}

/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  loadMenuItems: PropTypes.func.isRequired,
  currentView: React.PropTypes.string
};

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  //const props = {};
  console.log('state in mapstate : ', state);
  return {currentView: state.mainMenu.currentView}
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  //const actions = {};
  const actionMap = {
    loadMenuItems: bindActionCreators(loadMenuItems, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
