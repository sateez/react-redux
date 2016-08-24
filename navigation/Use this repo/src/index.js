import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './stores';
import App from './containers/App';
import PropertyDefaults from './components/general-setup/PropertyDefaults';
import Reservations from './components/general-setup/Reservations';
import ReceiptSetup from './components/general-setup/ReceiptSetup';
import RequestCodes from './components/general-setup/RequestCodes';
import GuestReceiptMessages from './components/general-setup/GuestReceiptMessages';
import Currency from './components/general-setup/Currency';
import Lounge from './components/rooms/Lounge';
import Maintenance from './components/housekeeping/Maintenance';
import Management from './components/posting/Management';
import Accounts from './components/accounts-receivable/Accounts';
import Reports from './components/reports/Reports';
import Users from './components/user-setup/Users';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/props/:propCode/config" component={App}>
      <IndexRoute component={PropertyDefaults}/>
      <Route path="/general-setup" component={PropertyDefaults}/>
      <Route path="/general-setup/property-defaults" component={PropertyDefaults}/>
      <Route path="/general-setup/reservations" component={Reservations}/>
      <Route path="/general-setup/receipt-setup" component={ReceiptSetup}/>
      <Route path="/general-setup/guest-receipt-messages" component={GuestReceiptMessages}/>
      <Route path="/general-setup/request-codes" component={RequestCodes}/>
      <Route path="/general-setup/currency" component={Currency}/>
      <Route path="/rooms" component={Lounge}/>
      <Route path="/rooms/lounge" component={Lounge}/>
      <Route path="/housekeeping" component={Maintenance}/>
      <Route path="/housekeeping/maintenance" component={Maintenance}/>
      <Route path="/posting" component={Management}/>
      <Route path="/posting/management" component={Management}/>
      <Route path="/accounts-receivable" component={Accounts}/>
      <Route path="/accounts-receivable/accounts" component={Accounts}/>
      <Route path="/reports" component={Reports}/>
      <Route path="/reports/reports" component={Reports}/>
      <Route path="/user-setup" component={Users}/>
      <Route path="/user-setup/users" component={Users}/>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
