import React from 'react'
import { Link, browserHistory } from 'react-router'
import loginPic from '../images/login.jpg'
import logoPic from '../images/WAL.png'
import css from '../css/app.css'
var Chevdown = require('babel!svg-react!../images/chevron-down.svg?name=Chevdown');
var Backarrow = require('babel!svg-react!../images/back-arrow.svg?name=Backarrow');
var ListIcon = require('babel!svg-react!../images/list.svg?name=ListIcon');
import styleable from 'react-styleable'
import  ModalDialog from './Modal'
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
   $(e.target).css({'color':'#94A1AC'});
   var target = $(e.target).closest('.subMenuSubList');
   if($(document).width()>1026){
  $('.lgListItem').show()
  }else{
    var icon = $(e.target).parent().find('.fa');
   target.parent().find('.fa').css({position: 'relative', top: '0', right: '0','z-index':0})
   $('li.subListli').css({'text-align':'center','padding-left':'0'})
  }
  $('.subMenulist').css({'width':'100%','background-color':'#343434'})
  $('.subMenusubList li, .subMenusubList li fa').css({'background-color':'#343434'})
  $('.sideMenuHeading').css({"padding-left":"45%"})
  $('.smListItem').hide()
  target.hide();
   e.stopPropagation();
}
$(function(){
  $('.sideMenuHeading .cls-1').css('fill','#94A1AC');
  $('.tealChevron').css({'height':'9px'});
  $('.tealChevron .cls-1').css({'fill':'#56A1F6','height':'9px'});
})

$(document).on('click','.subMenulist',(e) => {
  console.log('clicked',e.target);
  setTimeout(() =>{
    $('.subMenulist').css({'background-color':'#343434'});
  var target = $(e.target).closest('.subMenulist');

  if($(document).width()>1026){
    $('.lgListItem').hide()
  }else{
    var icon = $(e.target).parent().find('.fa');
  icon.css({position: 'absolute', top: '22px', right: '23px','z-index':999})
    $('li.subListli').css({'text-align':'left','padding-left':'24px'})
  }
  target.css({'background-color':'#56A1F6'});
  target.find('.subMenuSubList').show();
  target.find('.cls-1').css('fill','#94A1AC')
  $('.subMenulist').css({'width':'56px','padding-left':'22px'});

  $('.smListItem').show()
  target.find('.smListItem .fa').css('color','#FFFFFF');
  $('.sideMenuHeading').css({"padding-left":"22px"})
  },100)

})
$(document).on('click','.tealChevron',(e) => {
  console.log('teal chevron')
  $(e.target).parent().find('.clientActions').toggle();
})
$(document).on('click','.subMenuSubList li',(e) => {
  console.log('clicked',e.target);
  $('.subMenuSubList li').css({'color':'#94A1AC'});
  //var target = $(e.target).closest('.subMenuSubList');
  $(e.target).css({'color':'#56A1F6'});
  e.stopPropagation();
})

$(document).on('mouseover','.subMenuSubList li',(e) => {
  console.log('hovered1',e.target);
  if($(e.target).css('color')!=='rgb(86, 161, 246)'){
    $(e.target).css({'color':'#FFF'})
    $(e.target).find('.backArrow').css('color','#fff');
    $(e.target).find('.cls-1').css('fill','#fff');
  }
    e.stopPropagation();
})
$(document).on('mouseover','.subMenuSubList',(e) => {
    e.stopPropagation();
})
$(document).on('click','.subMenuSubList',(e) => {
  //console.log('hovered',e.target);

    e.stopPropagation();
})
$(document).on('mouseover','.subMenuSubListBack ,.subMenuSubListBack span',(e) => {
  console.log('hovered back',e.target);
// $(e.target).find('.backArrow').css('color','#fff');
$(e.target).parent().find('.cls-1').css('fill','#fff');
$(e.target).find('span').css('fill','#fff');
})
$(document).on('mouseout','.subMenuSubListBack',(e) => {
  console.log('hovered',e.target);
// $(e.target).find('.backArrow').css('color','#94A1AC');
$(e.target).find('.cls-1').css('fill','#94A1AC');
// $(e.target).find('span').css('fill','#94A1AC');

})
$(document).on('mouseout','.subMenuSubList li',(e) => {
  //console.log('hovered',e.target);
  //console.log($(e.target).css('color'));
  if($(e.target).css('color')!=='rgb(86, 161, 246)'){
    $(e.target).css({'color':'#94A1AC'})
  }
    e.stopPropagation();
})
$(document).on('mouseout','.subMenuSubList',(e) => {
  //console.log('hovered',e.target);
    e.stopPropagation();
})

$(document).on('mouseover','.smListItem',(e) => {
  console.log('hovered',e.target);
    e.stopPropagation();
})
$(document).on('mouseover','.subMenulist',(e) => {
  console.log('hovered',e.target);
    var target = $(e.target).closest('.subMenulist');
  target.find('.lgListItem,.listItem').css({'color':'#FFF'});
  target.find('.fa').css({'color':'#56A1F6'});
  //target.find('.fa-arrow-left').css({'color':'#94A1AC'});
})
$(document).on('mouseout','.subMenulist',(e) => {
  console.log('hovered',e.target);
    var target = $(e.target).closest('.subMenulist');
  target.find('.lgListItem,.listItem').each(function(){
    if($(this).css('color') !== 'rgb(86, 161, 246)' && $(this).css('color') !== 'rgb(255,255,255)'){
      $(this).css('color','#94A1AC')
    }
  })
  target.find('.fa').each(function(){
    if($(this).css('color') !== 'rgb(255, 255, 255)'){
      $(this).css('color','#94A1AC')
    }
  })
   /*target.find('.lgListItem,.listItem').each(function(index){
    if($(this).css('color') !== "#FFF"){
      $(this).css('color','#94A1AC');
    }
  })*/
})

const App = (props) => (

   <div className={props.css.appMainWrapper}>
  <div className="fullHeightWidth ">
  <div className={props.css.appMenu +" "+ props.css.noLeftRightPadding +" col-xs-3 "}>
        <div className='appHeader'>
          <img className={"pull-left img-responsive "+props.css.appHeaderLogo +" "+ props.css.brandLogo} src={logoPic} alt="logo" />
          <div className={"pull-left"+props.css.padLeft10}>

          </div>
        </div>
        <div className={"col-xs-12 "+props.css.appClientWrapper +" "+ props.css.noLeftRightPadding}>
          <div className={"col-xs-10 "+props.css.padLeft21}>
        <div className={props.css.clientName}> Laura Sutton </div>
          <div className={props.css.clientRole}> Front Desk Associate </div>
          </div>
          <div className={"col-xs-2 "+ props.css.noLeftRightPadding}>
       <Chevdown  className={' tealChevron '+props.css.chevdown +' '+props.css.colorTeal+' '+ props.css.normalSvg}/>
      <div className={"clientActions "+ props.css.clientActions}>
        <div className={props.css.arrowUp}></div>
        <div className={'action'+ ' '+props.css.action+' '+props.css.action1 }>Front desk Associate</div>
        <div className={'action'+ ' '+props.css.action }>User settings</div>
        <div className={'action'+ ' '+props.css.action }>Db settings</div>
        <div className={'action'+ ' '+props.css.action }>Log off</div>
      </div>
          </div>
        </div>
            <div className={"col-xs-12 "+props.css.appSidemenuWrapper +" "+  props.css.noLeftRightPadding}>
               <div className={'sideMenu' + props.css.sideMenu+ ' ' +props.css.noLeftRightPadding} >
                <div className={'sideMenuHeading '+ props.css.sideMenuHeading}> <ListIcon className={props.css.normalSvg1}/> </div>
                <div>
                  <ul className="subMenulist">
                    <li className={props.css.li}> <span className='lgListItem'><i className="fa fa-th"></i><span className='listItem'>Menu 1</span></span>
                    <span className='smListItem' ><i className="fa fa-th" ></i></span>
                    <div className='subMenuSubList'>
                    <ul  className={props.css.ul}>
                          <div  className='subMenuSubListBack' onClick={clickedBack}> <Backarrow className={"backArrow "+  props.css.normalSvg}  />Back</div>
                          <li  className="subListli">SubItem 1</li>
                          <li  className="subListli">SubItem 2</li>
                          <li  className="subListli">SubItem 3</li>
                          <li  className="subListli">SubItem 4</li>
                          <li  className="subListli">SubItem 5</li>
                          <li  className="subListli">SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>

                    <ul className="subMenulist">
                    <li className={props.css.li}> <span className='lgListItem'><i className="fa fa-comment-o "></i><span className='listItem'>Menu 2</span></span>
                    <span className='smListItem' ><i className="fa fa-comment-o " ></i></span>
                    <div className='subMenuSubList'>
                    <ul  className={props.css.ul}>
                          <div  className='subMenuSubListBack' onClick={clickedBack}> <Backarrow className={"backArrow "+  props.css.normalSvg}  />Back</div>
                          <li  className="subListli">SubItem 1</li>
                          <li  className="subListli">SubItem 2</li>
                          <li  className="subListli">SubItem 3</li>
                          <li  className="subListli">SubItem 4</li>
                          <li  className="subListli">SubItem 5</li>
                          <li  className="subListli">SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className="subMenulist">
                    <li className={props.css.li}> <span className='lgListItem'><i className="fa fa-folder"></i><span className='listItem'>Menu 3</span></span>
                    <span className='smListItem' ><i className="fa fa-folder" ></i></span>
                    <div className='subMenuSubList'>
                    <ul  className={props.css.ul}>
                          <div  className='subMenuSubListBack' onClick={clickedBack}> <Backarrow className={"backArrow "+  props.css.normalSvg}  />Back</div>
                          <li  className="subListli">SubItem 1</li>
                          <li  className="subListli">SubItem 2</li>
                          <li  className="subListli">SubItem 3</li>
                          <li  className="subListli">SubItem 4</li>
                          <li  className="subListli">SubItem 5</li>
                          <li  className="subListli">SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className="subMenulist">
                    <li className={props.css.li}> <span className='lgListItem'><i className="fa fa-bell"></i><span className='listItem'>Menu 4</span></span>
                    <span className='smListItem' ><i className="fa fa-bell" ></i></span>
                    <div className='subMenuSubList'>
                    <ul  className={props.css.ul}>
                          <div  className='subMenuSubListBack' onClick={clickedBack}> <Backarrow className={"backArrow "+  props.css.normalSvg}  />Back</div>
                          <li  className="subListli">SubItem 1</li>
                          <li  className="subListli">SubItem 2</li>
                          <li  className="subListli">SubItem 3</li>
                          <li  className="subListli">SubItem 4</li>
                          <li  className="subListli">SubItem 5</li>
                          <li  className="subListli">SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>
                   <ul className="subMenulist">
                    <li className={props.css.li}> <span className='lgListItem'><i className="fa fa-sun-o"></i><span className='listItem'>Menu 5</span></span>
                    <span className='smListItem' ><i className="fa fa-sun-o" ></i></span>
                    <div className='subMenuSubList'>
                    <ul  className={props.css.ul}>
                          <div  className='subMenuSubListBack' onClick={clickedBack}> <Backarrow className={"backArrow "+  props.css.normalSvg}  />Back</div>
                          <li  className="subListli">SubItem 1</li>
                          <li  className="subListli">SubItem 2</li>
                          <li  className="subListli">SubItem 3</li>
                          <li  className="subListli">SubItem 4</li>
                          <li  className="subListli">SubItem 5</li>
                          <li  className="subListli">SubItem 6</li>
                        </ul>
                     </div>
                    </li>
                  </ul>



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
      <div className="col-xs-6" className={props.css.margin25}>
        <div className="col-xs-2" ><i className={props.css.colorTeal+" fa fa-2x fa-user"}> </i></div>
        <div className="col-xs-2" ><i className={props.css.colorTeal+" fa fa-2x fa-battery-full"}> </i></div>
        <div className="col-xs-2" ><i className={props.css.colorTeal+" fa fa-2x fa-search-plus"}> </i></div>
        <div className="col-xs-2" ><i className={props.css.colorTeal+" fa fa-2x fa-unlock-alt"}> </i></div>
        <div className="col-xs-2" ><i className={props.css.colorTeal+" fa fa-2x fa-cc"}> </i></div>
        <div className="col-xs-2" ><i className={props.css.colorTeal+" fa fa-2x fa-bar-chart"}> </i></div>
      </div>

   </div>
    <div id="childElement" className={props.css.appChildElement}>{props.children}</div>
  </div>
  </div>
  </div>
)
export default styleable(css)(App)
