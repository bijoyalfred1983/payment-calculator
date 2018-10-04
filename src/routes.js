import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layouts/Home';
import CalcByPrice from './layouts/CalcByPrice';
import CalcByCredit from './layouts/CalcByCredit';
import PriceFinanceOpts from './layouts/PriceFinanceOpts';
import CreditFinanceOpts from './layouts/CreditFinanceOpts';


const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/CalcByPrice' component={CalcByPrice} />
    <Route exact path='/CalcByCredit' component={CalcByCredit} />
    <Route exact path='/PriceFinanceOpts' component={PriceFinanceOpts} />
    <Route exact path='/CreditFinanceOpts' component={CreditFinanceOpts} />
  </Switch>
)

export default AppRoutes;