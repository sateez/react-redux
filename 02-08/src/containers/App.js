/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AutoAffix} from 'react-overlays';
//var sprite = require('./my-sprite');
var classNames = require('classnames');
import {
  Grid,
  Row,
  Col,
  Nav,
  Navbar,
  NavItem,
  Modal,
  ProgressBar
} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
//import Icon from './Icon';
//import database from '../assets/images/database.svg';
//import close from '../assets//images/close.svg';
var Database = require('babel!svg-react!../assets/images/database.svg?name=database');
var Save = require('babel!svg-react!../assets/images/save-18.svg?name=save');
var Check = require('babel!svg-react!../assets/images/check.svg?name=check');
var Close = require('babel!svg-react!../assets/images/close.svg?name=close');
var List = require('babel!svg-react!../assets/images/list.svg?name=list');
var NavList = require('../config/navigation.json');
//import {loadMenuItems, setSideMenuItem, setSubSideMenuItem} from '../actions/Menuitems';

/* Populated by react-webpack-redux:reducer */
class HeaderButton extends Component {
  constructor(props) {
    super(props);
    console.log("-----------------------", props);
  }
  render() {
    return (
      <div className={this.props.centerHeaderCls}>
        <img className="svg listIcon" src="/assets/images/list.svg" alt="list" />
        <div className="centerHeader ">{this.props.viewName} </div>
      </div>
    )
  }
}
class Progress extends Component {
  constructor(props) {
    super(props);
    // console.log("-----------------------", props);
  }
  render() {
    return (
      <div id={this.props.id}  className={this.props.classes}>
        <ProgressBar  now={this.props.percent} />
      </div>
    )
  }
}
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentView: this.props.currentView,
      currentSideView: this.props.currentSideView,
      currentSubSideView: this.props.currentSubSideView,
      currentViewIndex : this.props.currentViewIndex
    }
    // console.log('props and context : ', props, context);
    this.scrollPosition = 0;
    this.viewChanged = this.viewChanged.bind(this);
    this.getEventKey = this.getEventKey.bind(this);
    this.getViewName = this.getViewName.bind(this);
    this.sideViewChanged = this.sideViewChanged.bind(this);
    this.setSideView = this.setSideView.bind(this);
    this.setSubSideView = this.setSubSideView.bind(this);
    this.setSubSideMenuItem = this.setSubSideMenuItem.bind(this);
    //this.changeScrollIndicator = this.changeScrollIndicator.bind(this);
    this.changeScrollIndicator = _.debounce(_.throttle(this.changeScrollIndicator, 150), 150).bind(this);
    // Process NavList. Populate the eventKey and the names from the resource bundle
    for (var i = 0; i < NavList.length; i++) {
      var navItem = NavList[i];
      navItem.eventKey = (i + 1);
    }
  }

  componentDidMount() {
    // var icon = $.parseHTML('<img class="svg listIcon" src="/assets/images/list.svg" alt="list here"><span class="centerHeader">' + this.state.currentView + '</span>');
    // $('button.navbar-toggle').text('').css('border', 'none').prepend(icon);
    // console.log(ReactDOM.findDOMNode(this.refs.tButton))
    //ReactDOM.render(<HeaderButton viewName={this.props.currentView}/>, ReactDOM.findDOMNode(this.refs.tButton));
    console.log(this);
    window.addEventListener("resize", this.changeScrollIndicator);
    document.addEventListener('scroll', this.changeScrollIndicator);


    //     $(window).scroll(function() {
    //     clearTimeout(timeout);  
    //     timeout = setTimeout(function() {
    //       this.changeScrollIndicator;
    //     }, 50);
    // });
    //// console.log(this.props);
    setTimeout(function () {
      this.changeScrollIndicator();     
    }.bind(this), 300);
  }
  changeScrollIndicator(event) {
    // console.log(event);
    var percent = 0;
    var top = $(window).scrollTop();
    var mbodyHeight = document.getElementsByClassName("scroll-body")[0].clientHeight;
    var wrapperHeight = window.innerHeight
    var wraperTop = document.body.scrollTop;
    var mDialogTop = document.getElementsByClassName("scroll-body")[0].offsetHeight;
    this.percent = ((wraperTop + wrapperHeight) / mbodyHeight) * 100;
    ////console.log(percent,wraperTop, mDialogTop, mbodyHeight, wrapperHeight,ReactDOM.findDOMNode(this.refs.tButton).offsetHeight);
    //this.scrollPosition = event.srcElement.scrollingElement.scrollTop;
    this.scrollPosition = Math.abs(document.getElementsByClassName('margin-top-105')[0].getBoundingClientRect().top);
    // console.log(this.scrollPosition, window.innerWidth);

    if (this.scrollPosition > 100) {
      // $('#scrollIndicator').css({
      //   width: "" + this.percent + "%"
      // })
      //$('.sidemenu').addClass('fixedTop');
      if (window.innerWidth > 1024) {
        //$('.navbar-collapse.collapse,.navbar-header,.navbar-nav').addClass('fixedTop');
        //$('.navbar-brand .header,.navbar-toggle').hide();
        //$('.databaseIcon').show();
      } else {
        //setTimeout(function() {
        if ($('.navbar-collapse.collapse').css('height') !== "1px") {
          $('.navbar-toggle').trigger('click');
        }
        //}, 100);

        //$('.navbar-header').removeClass('fixedTop');
        //$('.centerHeader').show();
        //$('.header,.databaseIcon').hide();
      }
    } else {

      //$('.margin-top-105').removeClass('fixedTop');
      if (window.innerWidth > 1024) {
        // $('.navbar-collapse.collapse,.navbar-header,.navbar-nav').removeClass('fixedTop');
        //$('.header,.databaseIcon').show();
      } else {
        setTimeout(function () {
          var navHeight = $('.navbar-collapse.collapse').css('height');
          var isNavbar = $('.navbar-collapse.in').length;
          if ((isNavbar === 0 && (navHeight === "63px") || navHeight === "1px")) {
            $('.navbar-toggle').trigger('click');
          }
          //$('.margin-top-105').addClass('fixedTop');
          //$('.centerHeader').hide();
          //$('.header,.databaseIcon').show();
        }, 100);
      }
      //$('#scrollIndicator').css({width: "0", display: 'none'})
    }
    this.forceUpdate();
  }
  getcurrentIndex(viewText) {
    return _.findIndex(NavList.mainMenu, (view) => {
      return view.name == viewText;
    });
  }
  getEventKey(viewText) {
    var index = this.getcurrentIndex(viewText);
    if (index !== -1) {
      console.log(NavList.mainMenu[index].eventKey);
      return NavList.mainMenu[index].eventKey;
    }
  }
  getViewName() {
    console.log(this.state);
    var key = this.state.currentView;
    var index = _.findIndex(NavList.mainMenu, (view) => {
      console.log("view event Key:", view.eventKey == key);
      return view.eventKey == key;
    });
    console.log("getViewName : ", index);
    if (index !== -1) {
      console.log(NavList.mainMenu[index].name);
      return NavList.mainMenu[index].name
    }
  }
  getNextSideView(viewText) {
    var index = this.getcurrentIndex(viewText);
    return NavList.mainMenu[index].sideMenu[0].eventKey;
  }
  getNextSubSideView(viewText) {
    var index = this.getcurrentIndex(viewText);
    return NavList.mainMenu[index].sideMenu[0].subCategories[0].eventKey;
  }
  viewChanged(event) {
    // console.log(event.target.innerText, this.props, ReactDOM.findDOMNode(this.refs.tButton))
    if (this.scrollPosition >= 100 && window.innerWidth <= 1240) {
      ReactDOM.findDOMNode(this.refs.tButton).click();
    }
    //this.props.loadMenuItems(event.target.innerText);
    console.log('get event key : ', this.getEventKey(event.target.innerText))
    this.setState({
      currentView: this.getEventKey(event.target.innerText),
      currentSideView:this.getNextSideView(event.target.innerText),
      currentSubSideView:this.getNextSubSideView(event.target.innerText),
      currentViewIndex : this.getcurrentIndex(event.target.innerText)
    })
    setTimeout(() => { window.scrollTo(0, 20); }, 300);
  }
  sideViewChanged(nav) {
    // console.log('this: ', nav);
    window.scrollTo(0, 20);
    //this.props.setSideMenuItem(nav.name);
    this.setState({
      currentSideView: nav.eventKey
    })
    setTimeout(() => {
      //this.props.setSubSideMenuItem(nav.subCategories[0].name);
      console.log('this:----------- ', nav);
      this.setState({
        currentSubSideView: nav.subCategories[0].eventKey
      })
    }, 50)
  }
  setSideView(nav) {
    // console.log('set side view : ', this);
    return (
      <NavItem className="sideNav-view" onClick={() => { this.sideViewChanged(nav) } } eventKey={nav.eventKey} >{nav.name}
        <Nav bsStyle="pills" stacked className="subSideMenu" activeKey={this.state.currentSubSideView}>
          {nav.subCategories.map((subnav, k) => {
            return this.setSubSideView(nav, subnav);
          }) }
        </Nav>

      </NavItem>
    );
  }
  setSubSideView(nav, subnav) {
    // console.log('set sub side view : ', nav,subnav);
    return (
      <NavItem className={ nav.eventKey === this.state.currentSideView ? "" : "hidden"  } eventKey={subnav.eventKey}  href={"#" + subnav.id}>{subnav.name} -</NavItem>
    );
  }
  setSubSideMenuItem(subSide) {
    console.log('this:-----------2 ', subSide);
    this.setState({
      currentSubSideView: subSide
    })
  }
  onAffix() {
    console.log('yippee');
  }
  render() {
    this.navBarHeaderCls = classNames({
      "": this.scrollPosition > 100 && window.innerWidth <= 1024 || this.scrollPosition < 100 && window.innerWidth > 1024,
      "fixedTop": this.scrollPosition > 100 && window.innerWidth > 1024
    });
    this.centerHeaderCls = classNames({
      "hide-element": window.innerWidth <= 1024 && this.scrollPosition <= 100,
      "show-element": window.innerWidth > 1024 || (window.innerWidth <= 1024 && this.scrollPosition > 100)
    });
    this.brandToggleCls = classNames({
      "show-element": this.scrollPosition > 100 && window.innerWidth <= 1024,
      "hide-element": (this.scrollPosition > 100 && window.innerWidth > 1024) || (this.scrollPosition <= 100 && window.innerWidth <= 1024)
    });
    this.sideMenuCls = classNames({
      "": this.scrollPosition <= 100 && window.innerWidth > 1024,
      "fixedTop": this.scrollPosition > 100 || (this.scrollPosition <= 100 && window.innerWidth <= 1024)
    });
    this.scrollIndCls = classNames({
      "": this.scrollPosition <= 100,
      "fixedTop": this.scrollPosition > 100
    });
    this.fixedCls = classNames({
      "": this.scrollPosition <= 100,
      "fixedTop": this.scrollPosition > 100 && window.innerWidth > 1024
    });
    this.removedFixedCls = classNames({
      "": this.scrollPosition > 100,
      "fixedTop": this.scrollPosition > 100 && window.innerWidth > 1024
    });
    this.headerCls = classNames({
      "show-element": this.scrollPosition <= 100 && window.innerWidth > 1024,
      "hide-element": this.scrollPosition > 100 || (this.scrollPosition <= 100 && window.innerWidth <= 1024)
    })
    this.databaseCls = classNames({
      "show-element": this.scrollPosition <= 100 && window.innerWidth <= 1024,
      "hide-element": this.scrollPosition > 100 && window.innerWidth <= 1024
    })
    this.marginTop105 = classNames({
      "": this.scrollPosition <= 100 && window.innerWidth > 1024,
      "fixedTop": this.scrollPosition <= 100 && window.innerWidth <= 1024,
    })
    this.checkIconCls = classNames({
      "show-element": (this.scrollPosition > 100 && window.innerWidth <= 1024),
      "hide-element": (this.scrollPosition > 100 && window.innerWidth > 1024) || (this.scrollPosition <= 100 && window.innerWidth > 1024)
    })
    var propsToChild = {
      setSubSideMenuItem: this.setSubSideMenuItem,
      currentView: this.state.currentView,
      currentSideView: this.state.currentSideView,
      currentSubSideView: this.state.currentSubSideView
    }
    var childNodes = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, propsToChild)
    );
    return (
      <Grid className="scroll-body" >
        <Row>
          <AutoAffix viewportOffsetTop={0}  affixClassName="satz" onAffixedTop={this.onAffix() }>
          <Navbar inverse  >
            <Navbar.Header className={this.navBarHeaderCls + " " + this.fixedCls}>
              <Navbar.Brand>
                <Check className={"checkIcon " + this.checkIconCls}></Check>
                <Database className={"databaseIcon " + this.databaseCls}></Database>
                <span className={"header " + this.headerCls}>Hotel Configuration</span>
              </Navbar.Brand>
              <Navbar.Brand className="pull-right">
                <Close className="closeIcon"></Close>
                <div className="rightHeader">Save</div>
                <Save className="saveIcon"></Save>
              </Navbar.Brand>
              <Navbar.Toggle className="tButton" ref="tButton">
                <HeaderButton centerHeaderCls={this.centerHeaderCls} viewName={this.getViewName() }/>
              </Navbar.Toggle>
            </Navbar.Header>
            <Navbar.Collapse className={this.fixedCls}>
              <Nav activeKey={this.state.currentView } className={this.fixedCls}>
                {NavList.mainMenu.map((nav, i) => {
                  return (
                    <LinkContainer  eventKey={nav.eventKey} to={{
                      pathname: nav.url
                    }}>
                      <NavItem onClick={this.viewChanged} className="nav-view" href="#">{nav.name}</NavItem>
                    </LinkContainer>
                  );
                }) }
              </Nav>

            </Navbar.Collapse>
            <Progress id="scrollIndicator" percent={this.percent} classes={this.scrollIndCls} ref="scrollIndicator"></Progress>
          </Navbar>
            </AutoAffix>
        </Row>
        <Row>
          <Col xs={3} md={3} lg={3}>
            <Nav bsStyle="pills" stacked className={'sidemenu ' + this.sideMenuCls} activeKey={this.state.currentSideView}>
              {NavList.mainMenu[this.state.currentViewIndex].sideMenu.map(this.setSideView) }
            </Nav>

            <div >&nbsp;
            </div>
          </Col>
          <Col xs={9} md={9} lg={9}>

            <div className={"margin-top-105 " + this.marginTop105} >
              {childNodes}

            </div>
          </Col>
        </Row>
      </Grid>
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
  setSideMenuItem: PropTypes.func.isRequired,
  setSubSideMenuItem: PropTypes.func.isRequired,
  currentView: React.PropTypes.string,
  currentSideView: React.PropTypes.string,
  currentSubSideView: React.PropTypes.string
};
App.defaultProps = {
  currentView: "mm1",
  currentSideView: "sm1",
  currentSubSideView: "p1",
  currentViewIndex : 0
}
// function mapStateToProps(state) {
//   /* Populated by react-webpack-redux:reducer */
//   //const props = {};
//   // console.log('state in mapstate : ', state);
//   return {
//     currentView: state.mainMenu.currentView,
//     currentSideView: state.mainMenu.currentSideView,
//     currentSubSideView: state.mainMenu.currentSubSideView
//   }
// }

// function mapDispatchToProps(dispatch) {
//   /* Populated by react-webpack-redux:action */
//   //const actions = {};
//   const actionMap = {
//     loadMenuItems: bindActionCreators(loadMenuItems, dispatch),
//     setSideMenuItem: bindActionCreators(setSideMenuItem, dispatch),
//     setSubSideMenuItem: bindActionCreators(setSubSideMenuItem, dispatch)
//   };
//   return actionMap;
// }

export default App;
