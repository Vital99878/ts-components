import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import TodoList from '../components/TodoList/TodoList'
import Test from '../components/Test/Test'
import CssPosition from '../components/CssPosition/CssPosition'
// import './App.scss'
import CssDisplay from '../components/CssDisplay/CssDisplay'
import CssTags from '../components/CssTags/CssTags'
import CssFlex from '../components/CssFlex/CssFlex'
import CssGrid from '../components/CssGrid/CssGrid'
import Menu, { MenuItem } from '../components/Menu/Menu'
import TestPureReact from '../components/TestPureReact/TestPureReact'
import { useHistory } from 'react-router-dom'
import { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import LayoutBudget from '../components/LayoutBudget/LayoutBudget'

const App: React.FC = () => {
  const [home, cssDisplay, cssPosition, cssFlex, cssGrid, cssTags, layoutBudget, testComponent, testNoTs] = useSelector(
    (state: RootState) => state.activeMenuItem.menuItems
  )
  const [value, onChange] = useState(new Date())
  return (
    <Router>
      <div className="App">
        {/* {'Menu tabs' */}
        <>
          <Menu>
            <MenuItem props={home} />
            <MenuItem props={cssDisplay} />
            <MenuItem props={cssPosition} />
            <MenuItem props={cssFlex} />
            <MenuItem props={cssGrid} />
            <MenuItem props={cssTags} />
            <MenuItem props={layoutBudget} />
            <MenuItem props={testComponent} />
            <MenuItem props={testNoTs} />
          </Menu>
          <Switch>
            <Route path="/cssDisplay" exact component={CssDisplay} />
            <Route path="/cssPosition" exact component={CssPosition} />
            <Route path="/cssFlex" exact component={CssFlex} />
            <Route path="/cssGrid" exact component={CssGrid} />
            <Route path="/cssTags" exact component={CssTags} />
            <Route path="/" exact component={LayoutBudget} />
            <Route path="/layoutBudget" exact component={LayoutBudget} />
            <Route path="/test" exact component={Test} />
            <Route path="/testNoTs" exact component={TestPureReact} />
            <Route path="/" exact render={() => <h1>Home page</h1>} />
          </Switch>
        </>
      </div>
    </Router>
  )
}
export default App
