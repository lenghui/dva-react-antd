import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './components/users/users'
import Calculate from './components/calcu/calcu'
import UploadFile from './components/upload/upload'
import Download from './components/download/download'
import Mainlayout from './components/MainLayout/Layout'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Mainlayout} replace/>
        {/* <Route path="/users" component={Users} replace/>
        <Route path="/calcu" component={Calculate} replace/>
        <Route path="/upload" component={UploadFile} replace/>
        <Route path="/down" component={Download} replace/> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
