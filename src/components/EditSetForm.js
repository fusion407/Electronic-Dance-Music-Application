import { Input } from "@mui/material";

const formStyle = {
    color : "#3b3a30",
    margin : "5px"
}

function EditSetForm({formData, handleSubmit, handleChange, selectedSet}) {
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
                        placeholder={selectedSet.title}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={selectedSet.rating}
                /> 
                </div>
                <div>
                    <Input
                        type="text"
                        name="video_link"
                        value={formData.video_link}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={selectedSet.video_link}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="artist_id"
                        value={formData.artist_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={selectedSet.artist}
                    />

                </div>
                <div>
                    <Input
                        type="text"
                        name="event_id"
                        value={formData.event_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={selectedSet.event}
                    />

                </div>
                <div>
                    <Input
                        type="text"
                        name="location_id"
                        value={formData.location_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={selectedSet.location}
                    />
                </div>
                <div>
                    <Input
                        type="submit"
                        name="submit"
                        style={formStyle}
                        placeholder={selectedSet.title}
                    />
                </div>
            </form>
        </>
    )
}

export default EditSetForm