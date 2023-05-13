import { Input } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    marginBottom : "1rem",
    width : "20%",
    alignSelf : "center"
}

function AddSetDropdowns({
    formData,
    newFormData,
    submitArtistData,
    submitEventData,
    submitLocationData,
    handleChangeNewData, 
    handleChangeArtist,
    handleChangeEvent,
    handleChangeLocation,
    artistData, 
    eventData, 
    locationData, 
    setDropdownSelected,
    }) {

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
        <h1 className="addSetTitle">Select your artist, event, and location</h1>

            <form className="addSetForm">
              <div className="addSetDropdownBox">
                <h2>Artist</h2>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="artist-select-label">Select</InputLabel>
                      <Select
                        name="artist_id"
                        value={formData.artist_id}
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
                        value={newFormData.artist}
                        onChange={handleChangeNewData}
                        style={formStyle}
                        placeholder="New Artist"
                    />
                    <Button 
                        sx={{
                          marginLeft : "2rem",
                          backgroundColor : "#32365a"

                        }}
                        variant="contained"
                        onClick={submitArtistData}
                        >
                      Add
                    </Button>
                </div>
              </div>

              <div className="addSetDropdownBox">
                <Box sx={{ minWidth: 120 }}>
                    <h2>Event</h2>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="event-select-label">Select</InputLabel>
                      <Select
                        name="event_id"
                        value={formData.event_id}
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
                        value={newFormData.event}
                        onChange={handleChangeNewData}
                        style={formStyle}
                        placeholder="New Event"
                    />
                    <Button 
                        sx={{
                          marginLeft : "2rem",
                          backgroundColor : "#32365a"

                        }}
                        variant="contained"
                        onClick={submitEventData}

                        >
                      Add
                    </Button>
                </div>
              </div>
              
              <div className="addSetDropdownBox">
                <Box sx={{ minWidth: 120 }}>
                    <h2>Location</h2>
                    <FormControl style={dropdownStyle} fullWidth>
                      <InputLabel id="location-select-label">Select</InputLabel>
                      <Select
                        name="location_id"
                        value={formData.location_id}
                        label="Location"
                        
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
                        value={newFormData.location}
                        onChange={handleChangeNewData}
                        style={formStyle}
                        placeholder="New Location"
                    />
                    <Button 
                        sx={{
                          marginLeft : "2rem",
                          backgroundColor : "#32365a"

                        }}
                        variant="contained"
                        onClick={submitLocationData}

                        >
                      Add
                    </Button>
                </div>
              </div>

                <div>
                    <Button
                        sx={{
                          marginBottom : '5rem',
                          backgroundColor : "#32365a"

                        }}
                        onClick={() => setDropdownSelected(true)}
                        variant="contained"
                        placeholder="Submit"
                    >
                      Next
                    </Button>
                </div>

            </form>
        </>
    )
}

export default AddSetDropdowns