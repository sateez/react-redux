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
const Login = (props) => (
<div className={props.css.bgImage + ' '+'container'} style={{height:'100%',width:'100%'}}>
<div >
    <div className="formWrapper">
    <img className="headerImage" src={logoPic} />
    <form className="login-form">
<div className="form-group">

    <User className='lock normalSvg' />
    <input type="email"  className="form-control pull-right" id="exampleInputEmail1" placeholder="Email"  />
    </div>
    <div  className="form-group">
    <Lock className='lock normalSvg' />
    <input type="password"  className="form-control pull-right" id="exampleInputPassword1" placeholder="Password"  />
    </div>

    <button  type="submit"  className="btn btn-default  form-group signInBtn" onClick={(e) => {browserHistory.push('/App')}}><Signin className='normalSvg sigin' />SIGN IN</button>
</form>

</div>
</div>
</div>

)
export default styleable(css)(Login)
