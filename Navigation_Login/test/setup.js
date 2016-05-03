import React from 'react'
import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import ReactDom from 'react-dom'
import chai, {expect} from 'chai'
import chaiJquery from 'chai-jquery'
import {provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../reducers'


global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
const $ = jquery(global.window)
global.navigator = global.window.navigator



function renderComponent(ComponentClass){
   const ComponentInstance = TestUtils.renderIntoDocument(
    <provider store={createStore(reducers)}>
     <ComponentClass  />
    </provider>
   )
   return $(ReactDom.findDOMNode(ComponentInstance));
}

$.fn.simulate = function(eventName, value) {
 if(value){
  this.val(value);
 }
 TestResults.simulate[eventName](this[0]);
}
chaiJquery(chai, chai.util, $)
export {renderComponent, expect}
