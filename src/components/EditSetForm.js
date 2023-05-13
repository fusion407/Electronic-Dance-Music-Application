import { Input } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const formStyle = {
    color : "#3b3a30",
    margin : "5px"
}
const dropdownStyle = {
    color : "#3b3a30",
    margin : "5px",
    width : "20%",
    alignSelf : "center"
}

function EditSetForm({
    formData, 
    handleChange, 
    handleSubmit, 
    handleChangeArtist,
    handleChangeEvent,
    handleChangeLocation,
    artistData, 
    eventData, 
    locationData,
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

        <h1>Edit Set</h1>

            <form className="addSetForm" onSubmit={handleSubmit}>

                <div>
                    <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={"title"}
                    />

                </div>

                <div>
                    <Input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={"rating"}
                    /> 
                </div>

                <div>
                    <Input
                        type="text"
                        name="video_link"
                        value={formData.video_link}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={"video_link"}
                    />
                </div>

                <div>
                    <h2>Artist:</h2>
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
                </div>

                <div>
                    <h2>Event:</h2>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl style={dropdownStyle} fullWidth>
                          <InputLabel id="event-select-label">Select</InputLabel>
                          <Select
                            name="event_id"
                            value={formData.event_id}
                            label="event_id"
                            onChange={handleChangeEvent}
                          >
                            {eventData ? eventList : ''}
                          </Select>
                        </FormControl>
                    </Box>
                </div>

                <div>
                    <h2>Location:</h2>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl style={dropdownStyle} fullWidth>
                          <InputLabel id="location-select-label">Select</InputLabel>
                          <Select
                            name="location_id"
                            value={formData.location_id}
                            label="location_id"
                            onChange={handleChangeLocation}
                          >
                            {locationData ? locationList : ''}
                          </Select>
                        </FormControl>
                    </Box>
                </div>

                <div>
                    <Input
                        sx={{
                            marginTop : '1rem',
                            fontFamily: "'Braah One', sans-serif",
                            fontSize: "larger",
                            color: "#38e471",
                            marginBottom : '5rem',  
                          }}
                        type="submit"
                        name="submit"
                        // className="addSetTitle"
                        placeholder={"title"}
                    />
                </div>
                
            </form>
        </>
    )
}

export default EditSetForm