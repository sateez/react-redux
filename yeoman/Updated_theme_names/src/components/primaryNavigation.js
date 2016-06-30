import React from 'react';
import { Link, browserHistory } from 'react-router';
import loginPic from '../images/login.jpg';
import logoPic from '../images/WAL.png';
import css from '../styles/primaryNavigation.css';
var Chevdown = require('babel!svg-react!../images/chevron-down.svg?name=Chevdown');;
var Backarrow = require('babel!svg-react!../images/back-arrow.svg?name=Backarrow');;
var ListIcon = require('babel!svg-react!../images/list.svg?name=ListIcon');;
var Check =  require('babel!svg-react!../images/check.svg?name=Check');
import styleable from 'react-styleable';
import  ModalDialog from './configurationModal';
import Dropdown from './NavigationDropDown';
import SubMenuItem from './secondaryNavigation';
var selected = 'dashboard';
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
const updateSelection = (e) => {
 browserHistory.push('/'+e.id)
};
const showChild = (e) => {
 $(this).find('.subMenuSubList').addClass('visible')
}

$(document).on('click','.subMenulist',(e) => {

 $('.subMenuSubList').css('display','none');
 $(".subListli").removeClass('fillTeal').removeClass('white');

 setTimeout(() =>{
  $('.subMenulist').css({'background-color':'#343434'});
  var target = $(e.target).closest('.subMenulist');

  if($(document).width()>1026){
   $('.lgListItem').hide()
   $('.smListItem').show()
  }else{
   var icon = target.find('.fa');
   icon.addClass('targetIcon');
   $('li.subListli').css({'text-align':'left','padding-left':'24px'})
   $('.smListItem').hide()
  }
  setTimeout(function(){
   $('.lgListItem').css('visibility','hidden');
   $('.targetIcon').css('visibility','visible');
  },0)
  target.css({'background-color':'#56A1F6'});
  target.find('.subMenuSubList').toggle('slide',{direction:'right'},200);
  target.find('.cls-1').addClass('lightgray')
  $('.subMenulist').animate({'width':'56px','padding-left':'22px'});

  target.find('.smListItem .fa').addClass('white').removeClass('lightgray').removeClass('fillTeal');
  $('.sideMenuHeading').animate({"padding-left":"22px"})

  $('.sidemenuWrapper').find('.fa').each(function(){
   if($(this).closest('.subMenulist').css('background-color') !== 'rgb(86, 161, 246)'){
    $(this).addClass('lightgray').removeClass('white');
   }
  })
 },100)


})
$(document).on('click','.tealChevron',(e) => {
 $(e.target).parent().find('.clientActions').toggle();
})
$(document).on('click','.subMenuSubList li',(e) => {
 $('.subMenuSubList li').addClass('lightgray').removeClass('fillTeal');
 $(e.target).addClass('fillTeal');
 e.stopPropagation();
})

$(document).on('mouseover','.subMenuSubList li',(e) => {
 if($(e.target).css('color')!=='rgb(86, 161, 246)'){
  $(e.target).addClass('white').removeClass('lightgray');
  $(e.target).find('.backArrow').addClass('white').removeClass('lightgray');;
  $(e.target).find('.cls-1').addClass('fillWhite').removeClass('lightgray');;
 }
 e.stopPropagation();
})
$(document).on('mouseover','.subMenuSubList',(e) => {
 e.stopPropagation();
})
$(document).on('click','.subMenuSubList',(e) => {
 e.stopPropagation();
})
$(document).on('mouseover','.subMenuSubListBack ',(e) => {
 $(e.target).parent().find('.cls-1').addClass('fillWhite').removeClass('lightgray');
 $(e.target).parent().find('span').addClass('fillWhite').removeClass('lightgray');
})
$(document).on('mouseout','.subMenuSubListBack',(e) => {
 $(e.target).find('.cls-1').addClass('lightgray').removeClass('fillWhite');
 //$(e.target).find('span').addClass('lightgray').removeClass('fillWhite');
})
$(document).on('mouseout','.subMenuSubList li',(e) => {
 if($(e.target).css('color')!=='rgb(86, 161, 246)'){
  $(e.target).addClass('lightgray').removeClass('white')
 }
 e.stopPropagation();
})
$(document).on('mouseout','.subMenuSubList',(e) => {
 e.stopPropagation();
})

$(document).on('mouseover','.smListItem',(e) => {
 //e.stopPropagation();
})
$(document).on('mouseover','.subMenulist',(e) => {
 var target = $(e.target).closest('.subMenulist');
 target.find('.lgListItem,.listItem').addClass('white').removeClass('lightgray');
 target.find('.fa').each(function(){
  if($(this).closest('.subMenulist').css('background-color') !== 'rgb(86, 161, 246)'){
   $(this).addClass('fillTeal');
  }
 })
})
$(document).on('mouseout','.subMenulist',(e) => {
 var target = $(e.target).closest('.subMenulist');
 target.find('.lgListItem,.listItem').each(function(){
  if($(this).css('color') !== 'rgb(86, 161, 246)'){
   $(this).addClass('lightgray').removeClass('fillTeal');
  }
 })
 target.find('.fa').each(function(){
  if($(this).css('color') !== 'rgb(255, 255, 255)'){
   $(this).addClass('lightgray').removeClass('fillTeal');
  }
 })
})
const MENUS = [{label:'Menu 1',logo:'th'},{label:'Menu 2',logo:'comment-o'},{label:'Menu 3',logo:'folder'},{label:'Menu 4',logo:'bell'},{label:'Menu 5',logo:'sun-o'}];
const App = (props) => (

 <div className={props.css.appMainWrapper}>



  <div className="fullHeightWidth ">



   <div className={props.css.appMenu +" "+ props.css.noLeftRightPadding +" col-xs-3 "}>



    <div className='appHeader'>



     <img
      className={"pull-left img-responsive "+props.css.appHeaderLogo +" "+ props.css.brandLogo}
      src={logoPic}
      alt="logo" />



     <div className={"pull-left"+props.css.padLeft10}>




     </div>



    </div>



    <div className={"col-xs-12 "+props.css.appClientWrapper +" "+ props.css.noLeftRightPadding}>



     <div className={"col-xs-10 "+props.css.padLeft21}>



      <div className={props.css.clientName}> Laura Sutton </div>



      <div className={props.css.clientRole}> Front Desk Associate </div>



     </div>



     <div className={"col-xs-2 "+ props.css.noLeftRightPadding}>



      <Dropdown />



     </div>



    </div>



    <div className={"col-xs-12 "+props.css.appSidemenuWrapper +" "+  props.css.noLeftRightPadding}>



     <div className={'sideMenu' + props.css.sideMenu+ ' ' +props.css.noLeftRightPadding} >



      <div className={'sideMenuHeading '+ props.css.sideMenuHeading}>


       <ListIcon className={props.css.normalSvg1}/>


      </div>



      <div className="sidemenuWrapper">


       {MENUS.map(SubMenuItem)}
      </div>



     </div>





    </div>




   </div>



   <div className={"col-xs-9 "+props.css.mainBody}>



    <div className="col-xs-12">



     <div className={"col-xs-9"+props.css.padTop10}>



      <span className="col-xs-2">ACTION</span>



      <span>ROOM</span>



      <span className="col-xs-2" >GUEST</span>



      <span className="col-xs-2" >PROFILE</span>



      <span className="col-xs-2" >RECEIPT</span>



      <span className="col-xs-2" >HELP</span>



     </div>



     <div
      className="col-xs-6"
      className={props.css.margin25}>



      <div className="col-xs-2" >


       <i className={props.css.colorTeal+" fa fa-2x fa-user"}>


       </i>


      </div>



      <div className="col-xs-2" >


       <i className={props.css.colorTeal+" fa fa-2x fa-battery-full"}>


       </i>


      </div>



      <div className="col-xs-2" >


       <i className={props.css.colorTeal+" fa fa-2x fa-search-plus"}>


       </i>


      </div>



      <div className="col-xs-2" >


       <i className={props.css.colorTeal+" fa fa-2x fa-unlock-alt"}>


       </i>


      </div>



      <div className="col-xs-2" >


       <i className={props.css.colorTeal+" fa fa-2x fa-cc"}>


       </i>


      </div>



      <div className="col-xs-2" >


       <i className={props.css.colorTeal+" fa fa-2x fa-bar-chart"}>


       </i>


      </div>







    <div
     id="childElement"
     className={props.css.appChildElement}>


     {props.children}
    </div>



   </div>



  </div>



 </div>
 </div>
 </div>
)
export default styleable(css)(App)
