import { Input } from "@mui/material";


const formStyle = {
    color : "#3b3a30",
    margin : "5px"
}


function AddSetForm({
    handleChangeFormData, 
    handleSubmit, 
    formData, 
}) {


    return(
        <>
        <h1>2. Please give a title, YouTube link, and quality rating</h1>

            <form className="addSetForm" onSubmit={handleSubmit}>

                <div>
                    <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChangeFormData}
                        style={formStyle}
                        placeholder="Title"
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="video_link"
                        value={formData.video_link}
                        onChange={handleChangeFormData}
                        style={formStyle}
                        placeholder="Video Link"
                    />
                </div>

                <div>
                    <Input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChangeFormData}
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