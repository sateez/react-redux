import React, {PropTypes} from 'react';
import css from '../styles/configurationModal.css'
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
var List =  require('babel!svg-react!../images/list.svg?name=list');

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
      var percent = ((wraperTop-mDialogTop-54)/(mbodyHeight-wrapperHeight))*100
      if(mDialogTop<-70){
        //$('.modal-header').css({position:'fixed',top:'10px','z-index':'9999'})
        $('#scrollbar-progress').css({width:""+percent+"%",display:'block'})
        $('.sidemenu-list').css({position:"fixed",top:"75px"})
        $('.nav-navigation').css({display:'hide'})

        $('.dbMain').css({'display':'none'})
        $('.modal-header').css({'background':'#555','z-index':'999'})
        $('.modal-header path.cls-1').css('fill','#FFF')
        $('.modal-header .closeIcon').addClass('fill')
        if($(document).width()>1026){
         $('.heading-dup-list').css({display:'block'})
        }else{
         $('.single-dup-list-item').css({display:'block'})
        }
      }else{


        $('#scrollbar-progress').css({width:""+percent+"%",display:'none'})
        $('.sidemenu-list').css({position:"block",top:'inherit'})
        $('.nav-navigation').css({display:'block'})
        $('.heading-dup-list,.single-dup-list-item').css({display:'none'})
        $('.dbMain').css({'display':'inline'})
        $('.modal-header .closeIcon').removeClass('fill')
        $('.modal-header').css({'background':'#FFF'})
        $('.modal-header path.cls-1').css('fill','#000')
        $('.dup-sub-menu-list').hide();
        $('#scrollbar-progress').css({'top':'16px'})
        if($(document).width()>1026){

        }else{

        }
      }
      //console.log('mbody Height : ',percent,mbodyHeight,mDialogTop,percent,$(document).height(),screen.height);
})
    },1000)

  },
  scroll(){
  },
  handleSelect(){
    alert('selected');
  },
  showMenuList(){
   $('.dup-sub-menu-list').show();
   $('#scrollbar-progress').animate({'top':'10px'})
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

<Modal id="modal-main" show={this.state.showModal}  onHide={this.close} onscroll="this.scroll()">
<Modal.Header >

<div className="modal-header-wrapper">
<Database  className="dbIcon" /><div className="dbMain" >Database Maintainance</div>
</div>
<Close className="closeIcon" onClick={this.close} />
<div className="center-align">
<ul className="heading-dup-list"  >
<li className="heading-dup-list-item active"  >GENERAL SETUP </li>
<li className="heading-dup-list-item"  >ROOMS</li>
<li className="heading-dup-list-item" >HOUSEKEEPING</li>
<li className="heading-dup-list-item"  >POSTING</li>
<li className="heading-dup-list-item" >ACCOUNTS RECEIVABLE</li>
</ul>
<div className="single-dup-list-item"  onClick={this.showMenuList}>
<List className="listIcon" />
<span className="single-dup-list-item-text">GENERAL SETUP</span>
</div>

</div>
<div className="dup-sub-menu-list">
<ul className="subHeading-dup-list"  >
<li className="subHeading-dup-list-item active"  >GENERAL SETUP </li>
<li className="subHeading-dup-list-item"  >ROOMS</li>
<li className="subHeading-dup-list-item" >HOUSEKEEPING</li>
<li className="subHeading-dup-list-item"  >POSTING</li>
<li className="subHeading-dup-list-item" >ACCOUNTS RECEIVABLE</li>
</ul>
</div>
<div id="scrollbar-progress"></div>
</Modal.Header>
<Modal.Body >
<div className="col-md-12 modal-body-header">
<ul className="heading-list" >
<li className="heading-list-item active" >GENERAL SETUP </li>
<li className="heading-list-item"  >ROOMS</li>
<li className="heading-list-item" >HOUSEKEEPING</li>
<li className="heading-list-item"  >POSTING</li>
<li className="heading-list-item" >ACCOUNTS RECEIVABLE</li>
</ul>
</div>
<div className="col-md-12">
<div className="col-md-3">

<ul className="sidemenu-list" >
<li className="sidemenu-list-item active" >Property Info </li>
<li className="sidemenu-list-item"  >Frisbees</li>
<li className="sidemenu-list-item" >Bacon</li>
<li className="sidemenu-list-item"  >Breakfast Tacos</li>
<li className="sidemenu-list-item" >Portchops</li>
</ul>
</div>
<div className="col-md-8 content-area">


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
