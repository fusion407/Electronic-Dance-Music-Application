import { Input } from "@mui/material";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
    formData,
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
                <h2>Artist</h2>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="demo-simple-select-label">Select</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedArtist}
                        label="Artist"
                        onChange={handleChangeArtist}
                      >
                        {artistData ? artistList : ''}
                      </Select>
                    </FormControl>
                </Box>
                <div>
                    <Input
                        type="text"
                        name="artist"
                        value={formData.artist}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="New Artist"
                    />
                    <Button 
                        sx={{marginLeft : "2rem"}}
                        variant="contained"
                        >
                      Add
                    </Button>
                </div>


                <Box sx={{ minWidth: 120 }}>
                    <h2>Event</h2>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="demo-simple-select-label">Select</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedEvent}
                        label="Event"
                        
                        onChange={handleChangeEvent}
                      >
                        {eventData ? eventList : ''}
                      </Select>
                    </FormControl>
                </Box>
                <div>
                    <Input
                        type="text"
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="New Event"
                    />
                    <Button 
                        sx={{marginLeft : "2rem"}}
                        variant="contained"
                        >
                      Add
                    </Button>
                </div>


                <Box sx={{ minWidth: 120 }}>
                    <h2>Location</h2>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="New Location"
                    />
                    <Button 
                        sx={{marginLeft : "2rem"}}
                        variant="contained"
                        >
                      Add
                    </Button>
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