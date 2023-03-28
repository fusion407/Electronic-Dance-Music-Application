import AddSetForm from './AddSetForm'
import { useState } from 'react'

function AddSet({fullSetData, setFullSetData }) {
    // const[newSetData, setNewSetData] = useState()
    const[formData, setFormData] = useState({
        title: '',
        rating: '',
        video_link: '',
        artist_id: null,
        event_id: null,
        genre_id: null,
        location_id: null
    });

    async function submitSetFormData() {
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
            artist_id : formData.artist_id,
            event_id : formData.event_id,
            genre_id : formData.genre_id,
            location_id : formData.location_id,
        })
        })
            .then((r) => r.json())
            .then((data) =>{
                setFullSetData((fullSetData) => [...fullSetData, data])
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
            <AddSetForm 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                formData={formData}
            />
        </>
    )
}
export default AddSet;