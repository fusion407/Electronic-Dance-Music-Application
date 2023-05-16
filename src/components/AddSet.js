import AddSetForm from './AddSetForm'
import AddSetDropdowns from './AddSetDropdowns'
import { useState } from 'react'
import { useHistory } from "react-router-dom";


function AddSet({
    setFullSetData, 
    artistData, 
    setArtistData,
    eventData, 
    setEventData,
    locationData,
    setLocationData
}) {


    const history = useHistory();

    const[formData, setFormData] = useState({

        title: '',
        rating: '',
        video_link: '',

        artist: {
            id : '',
            name : ''
        },
        artist_id: '',

        event: {
            id : '',
            name : ''
        },        
        event_id: '',

        location: {
            id : '',
            name : ''
        },        
        location_id: ''

    });

    const [newFormData, setNewFormData] = useState({
        artist: '',
        event: '',
        location: '',
      })
      
    const[dropdownSelected, setDropdownSelected] = useState(false)


    async function postSetFormData() {
        await fetch("http://localhost:9292/fullsets", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((data) =>{
                setFullSetData((fullSetData) => [...fullSetData, data])
            })
        .catch((error) => console.log(error))
    }

    async function postArtistData() {
        await fetch(`http://localhost:9292/artists`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            key : newFormData.id,
            name : newFormData.artist
        })
        })
            .then((r) => r.json())
            .then((data) =>{
                setArtistData((artistData) => [...artistData, data])
            })
        .catch((error) => console.log(error))
    }


    async function postEventData() {
        await fetch(`http://localhost:9292/events`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            key : newFormData.id,
            name : newFormData.event
        })
        })
            .then((r) => r.json())
            .then((data) =>{
                setEventData((eventData) => [...eventData, data])
            })
        .catch((error) => console.log(error))
    }


    async function postLocationData() {
        await fetch(`http://localhost:9292/locations`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            key : newFormData.id,
            name : newFormData.location
        })
        })
            .then((r) => r.json())
            .then((data) =>{
                setLocationData((locationData) => [...locationData, data])

            })
        .catch((error) => console.log(error))
    }

    
    function handleChangeFormData(e) {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleChangeNewData(e) {
        e.preventDefault();
        setNewFormData({
            ...newFormData,
            [e.target.name]: e.target.value,
        });
    }


    const handleChangeArtist = (e) => {
        e.preventDefault();
        const foundArtist = artistData.find((element) => {
            return element.id === e.target.value
        })
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
        const foundEvent = eventData.find((element) => {
            return element.id === e.target.value
        })
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
        const foundLocation = locationData.find((element) => {
            return element.id === e.target.value
        })
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            location: {
                id : foundLocation.id,
                name : foundLocation.name
            }
        });
    }


    function submitArtistData(e) {
        e.preventDefault();
        if(!newFormData.artist) {
            return alert('Please enter an artist')
        } else {
            postArtistData()
            setNewFormData({
                ...newFormData,
                artist : ''
            })
        } 
    }


    function submitEventData(e) {
        e.preventDefault();
        if(!newFormData.event) {
            return alert('Please enter an event')
        } else {
            postEventData()
            setNewFormData({
                ...newFormData,
                event : ''
            })
        }
    }


    function submitLocationData(e) {
        e.preventDefault();
        if(!newFormData.location) {
            return alert('Please enter a location')
        } else {
            postLocationData()
            setNewFormData({
                ...newFormData,
                location : ''
            })
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        if(!formData.title || !formData.video_link || !formData.rating) {
            return alert("Please enter your input in the forms.")
        }
        else {
            postSetFormData();
            history.push("/")
        }
    }

    
    return(
        <>
            {dropdownSelected ? 
                <AddSetForm 
                    handleChangeFormData={handleChangeFormData}
                    handleSubmit={handleSubmit}
                    formData={formData}
                />
            :
                <AddSetDropdowns
                    formData={formData}
                    newFormData={newFormData}

                    submitArtistData={submitArtistData}
                    submitEventData={submitEventData}
                    submitLocationData={submitLocationData}

                    handleChangeNewData={handleChangeNewData}
                    handleChangeArtist={handleChangeArtist}
                    handleChangeEvent={handleChangeEvent}
                    handleChangeLocation={handleChangeLocation}

                    artistData={artistData}
                    eventData={eventData}
                    locationData={locationData}

                    setDropdownSelected={setDropdownSelected}

                />
            }


        </>
    )
}



export default AddSet;