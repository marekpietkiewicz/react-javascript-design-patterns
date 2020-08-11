import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';
import FactoryPage from './pages/FactoryPage';
import NotFoundPage from './pages/NotFoundPage';


export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={DashboardPage}/>
      <Route exact path='/patterns/factory' component={FactoryPage}/>
      <Route exact path='/patterns/customers' component={CustomersPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  );
}