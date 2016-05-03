import React from 'react'
import { Link, browserHistory } from 'react-router'
import loginPic from '../images/login.jpg'
import logoPic from '../images/WAL.png'

var Chevdown = require('babel!svg-react!../images/chevron-down.svg?name=Chevdown');
var Backarrow = require('babel!svg-react!../images/back-arrow.svg?name=Backarrow');

var selected = 'dashboard';
const updateSelection = (e) => {
    browserHistory.push('/'+e.id)
};
const showChild = (e) => {
  console.log($(this).find('.subMenuSubList'),e)
  $(this).find('.subMenuSubList').css({'visibility':'visible'})
}
const clickedBack = (e) => {
  console.log('clicked back');
   $(e.target).css({'color':'#999'});
  $('.subMenuSubList').hide();
  $('.subMenulist').css({'width':'100%','background-color':'#343434'})
  $('.subMenusubList li, .subMenusubList li fa').css({'background-color':'#343434'})
  $('.sideMenuHeading').css({"padding-left":"45%"})
  $('.lgListItem').show()
  $('.smListItem').hide()
}
$(document).on('click','.subMenulist',(e) => {
  console.log('clicked',e.target);
  setTimeout(() =>{
    $('.subMenulist').css({'background-color':'#343434'});
  var target = $(e.target).closest('.subMenulist');
  target.css({'background-color':'#56A1F6'});
  target.find('.subMenuSubList').show();
  $('.subMenulist').css({'width':'56px','padding-left':'22px'});
  $('.lgListItem').hide()
  $('.smListItem').show()
  $('.sideMenuHeading').css({"padding-left":"22px"})
  },100)

})
$(document).on('click','.subMenuSubList li',(e) => {
  console.log('clicked',e.target);
  $('.subMenuSubList li').css({'color':'#999'});
  //var target = $(e.target).closest('.subMenuSubList');
  $(e.target).css({'color':'#56A1F6'});
  e.stopPropagation();
})
$(document).on('mouseover','.subMenulist',(e) => {
  console.log('hovered',e.target);
    var target = $(e.target).closest('.subMenulist');
  //target.css({'background-color':'#434343'});
  target.find('.lgListItem').css({'color':'#FFF'});
  target.find('li i').css({'color':'#56A1F6'});
  target.find('.fa-arrow-left').css({'color':'#999'});
})
$(document).on('mouseover','.subMenuSubList li',(e) => {
  console.log('hovered',e.target);
  if($(e.target).css('color')!=='rgb(86, 161, 246)'){
    $(e.target).css({'color':'#FFF'})
  }
    e.stopPropagation();
})
$(document).on('mouseover','.subMenuSubList',(e) => {
  console.log('hovered',e.target);

    e.stopPropagation();
})
$(document).on('mouseout','.subMenuSubList li',(e) => {
  console.log('hovered',e.target);
  console.log($(e.target).css('color'));
  if($(e.target).css('color')!=='rgb(86, 161, 246)'){
    $(e.target).css({'color':'#999'})
  }
    e.stopPropagation();
})
$(document).on('mouseout','.subMenuSubList',(e) => {
  console.log('hovered',e.target);
    e.stopPropagation();
})
$(document).on('mouseout','.subMenulist',(e) => {
  console.log('hovered',e.target);
    var target = $(e.target).closest('.subMenulist');
  target.find('.lgListItem').css({'color':'#999'});
  target.find('li i').css({'color':'#999'});
})

const App = ({children}) => (

   <div className="col-xs-12" style={{padding:0,height:'1080px'}}>
  <style>
  {
    '.sideMenu{height:500px;width:250px}'+
     '.noPadding{padding:0}'+
     '.noLeftRightPadding{padding-left:0;right-padding:0}'+
     '.sideMenuHeading{height:51px;padding-left:45%;padding-top:19px;margin-bottom:8px;}'+
     '.subMenulist{height:51px;padding-top:15px;list-style-type: none;}'+
     '.subMenulist i.fa:hover{color:#56A1F6}'+
     '.subMenulist:hover{background-color:#424242}'+
     '.subMenuSubList ul{padding:0}'+
     '.subMenulist li{color:#999}'+
     '.subMenuSubList li:hover{color:#FFF}'+
     '.subMenuSubList{display:none;position: absolute;height: 878px;background-color: #080808;top: 0;width: 194px;left: 56px;}'+
     '.subMenuSubList li{ height:51px; list-style-type:none;padding-top:15px;padding-left:29px;color:#999;}'+
     '.subMenuSubList .fa-arrow-left {padding-right:10px}'+
     '.listItem{padding-left:30px}'+
     '.smListItem{display:none}'+
     '.brandLogo{padding: 10px 60px;opacity: .8;background: url(static/images/login.jpg);background-size: cover;}'+
     '.main-body{margin:0;padding:0;width:calc(100% - 250px)}'+
     '.normalSvg{position: relative;height:20px;width:20px;}'+
     '.cls-1{fill:#DBDBDB !important;}'+
     '.cls-1:hover{fill:#56A1F6 !important;}'+
     '.chevdown{margin-top:15px;height:12px;color:#56A1F6;}'+
     '.backArrow{width: 15px;margin-right: 5px; padding-top: 10px;}'+
     '.backArrow .cls-1{fill:#999 !important}'+
     '.backArrow .cls-1:hover{fill:#FFF !important}'
  }
  </style>
  <div className="col-xs-3 noLeftRightPadding"  style={{width:'250px',padding:0,margin:0,backgroundColor:'#999'}}>
  			<div style={{height:35+'px',lineHeight:20+'px'}}>
  				<img className="pull-left img-responsive brandLogo" style={{padding:'20px 60px'}} src={logoPic} alt="logo" />
  				<div className="pull-left" style={{paddingLeft:10+'px'}}>

  				</div>
  			</div>
  			<div className="col-xs-12 noLeftRightPadding" style={{height:'62px',backgroundColor:'#232323',color:'#ececec',fontWeight:'14px',margin:'0',padding:'8px 5px 6px 5px'}}>
  				<div className="col-xs-10 noLeftRightPadding" style={{paddingLeft:'21px'}}>
					<div style={{fontSize:'18px'}}> Laura Sutton </div>
					<div style={{fontSize:'14px',color:'#94A1AC'}}> Front Desk Associate </div>
  				</div>
  				<div className="col-xs-2 noLeftRightPadding" style={{color:'#56A1F6'}} >
       <Chevdown className=' normalSvg chevdown' style={{color:'#56A1F6'}}  />
  				</div>
  			</div>
            <div className="col-xs-12 noLeftRightPadding" style={{background: '#343434', color: '#FFF',height:878+'px'}}>
               <div className='sideMenu noLeftRightPadding'>
                <div className='sideMenuHeading'> <i className='fa fa-list-ul'></i> </div>
                <div>
                  <ul className='subMenulist ' >
                    <li> <span className="lgListItem"><i className="fa fa-th"></i><span className="listItem">Menu 1</span></span>
                    <span className="smListItem"><i className="fa fa-th" ></i></span>
                    <div className='subMenuSubList'>
                        <ul >
                          <li onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" />Back</li>
                          <li>SubItem 1</li>
                          <li>SubItem 2</li>
                          <li>SubItem 3</li>
                          <li>SubItem 4</li>
                          <li>SubItem 5</li>
                          <li>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className='subMenulist'>
                    <li> <span className="lgListItem"><i className="fa fa-comment-o"></i><span className="listItem">Menu 2</span></span>
                    <span className="smListItem"><i className="fa fa-comment-o"></i></span>
                       <div className='subMenuSubList'>
                        <ul>
                          <li onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" />Back</li>
                          <li>SubItem 1</li>
                          <li>SubItem 2</li>
                          <li>SubItem 3</li>
                          <li>SubItem 4</li>
                          <li>SubItem 5</li>
                          <li>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className='subMenulist' >
                    <li> <span className="lgListItem"><i className="fa fa-folder"></i><span className="listItem">Menu 3</span></span>
                    <span className="smListItem"><i className="fa fa-folder"></i></span>
                    <div className='subMenuSubList'>
                        <ul>
                          <li onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" />Back</li>
                          <li>SubItem 1</li>
                          <li>SubItem 2</li>
                          <li>SubItem 3</li>
                          <li>SubItem 4</li>
                          <li>SubItem 5</li>
                          <li>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className='subMenulist'>
                    <li> <span className="lgListItem"><i className="fa fa-bell"></i><span className="listItem">Menu 4</span></span>
                    <span className="smListItem"><i className="fa fa-bell"></i></span>
                       <div className='subMenuSubList'>
                        <ul>
                          <li onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" />Back</li>
                          <li>SubItem 1</li>
                          <li>SubItem 2</li>
                          <li>SubItem 3</li>
                          <li>SubItem 4</li>
                          <li>SubItem 5</li>
                          <li>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                  <ul className='subMenulist'>
                    <li> <span className="lgListItem"><i className="fa fa-sun-o"></i><span className="listItem">Menu 5</span></span>
                    <span className="smListItem"><i className="fa fa-sun-o"></i></span>
                       <div className='subMenuSubList'>
                        <ul>
                          <li onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" />Back</li>
                          <li>SubItem 1</li>
                          <li>SubItem 2</li>
                          <li>SubItem 3</li>
                          <li>SubItem 4</li>
                          <li>SubItem 5</li>
                          <li>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                </div>
               </div>


            </div>

   </div>
   <div className="col-xs-9 main-body" >
   <div className="col-xs-12">
   		<div className="col-xs-9" style={{paddingTop:'10px'}}>
	   		<span className="col-xs-2">ACTION</span>
	   		<span>ROOM</span>
	   		<span className="col-xs-2" >GUEST</span>
	   		<span className="col-xs-2" >PROFILE</span>
	   		<span className="col-xs-2" >RECEIPT</span>
	   		<span className="col-xs-2" >HELP</span>
   		</div>
   		<div className="col-xs-6" style={{margin:25+'px'}}>
	   		<span className="col-xs-2" ><i style={{color:"#56A1F6"}}className="fa fa-2x fa-user"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#56A1F6"}}className="fa fa-2x fa-battery-full"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#56A1F6"}}className="fa fa-2x fa-search-plus"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#56A1F6"}}className="fa fa-2x fa-unlock-alt"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#56A1F6"}}className="fa fa-2x fa-cc"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#56A1F6"}}className="fa fa-2x fa-bar-chart"> </i></span>
   		</div>

   </div>
    <div id="childElement" style={{ paddingTop: '1.5em', height:'100%' }}>{children}</div>
  </div>
  </div>
)
export default App
