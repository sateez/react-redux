import React from 'react'
import ContactForm from '../containers/ContactForm'
import DetailsForm from '../containers/DetailsForm'
import { Link, browserHistory } from 'react-router'
const App = ({children}) => (
  <div>

    <div id="childElement" style={{ marginTop: '1.5em' }}>{children}</div>
  </div>
)
export default App
