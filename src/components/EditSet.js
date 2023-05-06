import EditSetForm from "./EditSetForm"
import { useState } from 'react'
import { useHistory } from "react-router-dom";


function EditSet({
    selectedSet, 
    setSelectedSet,

    fullSetData, 
    setFullSetData, 

    artistData, 
    selectedArtist,
    setSelectedArtist, 

    eventData, 
    selectedEvent,
    setSelectedEvent, 

    locationData, 
    selectedLocation,
    setSelectedLocation
}) {
    const history = useHistory();


    const[formData, setFormData] = useState({
        title: selectedSet.title,
        rating: selectedSet.rating,
        video_link: selectedSet.video_link,
        artist_id: selectedSet.artist_id,
        event_id: selectedSet.event_id,
        location_id: selectedSet.location_id
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
    const handleChangeSelectedData = (e) => {
        e.preventDefault();
        console.log("selected data has been changed: " + e.target.value + ", " + e.target.name)
        console.log(e)
        setSelectedSet({[e.target.name]: e.target.value})
    }

    const handleChangeArtist = (event) => {
        setSelectedSet(event.target.value);
        console.log("artist: " + event.target.value)
        };
  
  
    const handleChangeEvent = (event) => {
      setSelectedEvent(parseInt(event.target.value));
    };


    const handleChangeLocation = (event) => {
      setSelectedLocation(parseInt(event.target.value));
    };


    function handleSubmit(e) {
        e.preventDefault();
        submitSetFormData(e);
        history.push("/")
    }


    return(
        <>

            <EditSetForm 
                handleChangeSelectedData={handleChangeSelectedData}
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                handleChangeArtist={handleChangeArtist}
                handleChangeEvent={handleChangeEvent}
                handleChangeLocation={handleChangeLocation}

                selectedSet={selectedSet}
                formData={formData}

                artistData={artistData}
                selectedArtist={selectedArtist}
                setSelectedArtist={setSelectedArtist}

                eventData={eventData}
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}

                locationData={locationData}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
            />

        </>
    )

}


export default EditSet