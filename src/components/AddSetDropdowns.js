import { Input } from "@mui/material";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const formStyle = {
    color : "#3b3a30",
    marginBottom : "3rem"
}
const dropdownStyle = {
    color : "#3b3a30",
    margin : "5px",
    width : "20%",
    alignSelf : "center"
}

function AddSetDropdowns({
    handleChange, 
    artistData, 
    eventData, 
    locationData, 
    setDropdownSelected,
    selectedArtist,
    setSelectedArtist,
    selectedEvent,
    setSelectedEvent,
    selectedLocation,
    setSelectedLocation
    }) {


    const[formData, setFormData] = useState({
        artist: '',
        event: '',
        location: '',
    });


    // add state for artist, event, and location

    // make useEffect hook to fetch individual data for artist, event, and location and set the states accordingly

    // each state will have render a list for each dropdown option


    const handleChangeArtist = (event) => {
        setSelectedArtist(parseInt(event.target.value));
      };


    const handleChangeEvent = (event) => {
      setSelectedEvent(parseInt(event.target.value));
    };


    const handleChangeLocation = (event) => {
      setSelectedLocation(parseInt(event.target.value));
    };
    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    function handleSubmitDropdownItems(e) {
        e.preventDefault();
        console.log("selected artist: " + selectedArtist)
        console.log("selected event: " + selectedEvent)
        console.log("selected location: " + selectedLocation)

        setDropdownSelected(true);
    }

    const artistList = artistData.map((data) => 
        <MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>
    )
    const eventList = eventData.map((data) => 
        <MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>
    )
    const locationList = locationData.map((data) => 
        <MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>
    )

    return(
        <>
        <h1>1. Select your artist, event, and location</h1>

            <form className="addSetForm" onSubmit={handleSubmitDropdownItems}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="demo-simple-select-label">Artist</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedArtist}
                        label="Age"
                        onChange={handleChangeArtist}
                      >
                        {artistData ? artistList : ''}
                      </Select>
                    </FormControl>
                </Box>
                <div>
                    <Input
                        type="text"
                        name="artist_id"
                        value={formData.artist_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Artist"
                    />
                </div>


                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="demo-simple-select-label">Event</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedEvent}
                        label="Age"
                        
                        onChange={handleChangeEvent}
                      >
                        {eventData ? eventList : ''}
                      </Select>
                    </FormControl>
                </Box>
                <div>
                    <Input
                        type="text"
                        name="event_id"
                        value={formData.event_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Event"
                    />
                </div>


                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="demo-simple-select-label">Location</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedLocation}
                        label="Age"
                        
                        onChange={handleChangeLocation}
                      >
                        {locationData ? locationList : ''}
                      </Select>
                    </FormControl>
                </Box>
                <div>
                    <Input
                        type="text"
                        name="location_id"
                        value={formData.location_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Location"
                    />
                </div>

                <div>
                    <Input
                        type="submit"
                        name="submit"
                        style={formStyle}
                        placeholder="Submit"
                    />
                </div>

            </form>
        </>
    )
}

export default AddSetDropdowns