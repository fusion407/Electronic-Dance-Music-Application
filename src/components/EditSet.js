import EditSetForm from "./EditSetForm"
import { useState } from 'react'
import { useHistory } from "react-router-dom";



function EditSet({
    selectedSet, 
    fullSetData, 
    setFullSetData, 
    artistData, 
    eventData, 
    locationData, 
}) {


    const history = useHistory();
    const[formData, setFormData] = useState({

        title: selectedSet.title,
        rating: selectedSet.rating,
        video_link: selectedSet.video_link,

        artist: {
            id : selectedSet.artist_id,
            name : selectedSet.artist
        },
        artist_id: selectedSet.artist_id,

        event: {
            id : selectedSet.event_id,
            name : selectedSet.event
        },        
        event_id: selectedSet.event_id,

        location: {
            id : selectedSet.location_id,
            name : selectedSet.location
        },        
        location_id: selectedSet.location_id

    });


    function handleUpdateData(updatedData) {
        const updateData = fullSetData.map((data) =>
            data.id === updatedData.id ? updatedData : data
        );
        setFullSetData(updateData)

    }


    async function submitSetFormData() {
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
        console.log(e.target)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    const handleChangeArtist = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const foundArtist = artistData.find((element) => {
            return element.id === e.target.value
        })
        console.log(foundArtist)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            artist: {
                id : foundArtist.id,
                name : foundArtist.name
            }
        });
    }


    const handleChangeEvent = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const foundEvent = eventData.find((element) => {
            return element.id === e.target.value
        })
        console.log(foundEvent)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            event: {
                id : foundEvent.id,
                name : foundEvent.name
            }
        });
    }


    const handleChangeLocation = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        const foundLocation = locationData.find((element) => {
            return element.id === e.target.value
        })
        console.log(foundLocation)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            location: {
                id : foundLocation.id,
                name : foundLocation.name
            }
        });
    }
  

    function handleSubmit(e) {
        e.preventDefault();
        submitSetFormData(e);
        history.push("/search")
    }


    return(
        <>

            <EditSetForm 
                formData={formData}
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                handleChangeArtist={handleChangeArtist}
                handleChangeEvent={handleChangeEvent}
                handleChangeLocation={handleChangeLocation}
                artistData={artistData}
                eventData={eventData}
                locationData={locationData}
            />

        </>
    )

}


export default EditSet