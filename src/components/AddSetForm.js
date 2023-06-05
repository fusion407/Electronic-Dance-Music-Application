import { Input } from "@mui/material";


const formStyle = {
    color : "#3b3a30",
    margin : "1rem",
    borderStyle : "solid",
}


function AddSetForm({
    handleChangeFormData, 
    handleSubmit, 
    formData, 
}) {


    return(
        <>
        <h1 className="addSetTitle">Enter title, YouTube link, and quality rating</h1>

            <form className="addSetForm" onSubmit={handleSubmit}>

                <div>
                    <h2>Title: </h2>
                    <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChangeFormData}
                        style={formStyle}
                        placeholder="Enter"
                    />
                </div>

                <div>
                    <h2>Youtube link: </h2>
                    <Input
                        type="text"
                        name="video_link"
                        value={formData.video_link}
                        onChange={handleChangeFormData}
                        style={formStyle}
                        placeholder="Enter"
                    />
                </div>

                <div>
                    <h2>Rating</h2>
                    <Input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChangeFormData}
                        style={formStyle}
                        placeholder="Enter ( 0 - 10 )"
                    /> 
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
                        placeholder="Submit"
                    />
                </div>

            </form>
        </>
    )
}
export default AddSetForm;