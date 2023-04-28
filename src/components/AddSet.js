import AddSetForm from './AddSetForm'
import { useState } from 'react'

function AddSet({fullSetData, setFullSetData}) {

    const[formData, setFormData] = useState({
        title: '',
        rating: '',
        video_link: '',
        artist_id: '',
        event_id: '',
        location_id: ''
    });


// WORK IN PROGRESS : 
// What is the best way to check if forms data exists in database and POST unexisting items accordingly?
// How can I translate the forms artist, event, and locations from string into it's new ID after POST request is made?
//    - instead of having to write forms ID (1, 2, 3, etc) I need to be able to input the name itself
//    - if the forms ID exists and it's name is found in the database, then the value of the form is the ID of found item
//    - if the forms ID does not exist and name doesn't exist in database whatsoever, call POST request for new item to be created
//        - set new items ID to be the newly created ID
    function checkFormIds(artist, event, location) {
        console.log("artist: " + artist)
        console.log("event: " + event)
        console.log("location: " + location)
        
    }

    // POST submitted form data
    async function submitSetFormData() {
        checkFormIds(formData.artist_id, formData.event_id, formData.location_id)


        // await fetch("http://localhost:9292/fullsets", {
        // method: "POST",
        // headers: {
        //     "Content-Type" : "application/json",
        // },
        // body: JSON.stringify({
        //     key : formData.id,
        //     title : formData.title,
        //     rating : formData.rating,
        //     video_link: formData.video_link,
        //     artist_id : formData.artist_id,
        //     event_id : formData.event_id,
        //     location_id : formData.location_id,
        // })
        // })
        //     .then((r) => r.json())
        //     .then((data) =>{
        //         setFullSetData((fullSetData) => [...fullSetData, data])
        //     })
        // .catch((error) => console.log(error))
    }


    
    // Event listeners to handle form change and submission
    
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

            <AddSetForm 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                formData={formData}
            />

        </>
    )
}



export default AddSet;