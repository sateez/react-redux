import React from 'react'
import { Link, browserHistory } from 'react-router'
import loginPic from '../images/login.jpg'
import logoPic from '../images/WAL.png'
import {Style} from 'radium'
var Lock = require('babel!svg-react!../images/lock.svg?name=Lock');
var User = require('babel!svg-react!../images/user.svg?name=User');
var Signin = require('babel!svg-react!../images/login.svg?name=Signin');

const Login = ({children}) => (
	<div style={{height:'100%',width:'100%'}}>
<style>
{
	'html,body{height: 100%;width: 100%;font-family:open sans;font-size: 18px;font-weight: 600;}'+
	'.form-group{width:330px;border-bottom:3px solid #DBDBDB;height:54px;}'+
	'.form-control{border: none;background: transparent; height:54px;}'+
	'#root{height:100%;width:100%}'+
'.bgImage{ background-image:url(static/images/login.jpg); background-size:cover; height:100%; width:100%}'+
'.formWrapper{ margin-left:45%;margin-top:15%}'+
'.headerImage{ height:191px;width:161px;}'+
'.signInBtn{height: 54px;background-color: #56A1F6;border: none;border-radius: 25px;color: #FFF;font-size: 18px;font-weight: 600;margin-top:56px;}'+
'.normalSvg{position: relative;height:20px;width:20px;}'+
'.lock{top: 15px;left:20px;}'+
'.sigin{margin-right:10px;margin-top:3px;}'+
'.cls-1{fill:#DBDBDB !important;}'
}
</style>

  <div className="col-xs-12 container bgImage" >
  <div className="formWrapper">
    <img className="headerImage" src={logoPic} />
    <form style={{marginLeft:'-10%'}}>
  <div className="form-group">

  <User className='lock normalSvg' />
    <input type="email" className="form-control pull-right" id="exampleInputEmail1" placeholder="Email"  style={{width:'250px',color:'#BDBDBD',letterSpacing:'2px',fontSize:'18px'}} />
  </div>
  <div className="form-group">
		<Lock className='lock normalSvg' />
    <input type="password" className="form-control pull-right" id="exampleInputPassword1" placeholder="Password" style={{width:'250px',color:'#FFF',letterSpacing:'10px',fontSize:'18px'}} />
  </div>

  <button type="submit" className="btn btn-default  form-group signInBtn" onClick={(e) => {browserHistory.push('/App')}}><Signin className='normalSvg sigin' />SIGN IN</button>
</form>

    </div>
    </div>
    </div>
)
export default Login
