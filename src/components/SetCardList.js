import SetCard from './SetCard'
import { useState } from 'react'


function SetCardList({fullSetData, setSelectedSet}) {
    // const [selectedSet, setSelectedSet] = useState ({
    //     title: '',
    //     rating: '',
    //     video_link: '',
    //     artist_id: '',
    //     event_id: '',
    //     location_id: ''
    //   })
    // function handleSelectSet() {
    //     setSelectedSet({
    //       title: title,
    //       rating: rating,
    //       video_link: video_link,
    //       artist_id: artist,
    //       event_id: event, 
    //       location_id: location
    //     })
    //     console.log(selectedSet)
    //   }
    const fullSetDataList = fullSetData.map((data) =>
        <SetCard 
            key={data.id}
            id={data.id}
            title={data.title}
            rating={data.rating}
            video_link={data.video_link}
            artist={data.artist.name}
            event={data.event.name}
            location={data.event.location.name}
            setSelectedSet={setSelectedSet}
        />
    )
    return(
        <>
            {fullSetData ? fullSetDataList : ''}
        </>
    )
}
export default SetCardList;