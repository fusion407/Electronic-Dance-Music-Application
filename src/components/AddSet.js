import AddSetForm from './AddSetForm'
import AddSetDropdowns from './AddSetDropdowns'
import { useState, useEffect } from 'react'


function AddSet({fullSetData, setFullSetData, artistData, eventData, locationData}) {
    // const[artistData, setArtistData] = useState();
    // const[eventData, setEventData] = useState();
    // const[locationData, setLocationData] = useState();
    const[selectedArtist, setSelectedArtist] = useState('');
    const[selectedEvent, setSelectedEvent] = useState('');
    const[selectedLocation, setSelectedLocation] = useState('');
    const[formData, setFormData] = useState({
        title: '',
        rating: '',
        video_link: '',
    });
    const[dropdownSelected, setDropdownSelected] = useState(false)




    // POST submitted form data
    async function submitSetFormData() {

        console.log(formData)
        console.log(selectedArtist)
        console.log(selectedEvent)
        console.log(selectedLocation)

        await fetch("http://localhost:9292/fullsets", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            key : formData.id,
            title : formData.title,
            rating : formData.rating,
            video_link: formData.video_link,
            artist_id : selectedArtist,
            event_id : selectedEvent,
            location_id : selectedLocation
        })
        })
            .then((r) => r.json())
            .then((data) =>{
                setFullSetData((fullSetData) => [...fullSetData, data])
            })
        .catch((error) => console.log(error))
    }



    // Event listeners to handle form change and submission
    


    // function handleChange(e) {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // }


    // function handleSubmit(e) {
    //     e.preventDefault();
    //     submitSetFormData();

    // }


    
    return(
        <>
            {dropdownSelected ? 
                <AddSetForm 
                    formData={formData}
                    setFormData={setFormData}
                    submitSetFormData={submitSetFormData}
                />
            :
                <AddSetDropdowns
                    artistData={artistData}
                    eventData={eventData}
                    locationData={locationData}
                    setDropdownSelected={setDropdownSelected}
                    selectedArtist={selectedArtist}
                    setSelectedArtist={setSelectedArtist}
                    selectedEvent={selectedEvent}
                    setSelectedEvent={setSelectedEvent}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}

                />
            }


        </>
    )
}



export default AddSet;