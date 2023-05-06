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
  const[artistData, setArtistData] = useState();
  const[eventData, setEventData] = useState();
  const[locationData, setLocationData] = useState();
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
  const[selectedArtist, setSelectedArtist] = useState('');
  const[selectedEvent, setSelectedEvent] = useState('');
  const[selectedLocation, setSelectedLocation] = useState('');

  // Fetch all set data upon initial render
  useEffect(() => {
    console.log("fetching ALL data...")
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
  // Set the state of fullSetData with fetched data
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
            fullSetData={fullSetData}
            setFullSetData={setFullSetData} 
        
            artistData={artistData}
            selectedArtist={selectedArtist}
            setSelectedArtist={setSelectedArtist}
            
            eventData={eventData}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}

            locationData={locationData}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </Route>

        <Route exact path="/edit">
          <EditSet 
            fullSetData={fullSetData}
            setFullSetData={setFullSetData} 

            selectedSet={selectedSet}
            setSelectedSet={setSelectedSet}

            artistData={artistData}
            selectedArtist={selectedArtist}
            setSelectedArtist={setSelectedArtist}
            
            eventData={eventData}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}

            locationData={locationData}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
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
