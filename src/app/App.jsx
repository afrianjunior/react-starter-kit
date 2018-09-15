import React from 'react'
import { Layout } from 'ui'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import NotFound from './pages/utils/NotFound'
export default function App () {
  return (
    <Router>
      <Layout>
        <h1>Star Wars Planets</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}
