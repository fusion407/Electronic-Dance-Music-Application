import AddSetForm from './AddSetForm'
import { useState } from 'react'

function AddSet({newSetData, setNewSetData}) {
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
        console.log(formData);
        await fetch("http://localhost:9292/fullsets", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((newSetData) =>{
                console.log(newSetData)
                setNewSetData(newSetData)
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