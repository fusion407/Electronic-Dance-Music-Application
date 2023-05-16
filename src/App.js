import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import AddSet from './components/AddSet'
import EditSet from "./components/EditSet"
import { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";

function App() {

  const [fullSetData, setFullSetData] = useState()
  const [artistData, setArtistData] = useState();
  const [eventData, setEventData] = useState();
  const [locationData, setLocationData] = useState();
  const [selectedSet, setSelectedSet] = useState({
    title: '',
    rating: '',
    video_link: '',
    artist: '',
    artist_id: '',
    event: '',
    event_id: '',
    location: '',
    location_id: ''
  })


  useEffect(() => {
    loadAllSetData();
    loadArtistData();
    loadEventData();
    loadLocationData();
  }, [])



  const loadArtistData = async () =>{
    await fetch(`http://localhost:9292/artists`, {
      method: "GET",
      headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((r) => r.json())
          .then(setArtistData)
          .catch((error) => console.log(error))
  }


  const loadEventData = async () =>{
    await fetch(`http://localhost:9292/events`, {
      method: "GET",
      headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((r) => r.json())
          .then(setEventData)
          .catch((error) => console.log(error))
  }


  const loadLocationData = async () =>{
    await fetch(`http://localhost:9292/locations`, {
      method: "GET",
      headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((r) => r.json())
          .then(setLocationData)
          .catch((error) => console.log(error))
  }


  const loadAllSetData = async () => {
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

  

  return (
    <div className="App">

      <div className="App-header">
        <NavBar />
      </div>

      <Switch>

        <Route exact path="/search">
          <Search 
            fullSetData={fullSetData}
            setFullSetData={setFullSetData}

            setSelectedSet={setSelectedSet}
          />
          </Route>

        <Route exact path="/addset">
          <AddSet 
            setFullSetData={setFullSetData}

            artistData={artistData}
            setArtistData={setArtistData}

            eventData={eventData}
            setEventData={setEventData}

            locationData={locationData}
            setLocationData={setLocationData}
          />
        </Route>

        <Route exact path="/edit">
          <EditSet 
            fullSetData={fullSetData}
            setFullSetData={setFullSetData} 

            selectedSet={selectedSet}
            setSelectedSet={setSelectedSet}

            artistData={artistData}

            eventData={eventData}

            locationData={locationData}
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
