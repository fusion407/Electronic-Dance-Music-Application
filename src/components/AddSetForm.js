import { Input } from "@mui/material";
import { useState } from 'react'

function AddSetForm() {
    const[formData, setFormData] = useState();
    const formStyle = {
        color : "white",
        margin : "5px"
    }
    return(
        <>
            <form className="addSetForm">
                <div>
                    <Input
                        type="text"
                        name="title"
                        value={formData}
                        style={formStyle}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="artist"
                        value={formData}
                        style={formStyle}
                        placeholder="Artist"
                /> 
                </div>
                <div>
                    <Input
                        type="text"
                        name="event"
                        value={formData}
                        style={formStyle}
                        placeholder="Event"
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="genre"
                        value={formData}
                        style={formStyle}
                        placeholder="Genre"
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        name="youtubeLink"
                        value={formData}
                        style={formStyle}
                        placeholder="Youtube Link"
                    />
                </div>
                <div>
                    <Input
                        type="submit"
                        name="submit"
                        value={formData}
                        style={formStyle}
                        placeholder="Submit"
                    />
                </div>
            </form>
        </>
    )
}
export default AddSetForm;