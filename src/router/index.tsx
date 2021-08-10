import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { RouteTypes, routes } from 'config/routes'

const render = (initRoutes: RouteTypes[]) => {
  if (!initRoutes || !initRoutes.length) return null
  return (
    <Switch>
      {initRoutes.map((route: RouteTypes, index) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          )
        }

        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={() => {
              const renderChildRoutes = render(route.routes || [])
              if (route.component) {
                return <route.component route={route}>{renderChildRoutes}</route.component>
              }
              return renderChildRoutes
            }}
          />
        )
      })}
    </Switch>
  )
}

const createRoute = () => <Router>{render(routes)}</Router>

export default createRoute()
