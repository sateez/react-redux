import React from 'react'
import { Link, browserHistory } from 'react-router'
import { SideNav, Nav } from 'react-sidenav';

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
  $('.subMenuSubList').hide();
  $('.subMenulist').css({'width':'100%','background-color':'#343434'})
  $('.sideMenuHeading').css({"padding-left":"45%"})
  $('.lgListItem').show()
  $('.smListItem').hide()
}
$(document).on('click','.subMenulist',(e) => {
  console.log('clicked',e.target);
  $('.subMenulist').css({'background-color':'#343434'});
  var target = $(e.target).closest('.subMenulist');
  target.css({'background-color':'#8dddb6'});
  target.find('.subMenuSubList').show();
  $('.subMenulist').css({'width':'56px','padding-left':'22px'});
  $('.lgListItem').hide()
  $('.smListItem').show()
  $('.sideMenuHeading').css({"padding-left":"22px"})
})
// $(document).on('mouseover','.subMenulist',(e) => {
//   console.log('hovered',e.target);
//     var target = $(e.target).closest('.subMenulist');
//   target.css({'background-color':'#434343'});
//   target.find('li').css({'color':'#FFF'});
//   target.find('li i').css({'color':'#8dddb6'});
// })
// $(document).on('mouseover','.subMenuSubList',(e) => {
//   console.log('hovered',e.target);
//     e.stopPropogation();
// })
// $(document).on('mouseout','.subMenuSubList',(e) => {
//   console.log('hovered',e.target);
//     e.stopPropogation();
// })
// $(document).on('mouseout','.subMenulist',(e) => {
//   console.log('hovered',e.target);
//     var target = $(e.target).closest('.subMenulist');
//   target.css({'background-color':'#343434'});
//   target.find('li').css({'color':'#999'});
//   target.find('li i').css({'color':'#999'});
// })

const App = ({children}) => (

  <div className="col-xs-12">
  <style>
  {
    '.sideMenu{'+
     ' height:500px;width:250px}'+
     '.noPadding{padding:0}'+
     '.noLeftRightPadding{padding-left:0;right-padding:0}'+
     '.sideMenuHeading{height:51px;padding-left:45%;padding-top:19px;margin-bottom:8px;}'+
     '.subMenulist{height:51px;padding-top:15px;list-style-type: none;}'+
     '.subMenulist i.fa:hover{color:#8dddb6}'+
     '.subMenulist:hover{background-color:#424242}'+
     '.subMenuSubList ul{padding:0}'+
     '.subMenulist li{color:#999}'+
     '.subMenuSubList li:hover{color:#FFF}'+
     '.subMenuSubList{display:none;position: absolute;height: 405px;background-color: #080808;top: 0;width: 194px;left: 59px;}'+
     '.subMenuSubList li{ height:51px; list-style-type:none;padding-top:15px;padding-left:29px;color:#999;}'+
     '.subMenuSubList .fa-arrow-left {padding-right:10px}'+
     '.listItem{padding-left:30px}'+
     '.smListItem{display:none}'+
     '.brandLogo{padding: 10px 60px;opacity: .8;background: url(http://img05.deviantart.net/9c6a/i/2013/021/1/2/windy_city_background__by_ippiki_wolf-d5sb9u9.jpg);}'

  }
  </style>
  <div className="col-xs-3 noLeftRightPadding"  style={{width:'250px',padding:0,margin:0,backgroundColor:'#999'}}>
  			<div style={{height:35+'px',lineHeight:20+'px'}}>
  				<img className="pull-left img-responsive brandLogo" style={{padding:'10px 60px'}} src="http://www.travelandtourworld.com/wp-content/uploads/2013/08/Waldorf-Astoria.jpg" alt="logo" />
  				<div className="pull-left" style={{paddingLeft:10+'px'}}>

  				</div>
  			</div>
  			<div className="col-xs-12 noLeftRightPadding" style={{backgroundColor:'#232323',color:'#ececec',fontWeight:'14px',margin:'0',padding:'8px 5px 6px 5px'}}>
  				<div className="col-xs-10 noLeftRightPadding" >
					<div> Laura Sutton </div>
					<div> Front Desk Associate </div>
  				</div>
  				<div className="col-xs-2 noLeftRightPadding">
  					<i className="fa fa-angle-down fa-2x" style={{marginTop:'5px'}}></i>
  				</div>
  			</div>
            <div className="col-xs-12 noLeftRightPadding" style={{background: '#343434', color: '#FFF',height:405+'px'}}>
               <div className='sideMenu noLeftRightPadding'>
                <div className='sideMenuHeading'> <i className='fa fa-list-ul'></i> </div>
                <div>
                  <ul className='subMenulist ' >
                    <li> <span className="lgListItem"><i className="fa fa-th"></i><span className="listItem">Menu 1</span></span>
                    <span className="smListItem"><i className="fa fa-th" ></i></span>
                    <div className='subMenuSubList'>
                        <ul >
                          <li onClick={clickedBack}> <i className="fa fa-arrow-left"></i>Back</li>
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
                          <li onClick={clickedBack}> <i className="fa fa-arrow-left"></i>Back</li>
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
                          <li onClick={clickedBack}> <i className="fa fa-arrow-left"></i>Back</li>
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
                          <li onClick={clickedBack}> <i className="fa fa-arrow-left"></i>Back</li>
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
                          <li onClick={clickedBack}> <i className="fa fa-arrow-left"></i>Back</li>
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
   <div className="col-xs-9" style={{padding:0,margin:0}}>
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
	   		<span className="col-xs-2" ><i style={{color:"#8dddb6"}}className="fa fa-2x fa-user"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#8dddb6"}}className="fa fa-2x fa-battery-full"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#8dddb6"}}className="fa fa-2x fa-search-plus"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#8dddb6"}}className="fa fa-2x fa-unlock-alt"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#8dddb6"}}className="fa fa-2x fa-cc"> </i></span>
	   		<span className="col-xs-2" ><i style={{color:"#8dddb6"}}className="fa fa-2x fa-bar-chart"> </i></span>
   		</div>

   </div>
    <div id="childElement" style={{ paddingTop: '1.5em', border:'3px solid #EAEAEA', height:'722px' }}>{children}</div>
  </div>
  </div>
)
export default App
