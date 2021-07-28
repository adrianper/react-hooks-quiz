import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from "./Components/Counter";

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }
}

const App = () => {

  return (
    <div style={styles.container}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
