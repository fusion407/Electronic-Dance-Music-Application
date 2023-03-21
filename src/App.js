import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import AddSet from './components/AddSet'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addset">
          <AddSet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
