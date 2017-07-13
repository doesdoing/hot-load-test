import React from 'react';
import './App.scss';
var $ = require('jquery');
import Show from './App1';
import Input from './App2';


export default class Parent extends React.Component{
  constructor(...args){
   super(...args);
   this.state = {
    message:''
   };
  }
  input(text){
   this.setState({
    message:text
   })
  }
  render(){
   return(
    <div>
     <Input onInp={this.input.bind(this)} msg={this.state.message}/>
     <Show onShow={this.state.message}/>
    </div>
   );
  }
 }

class Show extends React.Component{
  constructor(...args){
   super(...args);
  }
  render(){
   return <p>{this.props.onShow}</p>
  }
 
 }
  class Input extends React.Component{
  constructor(...args){
  super(...args);
  }
  fn(ev){
    var oTxt=this.refs.text1;
   this.props.onInp(oTxt.value);//this.props.onInp 等于父级的的onInp的属性，onInp={this.input.bind(this)} ,{}里面的执行程序为父级自己的程序
  }
  render(){
   return <input type="text" className='app' ref='text1' onInput={this.fn.bind(this)} value={this.props.msg}/>
  }
 }
