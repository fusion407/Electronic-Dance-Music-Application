import AddSetForm from './AddSetForm'
import { useState, useEffect } from 'react'

function AddSet({fullSetData, setFullSetData}) {
    const[formData, setFormData] = useState({
        title: '',
        rating: '',
        video_link: '',
        artist_id: '',
        event_id: '',
        location_id: ''
    });
    const[artistId, setArtistId] = useState();
    const[eventId, setEventId] = useState();
    const[locationId, setLocationId] = useState();

    // useEffct(() => {
    //     console.log("rendering....")
    //   }, [artistId, eventId, locationId])


    // WORK IN PROGRESS 
    // TODO:
    //   - If ID has been found, set the found ID to be in POST form
    //   - If no ID has been found, make POST to artist/event/location with new ID
    //   - Refactor backend to fit code
    function checkFormIds(artist, event, location) {
        console.log("artist: " + artist)
        console.log("event: " + event)
        console.log("location: " + location)
        let artistFound = false;
        let eventFound = false;
        let locationFound = false;
        fullSetData.find(element => {
            if(element.artist.name === artist) {
                console.log("found artist: " + artist)
                console.log(element)
                setArtistId(element.artist_id)
                return artistFound = true;
            } 
        })
        fullSetData.find(element => {
            if(element.event.name === event) {
                console.log("found event: " + event)
                console.log(element)
                setEventId(element.event_id)
                return eventFound = true;
            } 
        })
        fullSetData.find(element => {
            if(element.event.location.name === location) {
                console.log("found location: " + location)
                console.log(element)
                setLocationId(element.event.location_id)
                return locationFound = true;
            } 
        })
        if(!artistFound) {
            console.log("Artist not found")
        }
        if(!eventFound) {
            console.log("Event not found")
        }
        if(!locationFound) {
            console.log("Location not found")
        }


    }

    async function submitSetFormData() {
        checkFormIds(formData.artist_id, formData.event_id, formData.location_id)
        // console.log("artist id: " + artistId)
        // console.log("event id: " + eventId)
        // console.log("location id: " + locationId)
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