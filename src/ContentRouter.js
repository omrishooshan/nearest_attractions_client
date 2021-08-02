import "./css/Content.css";
import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import AttractionsPage from "./AttractionsPage";


function ContentRouter() {
  const isUserLocationStored = useSelector((state) => state.isUserLocationStored);
  return (
    <div className="content">
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/attractions">
        {isUserLocationStored ?
        <AttractionsPage/> 
          :
          <Redirect to="/"/>
        }
        </Route>
        <Route >
        <Redirect to="/"/>
        </Route>
 </Switch>
    </div>
  );
}

export default withRouter(ContentRouter);
