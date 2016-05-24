import React from 'react'
import { Link, browserHistory } from 'react-router'
import { SideNav, Nav } from 'react-sidenav';
import loginPic from '../images/login.jpg'
import logoPic from '../images/WAL.png'
import styles from '../styles/appStyles'
import Radium from 'radium'
import {Style} from 'radium'
var Chevdown = Radium(require('babel!svg-react!../images/chevron-down.svg?name=Chevdown'));
var Backarrow = Radium(require('babel!svg-react!../images/back-arrow.svg?name=Backarrow'));

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
  target.find('.cls-1').css('fill','#999')
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
$(document).on('mouseover','.subMenuSubListBack',(e) => {
  console.log('hovered',e.target);
$(e.target).find('.backArrow').css('color','#fff');
$(e.target).find('.cls-1').css('fill','#fff');

})
$(document).on('mouseout','.subMenuSubListBack',(e) => {
  console.log('hovered',e.target);
$(e.target).find('.backArrow').css('color','#999');
$(e.target).find('.cls-1').css('fill','#999');

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
  //target.css({'background-color':'#343434'});
  target.find('.lgListItem').css({'color':'#999'});
  target.find('li i').css({'color':'#999'});
})

const App = ({children}) => (

   <div className="col-xs-12" style={[styles.appMainWrapper]}>
  <style>
  {
  }
  </style>
  <div className="col-xs-3 noLeftRightPadding"  style={[styles.appMenu,styles.noLeftRightPadding]}>
  			<div style={[styles.appHeader]}>
  				<img className="pull-left img-responsive brandLogo" style={[styles.appHeaderLogo,styles.brandLogo]} src={logoPic} alt="logo" />
  				<div className="pull-left" style={[styles.padLeft10]}>

  				</div>
  			</div>
  			<div className="col-xs-12 noLeftRightPadding" style={[styles.appClientWrapper,styles.noLeftRightPadding]}>
  				<div className="col-xs-10 noLeftRightPadding" style={[styles.padLeft21,styles.noLeftRightPadding]}>
					<div style={[styles.font18]}> Laura Sutton </div>
					<div style={[styles.font14]}> Front Desk Associate </div>
  				</div>
  				<div className="col-xs-2 noLeftRightPadding" style={[styles.noLeftRightPadding]}>
       <Chevdown  className=' normalSvg chevdown' style={[styles.chevdown,styles.normalSvg]}/>
  				</div>
  			</div>
            <div className="col-xs-12 noLeftRightPadding" style={[styles.appSidemenuWrapper,styles.noLeftRightPadding]}>
               <div style={[styles.sideMenu,styles.noLeftRightPadding]} className='sideMenu noLeftRightPadding'>
                <div className='sideMenuHeading' style={[styles.sideMenuHeading]}> <i className='fa fa-list-ul'></i> </div>
                <div>
                  <ul className='subMenulist '   key="sublist1" style={[styles.subMenuList]}>
                    <li style={[styles.li]}> <span className="lgListItem"><i className="fa fa-th"></i><span className="listItem" style={[styles.listItem]} >Menu 1</span></span>
                    <span style={[styles.smListItem]} className="smListItem"><i className="fa fa-th" ></i></span>
                    <div className='subMenuSubList' style={[styles.subMenuSubList]}>
                    <ul  style={[styles.ul]}>
                          <li key="subMenuSubListBack1" className="subMenuSubListBack" style={[styles.subMenuSubListBack]} onClick={clickedBack}> <Backarrow style={[styles.backArrow,styles.normalSvg]} className=" backArrow normalSvg" />Back</li>
                          <li key="sublistli11" style={[styles.subListLi]}>SubItem 1</li>
                          <li key="sublistli12" style={[styles.subListLi]}>SubItem 2</li>
                          <li key="sublistli13" style={[styles.subListLi]}>SubItem 3</li>
                          <li key="sublistli14" style={[styles.subListLi]}>SubItem 4</li>
                          <li key="sublistli15" style={[styles.subListLi]}>SubItem 5</li>
                          <li key="sublistli16" style={[styles.subListLi]}>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className='subMenulist'  key="sublist2" style={[styles.subMenuList]}>
                    <li style={[styles.li]}> <span className="lgListItem"><i className="fa fa-comment-o"></i><span className="listItem"style={[styles.listItem]} >Menu 2</span></span>
                    <span className="smListItem" style={[styles.smListItem]}><i className="fa fa-comment-o"></i></span>
                       <div className='subMenuSubList' style={[styles.subMenuSubList]}>
                        <ul style={[styles.ul]}>
                          <li key="subMenuSubListBack2" className="subMenuSubListBack" style={[styles.subMenuSubListBack]} onClick={clickedBack}> <Backarrow style={[styles.backArrow,styles.normalSvg]} className=" backArrow normalSvg" />Back</li>
                          <li key="sublistli21" style={[styles.subListLi]}>SubItem 1</li>
                          <li key="sublistli22" style={[styles.subListLi]}>SubItem 2</li>
                          <li key="sublistli23" style={[styles.subListLi]}>SubItem 3</li>
                          <li key="sublistli24" style={[styles.subListLi]}>SubItem 4</li>
                          <li key="sublistli25" style={[styles.subListLi]}>SubItem 5</li>
                          <li key="sublistli26" style={[styles.subListLi]}>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className='subMenulist' key="sublist3"  style={[styles.subMenuList]}>
                    <li style={[styles.li]}> <span className="lgListItem"><i className="fa fa-folder"></i><span className="listItem" style={[styles.listItem]}>Menu 3</span></span>
                    <span className="smListItem" style={[styles.smListItem]}><i className="fa fa-folder"></i></span>
                    <div className='subMenuSubList' style={[styles.subMenuSubList]}>
                        <ul style={[styles.ul]}>
                          <li key="subMenuSubListBack3" className="subMenuSubListBack" style={[styles.subMenuSubListBack]} onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" style={[styles.backArrow,styles.normalSvg]} />Back</li>
                          <li key="sublistli31" style={[styles.subListLi]}>SubItem 1</li>
                          <li key="sublistli32" style={[styles.subListLi]}>SubItem 2</li>
                          <li key="sublistli33" style={[styles.subListLi]}>SubItem 3</li>
                          <li key="sublistli34" style={[styles.subListLi]}>SubItem 4</li>
                          <li key="sublistli35" style={[styles.subListLi]}>SubItem 5</li>
                          <li key="sublistli36" style={[styles.subListLi]}>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className='subMenulist' key="sublist4" style={[styles.subMenuList]}>
                    <li style={[styles.li]}> <span className="lgListItem"><i className="fa fa-bell"></i><span className="listItem" style={[styles.listItem]}>Menu 4</span></span>
                    <span className="smListItem" style={[styles.smListItem]}><i className="fa fa-bell"></i></span>
                       <div className='subMenuSubList' style={[styles.subMenuSubList]}>
                        <ul style={[styles.ul]}>
                          <li key="subMenuSubListBack4" className="subMenuSubListBack" style={[styles.subMenuSubListBack]} onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" style={[styles.backArrow,styles.normalSvg]} />Back</li>
                          <li key="sublistli41" style={[styles.subListLi]}>SubItem 1</li>
                          <li key="sublistli42" style={[styles.subListLi]}>SubItem 2</li>
                          <li key="sublistli43" style={[styles.subListLi]}>SubItem 3</li>
                          <li key="sublistli44" style={[styles.subListLi]}>SubItem 4</li>
                          <li key="sublistli45" style={[styles.subListLi]}>SubItem 5</li>
                          <li key="sublistli46" style={[styles.subListLi]}>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                  <ul className='subMenulist' key="sublist5" style={[styles.subMenuList]}>
                    <li style={[styles.li]}> <span className="lgListItem"><i className="fa fa-sun-o"></i><span className="listItem" style={[styles.listItem]}>Menu 5</span></span>
                    <span className="smListItem" style={[styles.smListItem]}><i className="fa fa-sun-o"></i></span>
                       <div className='subMenuSubList' style={[styles.subMenuSubList]}>
                        <ul style={[styles.ul]}>
                         <li key="subMenuSubListBack5" className="subMenuSubListBack" style={[styles.subMenuSubListBack]} onClick={clickedBack}> <Backarrow className=" backArrow normalSvg" style={[styles.backArrow,styles.normalSvg]} />Back</li>
                          <li key="sublistli51" style={[styles.subListLi]}>SubItem 1</li>
                          <li key="sublistli52" style={[styles.subListLi]}>SubItem 2</li>
                          <li key="sublistli53" style={[styles.subListLi]}>SubItem 3</li>
                          <li key="sublistli54" style={[styles.subListLi]}>SubItem 4</li>
                          <li key="sublistli55" style={[styles.subListLi]}>SubItem 5</li>
                          <li key="sublistli56" style={[styles.subListLi]}>SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                </div>
               </div>


            </div>

   </div>
   <div className="col-xs-9 main-body" style={[styles.mainBody]}>
   <div className="col-xs-12">
   		<div className="col-xs-9" style={[styles.padTop10]}>
	   		<span className="col-xs-2">ACTION</span>
	   		<span>ROOM</span>
	   		<span className="col-xs-2" >GUEST</span>
	   		<span className="col-xs-2" >PROFILE</span>
	   		<span className="col-xs-2" >RECEIPT</span>
	   		<span className="col-xs-2" >HELP</span>
   		</div>
   		<div className="col-xs-6" style={[styles.margin25]}>
	   		<div className="col-xs-2" ><i style={[styles.colorTeal]}className="fa fa-2x fa-user"> </i></div>
	   		<div className="col-xs-2" ><i style={[styles.colorTeal]}className="fa fa-2x fa-battery-full"> </i></div>
	   		<div className="col-xs-2" ><i style={[styles.colorTeal]}className="fa fa-2x fa-search-plus"> </i></div>
	   		<div className="col-xs-2" ><i style={[styles.colorTeal]}className="fa fa-2x fa-unlock-alt"> </i></div>
	   		<div className="col-xs-2" ><i style={[styles.colorTeal]}className="fa fa-2x fa-cc"> </i></div>
	   		<div className="col-xs-2" ><i style={[styles.colorTeal]}className="fa fa-2x fa-bar-chart"> </i></div>
   		</div>

   </div>
    <div id="childElement" style={[styles.appChildElement]}>{children}</div>
  </div>
  </div>
)
export default Radium(App)
