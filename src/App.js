import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import AddSet from './components/AddSet'
import { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";

function App() {
  const [fullSetData, setFullSetData] = useState()

  useEffect(() => {
    loadAllSetData();
  }, [])

  async function loadAllSetData() {
    await fetch("http://localhost:9292/fullsets", {
      method: "GET",
      headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((r) => r.json())
          .then(setFullSetData)
          .catch((error) => console.log(error))
  }

  console.log(fullSetData)

  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/addset">
          <AddSet 
            fullSetData={fullSetData} 
            setFullSetData={setFullSetData} 
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
