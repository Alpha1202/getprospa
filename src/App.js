import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Aside from './containers/Aside';
import Body from './containers/Body';
import Accounts from './containers/Accounts';
import Transactions from './containers/Transactions';

const App = () => {

  const [bodyWidth, setBodyWidth] = useState('');

  const setWidth = () => {
    if (bodyWidth === 'full') {
      setBodyWidth('');
    } else {
      setBodyWidth('full');
    }
  }

  return (
    <>
      <BrowserRouter>
        <Aside bodyWidth={bodyWidth} setWidth={setWidth} />
        <Body bodyWidth={bodyWidth} setWidth={setWidth}>
          <Switch>
            <Route exact path='/' component={Accounts} />
            <Route path='/accounts' component={Accounts} />
            <Route path='/transactions' component={Transactions} />
          </Switch>
        </Body>
      </BrowserRouter>
    </>
  )
}

export default App;
