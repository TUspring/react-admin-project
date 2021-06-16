import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import { isLogin } from '@configs/common'
import { set } from '@config'

import * as base from '@pages/base' // 基础
import * as invoice from '@pages/invoice' // 开票
import * as sysSet from '@pages/set' // 设置中心-系统设置

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={base.app} onEnter={isLogin}>
      <IndexRoute component={base.example} />
      <Route path="/desk$/index" component={base.example} />
      {/* <Route path="/socketReceive" component={base.socketReceive} /> */}
      <Route path="/invoice" component={invoice.invoiceList} />
      {/** *系统设置 开始 */}
      <Route path={`/${set}/userManage`} component={sysSet.userManage} />
      <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
      <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
      {/** *系统设置 结束 */}
    </Route>
    <Route path="/login" component={base.login} />
    <Route path="*" component={base.notfound} />
  </Router>
)
