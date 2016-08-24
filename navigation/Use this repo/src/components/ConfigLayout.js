import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {AutoAffix} from 'react-overlays';
import Waypoint from 'react-waypoint';
import ScrollingProgressBar from './ScrollingProgressBar';
import {Link} from 'react-router';

// Import SVG files
var DatabaseSvg = require('babel!svg-react!../assets/images/database.svg?name=database');
var SaveSvg = require('babel!svg-react!../assets/images/save-18.svg?name=save');
var CheckSvg = require('babel!svg-react!../assets/images/check.svg?name=check');
var CloseSvg = require('babel!svg-react!../assets/images/close.svg?name=close');
var ListSvg = require('babel!svg-react!../assets/images/list.svg?name=list');

// Import navigation
var NavList = require('../config/navigation.json');

// Constants
const NAV_AFFIX_OFFSET = -120;
const SIDE_NAV_AFFIX_OFFSET = 50;

class ConfigLayout extends Component {

  constructor(props) {
    super(props);

    // Bind functions
    this.handleAffixed = this.handleAffixed.bind(this);
    this.handleAffixedTop = this.handleAffixedTop.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.scrollToId = this.scrollToId.bind(this);
    this.createNavId = this.createNavId.bind(this);
    this.handleSectionSelect = this.handleSectionSelect.bind(this);
    this.renderWaypoint = this.renderWaypoint.bind(this);

    // Set initial state
    this.state = {
      navIndex: 0,
      subNavIndex: 0,
      sectionIndex: 0,
      affix: false
    };
    Element.prototype.documentOffsetTop = function() {
      return this.offsetTop + (this.offsetParent
        ? this.offsetParent.documentOffsetTop()
        : 0);
    };
  }

  // Updates the affix state to true when the nav is no longer affixed
  handleAffixed() {
    this.setState({affix: true});
  }

  // Updates the affix state to false when the nav is affixed
  handleAffixedTop() {
    this.setState({affix: false});
  }

  // Handles the nav click event when the view is changed to update state view indexes
  handleNavClick(navIndex, subNavIndex) {
    this.setState({navIndex: navIndex, subNavIndex: subNavIndex, sectionIndex: 0});

    // FIXME: Is this needed? If so, should first check if window is not null/undefined
    window.scrollTo(0, 0);
    // If the nav if affixed, then scroll the window back to the top of the data area
    // if (this.state.affix) {
    //   window.scrollTo(0, Math.abs(NAV_AFFIX_OFFSET) + 1);
    // }
  }

  // Updates the sectionIndex state when the section is clicked within the navigation
  // or when the section is scrolled to
  handleSectionSelect(sectionIndex) {
    this.setState({sectionIndex: sectionIndex});
  }

  scrollToId(index, id, event) {
    event.stopPropagation();
    this.setState({sectionIndex: index});
    //this.renderWaypoint(index);
    //document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
    var top = document.getElementById(id).documentOffsetTop() - (window.innerHeight / 2);
    window.scrollTo(0, top)
    console.log(id, document.getElementById(id));
    return false;
  }

  // Generates the nav id
  createNavId(navIndex, subNavIndex, sectionIndex) {
    return 'nav-' + navIndex + '-' + subNavIndex + '-' + sectionIndex;
  }

  // Renders the title and waypoint breakpoint for the sub menu section
  renderWaypoint(sectionIndex) {

    // FIXME: Ideally should not have to perform the index out of bounds check.
    // Should be removed later once we start building out the actual components
    let sections = NavList[this.state.navIndex].subNav[this.state.subNavIndex].sections;
    var title = sections && sections < sections.length
      ? sections[sectionIndex].name
      : 'Missing Section Title';

    return (
      <h5 id={this.createNavId(this.state.navIndex, this.state.subNavIndex, sectionIndex)}>
        {title}
        <Waypoint onEnter={() => {
          this.handleSectionSelect(sectionIndex);
        }}/>
      </h5>
    );
  }

  render() {
    // Add functions to the child props
    var childProps = {
      renderWaypoint: this.renderWaypoint,
      handleSectionSelect: this.handleSectionSelect
    }

    // Clone child elements and add in additional child props
    var childNodes = React.Children.map(this.props.children, (child) => React.cloneElement(child, childProps));

    return (
      <Grid className='config'>
        <Row>
          <AutoAffix affixClassName='affix' viewportOffsetTop={NAV_AFFIX_OFFSET} onAffixed={this.handleAffixed} onAffixedTop={this.handleAffixedTop}>
            <Navbar inverse>
              <Navbar.Header>
                <Navbar.Brand>
                  <CheckSvg className='checkIcon'/>
                  <DatabaseSvg className='databaseIcon'/>
                  <span className='header'>Hotel Configuration</span>
                </Navbar.Brand>
                <Navbar.Brand className='pull-right'>
                  <CloseSvg className='closeIcon'/>
                  <span className='rightHeader'>SAVE</span>
                  <SaveSvg className='saveIcon'/>
                </Navbar.Brand>
                <Navbar.Toggle className='tButton'>
                  <ListSvg className='svg'/>
                  <span className='centerHeader'>{NavList[this.state.navIndex].name}</span>
                </Navbar.Toggle>
              </Navbar.Header>
              <Navbar.Collapse className={this.state.affix
                ? ''
                : 'in'}>
                <Nav activeKey={this.createNavId(this.state.navIndex, 0, 0)}>
                  {NavList.map((nav, navIndex) => {
                    return (
                      <LinkContainer eventKey={this.createNavId(navIndex, 0, 0)} to={{
                        pathname: nav.url
                      }}>
                        <NavItem onClick={() => {
                          this.handleNavClick(navIndex, 0)
                        }} className='nav-view'>{nav.name}</NavItem>
                      </LinkContainer>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
              <ScrollingProgressBar scrollId='scroll-body'/>
            </Navbar>
          </AutoAffix>
        </Row>
        <Row >
          <AutoAffix viewportOffsetTop={SIDE_NAV_AFFIX_OFFSET} affixClassName='Affixed-SideMenu'>
            <Col xs={3} md={3} lg={3}>
              <Nav bsStyle='pills' stacked className='sidemenu' activeKey={this.createNavId(this.state.navIndex, this.state.subNavIndex, 0)}>
                {NavList[this.state.navIndex].subNav.map((subNav, subNavIndex) => {
                  return (
                    <LinkContainer eventKey={this.createNavId(this.state.navIndex, subNavIndex, 0)} to={{
                      pathname: NavList[this.state.navIndex].url + subNav.url
                    }}>
                      <NavItem className='sideNav-view' onClick={() => {
                        this.handleNavClick(this.state.navIndex, subNavIndex)
                      }}>
                        {subNav.name}
                        <Nav bsStyle='pills' stacked className={'subSideMenu' + (this.state.subNavIndex === subNavIndex
                          ? ''
                          : ' hidden')} activeKey={this.createNavId(this.state.navIndex, this.state.subNavIndex, this.state.sectionIndex)}>
                          {subNav.sections.map((section, sectionIndex) => {
                            return (
                              <LinkContainer eventKey={this.createNavId(this.state.navIndex, subNavIndex, sectionIndex)} to={{
                                pathname: '#' + this.createNavId(this.state.navIndex, subNavIndex, sectionIndex)
                              }}>
                                <NavItem onClick={() => {
                                  this.handleSectionSelect(sectionIndex)
                                }}>{section.name}
                                  -
                                </NavItem>
                              </LinkContainer>
                            );
                          })}
                        </Nav>
                      </NavItem>
                    </LinkContainer>
                  );
                })}
              </Nav>
              <div>&nbsp;
              </div>
            </Col>
          </AutoAffix>
          <Col xs={9} md={9} lg={9} id='scroll-body' className='dataArea' style={{
            marginTop: (this.state.affix
              ? 300
              : 0) + 'px'
          }}>
            {childNodes}
          </Col>
        </Row>
      </Grid>
    )
  }
}
ConfigLayout.contextTypes = {
  router: React.PropTypes.object
}
export default ConfigLayout;
