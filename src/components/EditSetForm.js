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
                    <Input
                        type="text"
                        name="artist_id"
                        value={formData.artist_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={"artist"}
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="event_id"
                        value={formData.event_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={"event"}
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="location_id"
                        value={formData.location_id}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder={"location"}
                    />
                </div>

                <div>
                    <Input
                        type="submit"
                        name="submit"
                        style={formStyle}
                        placeholder={"title"}
                    />
                </div>
                
            </form>
        </>
    )
}

export default EditSetForm