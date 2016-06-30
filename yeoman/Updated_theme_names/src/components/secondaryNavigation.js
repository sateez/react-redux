import React from 'react';
import css from '../styles/secondaryNavigation.css'
import stylable from 'react-styleable'
var Backarrow = require('babel!svg-react!../images/back-arrow.svg?name=Backarrow');

const clickedBack = (e) => {
 $(".subListli").removeClass('fillTeal').removeClass('white');
 //$(e.target).css({'color':'#94A1AC'});
 var target = $(e.target).closest('.subMenuSubList');
 if($(document).width()<1026){
  //var icon = $(e.target).parent().find('.fa');
  $('.targetIcon').removeClass('targetIcon')
  $('li.subListli').css({'text-align':'center','padding-left':'0'})
 }
 $('.lgListItem').css('visibility','visible');
 $('.subMenulist').css({'width':'100%','background-color':'#343434'})
 $('.subMenusubList li, .subMenusubList li fa').css({'background-color':'#343434'})
 $('.sideMenuHeading').animate({"padding-left":"45%"})
 $('.smListItem').hide()
 $('.lgListItem').show()
 target.parent().find('.fa').removeClass('fillTeal').removeClass('white').addClass('lightgray')
 target.toggle('slide',{direction:"right"},200);
 e.stopPropagation();
}
const SubMenuItem = (props,i) => (
 <ul className="subMenulist" key={i}>

  <li  key={i} className={props.css.li}>
   <span className='lgListItem'>
    <i className={`fa fa-${props.logo}`}>
    </i>
    <span className='listItem'>
     {props.label}
    </span>
   </span>

   <span
    title={props.label}
    key={i}
    className='smListItem' >
    <i className={`fa fa-${props.logo}`} >
    </i>
   </span>

   <div key={i}  className='subMenuSubList'>

    <ul  key={i} className={props.css.ul}>

     <div
      className='subMenuSubListBack'
      onClick={clickedBack}><Backarrow className={"backArrow "+  props.css.normalSvg}  />Back</div>

     <li key="sub-li-1" className="subListli">
      SubItem 1
     </li>

     <li key="sub-li-2" className="subListli">
      SubItem 2
     </li>

     <li key="sub-li-3" className="subListli">
      SubItem 3
     </li>

     <li key="sub-li-4" className="subListli">
      SubItem 4
     </li>

     <li key="sub-li-5" className="subListli">
      SubItem 5
     </li>

     <li key="sub-li-6" className="subListli">
      SubItem 6
     </li>

    </ul>

   </div>

  </li>

 </ul>
)

export default stylable(css)(SubMenuItem)
