import React, {PropTypes} from 'react';
import css from '../css/modal.css'
import styleable from 'react-styleable'
var Popover =  require('react-bootstrap').Popover;
var Tooltip =  require('react-bootstrap').Tooltip;
var Button =  require('react-bootstrap').Button;
var Modal  =  require('react-bootstrap').Modal ;
var Nav  =  require('react-bootstrap').Nav ;
var NavItem  =  require('react-bootstrap').NavItem ;
var OverlayTrigger  =  require('react-bootstrap').OverlayTrigger ;
var Database =  require('babel!svg-react!../images/database.svg?name=database');
var Close =  require('babel!svg-react!../images/close.svg?name=close');

const ModalDialog = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
      setTimeout(function(){
      var percent = 0;
      var top = $(window).scrollTop();
      var mbodyHeight = $(".modal-body").height();
      var wrapperHeight = $(".modal-content").height();
      $('.modal-content').scroll(function() {
        var wraperTop = $(".modal-content").offset().top;

      var mDialogTop = $(".modal-body").offset().top;
      var percent = ((wraperTop-mDialogTop)/(mbodyHeight-wrapperHeight))*100
      if(mDialogTop<-15){
        //$('.modal-header').css({position:'fixed',top:'10px','z-index':'9999'})
        $('#scrollbar-progress').css({width:""+percent+"%",display:'block'})
        $('.nav-sec-navigation').css({position:"fixed",top:"75px"})
        $('.nav-navigation').css({display:'hide'})
        $('.navigation-duplicate').css({display:'block'})
        $('.dbMain').css({'display':'none'})
        $('.modal-header').css({'background':'#555','z-index':'999'})
        $('.modal-header path.cls-1').css('fill','#9B9B9B')
      }else{
        $('#scrollbar-progress').css({width:""+percent+"%",display:'none'})
        $('.nav-sec-navigation').css({position:"block",top:'inherit'})
        $('.nav-navigation').css({display:'block'})
        $('.navigation-duplicate').css({display:'none'})
        $('.dbMain').css({'display':'inline'})
        $('.modal-header').css({'background':'#FFF'})
        $('.modal-header path.cls-1').css('fill','#000')

      }
      //console.log('mbody Height : ',percent,mbodyHeight,mDialogTop,percent,$(document).height(),screen.height);
})
    },1000)

  },
  scroll(){
    console.log('invs');



   /* var mbody_height = $(".modal-body").height();
      console.log('mbody_height function: ',mbody_height);
       //var mbody_top = $(".modal-body").offset().top;
   $('.modal-content').on('shown',function(){
    $('.modal-content').scroll(function (){
      var mbody_height = $(".modal-body").height();
      console.log('mbody_height : ',mbody_height);
   })
   })*/
  },
  handleSelect(){
    alert('selected');
  },
  render() {

    let props = this.props;
    console.log('PROPS : ',props);
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >Open Modal
        </Button>

        <Modal id="sateez" show={this.state.showModal}  onHide={this.close} onscroll="this.scroll()">
          <Modal.Header >

  <div style={{float:'left',paddingLeft:'30px'}}>
          <Database  style={{height:'23px',width:'22px',marginRight:'16px'}} /> <span className="dbMain" style={{fontSize:'22px',color:'#282626'}}>Database Maintainance</span>
          </div>
          <Close style={{float:'right',height:'22px',width:'22px',position:'relative',right:'56px',cursor:'pointer'}} onClick={this.close} />
           <div style={{float:'right'}}>
          <Nav align='center' className="navigation-duplicate" bsStyle="" activeKey={1} onSelect={this.handleSelect}>
    <NavItem eventKey={1} href="/home">GENERAL SETUP </NavItem>
    <NavItem eventKey={2} title="Item">ROOMS</NavItem>
    <NavItem eventKey={3} title="">HOUSEKEEPING</NavItem>
    <NavItem eventKey={4} title="">POSTING</NavItem>
    <NavItem eventKey={5} title="">ACCOUNTS RECEIVABLE</NavItem>
  </Nav>
  </div>
          <div id="scrollbar-progress"></div>
          </Modal.Header>
          <Modal.Body >
          <div className="col-md-12">
          <Nav className="navigation" bsStyle="navigation" activeKey={1} onSelect={this.handleSelect}>
    <NavItem eventKey={1} href="/home">GENERAL SETUP </NavItem>
    <NavItem eventKey={2} title="Item">ROOMS</NavItem>
    <NavItem eventKey={3} title="">HOUSEKEEPING</NavItem>
    <NavItem eventKey={4} title="">POSTING</NavItem>
    <NavItem eventKey={5} title="">ACCOUNTS RECEIVABLE</NavItem>
  </Nav>
  </div>
<div className="col-md-12">
<div className="col-md-3">

<Nav bsStyle="sec-navigation" stacked activeKey={6} onSelect={this.handleSelect}>
    <NavItem eventKey={1}>Property Info</NavItem>
      <NavItem eventKey={2}>Frisbees</NavItem>
      <NavItem eventKey={3}>Bacon</NavItem>
      <NavItem eventKey={4}>Breakfast Tacos</NavItem>
      <NavItem eventKey={5}>Porkchops</NavItem>
  </Nav>
  </div>
  <div className="col-md-3">
    <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

  </div>
  </div>

            </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default ModalDialog
