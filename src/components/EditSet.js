import EditSetForm from "./EditSetForm"
import { useState } from 'react'

function EditSet({selectedSet, fullSetData, setFullSetData}) {


    const[formData, setFormData] = useState({
        title: selectedSet.title,
        rating: selectedSet.rating,
        video_link: selectedSet.video_link,
        artist_id: selectedSet.artist,
        event_id: selectedSet.event,
        location_id: selectedSet.location
    });


    function handleUpdateData(updatedData) {
        const updateData = fullSetData.map((data) =>
            data.id === updatedData.id ? updatedData : data
        );
        setFullSetData(updateData)
    }


    async function submitSetFormData() {
        console.log("I SUBMIT EDIT DATA")
        console.log(formData)

        // check if formData is empty
        console.log("submitting....")
        if(formData.title === '') {alert("Please input a title"); return;}
        if(formData.rating === '') {alert("Please input a rating"); return;}
        if(formData.video_link === '') {alert("Please input a video_link"); return;}
        if(formData.artist === '') {alert("Please input a artist"); return;}
        if(formData.event === '') {alert("Please input a event"); return;}
        if(formData.location === '') {alert("Please input a location"); return;}
        console.log("submitted")
        
        console.log("selected sets id: " + selectedSet.id)

        await fetch(`http://localhost:9292/fullsets/${selectedSet.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((updatedData) =>{
                handleUpdateData(updatedData)
            })
            .catch((error) => console.log(error))
    }


    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        submitSetFormData(e);

    }


    return(
        <>

            <EditSetForm 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                selectedSet={selectedSet}
                formData={formData}
            />

        </>
    )

}


export default EditSet