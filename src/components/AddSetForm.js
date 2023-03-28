import { Input, Select, InputLabel, MenuItem, FormControl } from "@mui/material";

const formStyle = {
    color : "white",
    margin : "5px"
}

function AddSetForm({formData, handleSubmit, handleChange}) {
    return(
        <>
        <h1>Add New Set</h1>
            <form className="addSetForm" onSubmit={handleSubmit}>
                <div>
                    <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Rating"
                /> 
                </div>
                <div>
                    <Input
                        type="text"
                        name="video_link"
                        value={formData.video_link}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Video Link"
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="artist_id"
                        value={formData.artist_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Artist"
                    />
                    {/* <FormControl fullWidth>
                        <InputLabel id="artist-select-label">Artist</InputLabel>
                        <Select
                            labelId="artist-select-label"
                            id="artist-select"
                            value={formData.artist}
                            label="Artist"
                            style={formStyle}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Dubstep</MenuItem>
                        </Select>
                    </FormControl> */}

                </div>
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
                <div>
                    <Input
                        type="text"
                        name="genre_id"
                        value={formData.genre_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Genre"
                    />
                </div>
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
export default AddSetForm;