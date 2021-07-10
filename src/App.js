import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import * as ROUTES from "./constants/routes"
import { Header } from "./containers"
import { Home, Bookings } from "./pages"

export default function App(){
    return(
        
        <Router>
        <Header/>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <Route exact path={ROUTES.BOOKINGS}>
                    <Bookings />
                </Route>
            </Switch>
        </Router>
        
    )
}