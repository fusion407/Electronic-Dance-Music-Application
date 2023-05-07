import { Input } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const formStyle = {
    color : "#3b3a30",
    margin : "5px"
}


function AddSetForm({handleChange, formData, setFormData, submitSetFormData}) {
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        submitSetFormData();
        history.push("/")

    }
    return(
        <>
        <h1>2. Please give a title, YouTube link, and quality rating</h1>

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
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        style={formStyle}
                        placeholder="Rating"
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