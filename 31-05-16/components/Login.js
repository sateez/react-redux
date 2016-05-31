import React from 'react'
import { Link, browserHistory } from 'react-router'
import loginPic from '../images/login.jpg'
import logoPic from '../images/WAL.png'
//import styles from '../styles/loginStyle'
import css from '../css/login.css'
var Lock =  require('babel!svg-react!../images/lock.svg?name=Lock')
var User =  require('babel!svg-react!../images/user.svg?name=User')
var Signin =  require('babel!svg-react!../images/login.svg?name=Signin')
var Grid =  require('react-bootstrap').Grid;
var Button =  require('react-bootstrap').Button;
var FormGroup =  require('react-bootstrap').FormGroup;
var ControlLabel =  require('react-bootstrap').ControlLabel;
var FormControl =  require('react-bootstrap').FormControl;
import styleable from 'react-styleable'
$(function(){
  $('.cls-1').css({'fill':'#DBDBDB'});
})
const Login = (props) => (
    
<div className={props.css.bgImage + ' '+props.css.container} style={{height:'100%',width:'100%'}}>
<div >
    <div className={props.css.formWrapper}>
    <img className={props.css.headerImage} src={logoPic} />
    <form className={props.css.loginForm}>
<div className={props.css.formGroup}>

    <User className={props.css.lock + ' '+props.css.normalSvg} />
    <input type="email"  className={props.css.formControl+ ' '+ 'pull-right'} id="exampleInputEmail1" placeholder="Email"  />
    </div>
    <div  className={props.css.formGroup}>
    <Lock className={props.css.lock + ' '+props.css.normalSvg} />
    <input type="password"  className={props.css.formControl+ ' '+ 'pull-right'} id="exampleInputPassword1" placeholder="Password"  />
    </div>

    <button  type="submit"  className={ props.css.formGroup+ ' '+ props.css.signInBtn} onClick={(e) => {browserHistory.push('/App')}}><Signin className={props.css.normalSvg + ' '+props.css.sigin} />SIGN IN</button>
</form>

</div>
</div>
</div>

)
export default styleable(css)(Login)
