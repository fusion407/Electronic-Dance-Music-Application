import SetCard from './SetCard'

function SetCardList({fullSetData, setSelectedSet, handleDeleteSet}) {

    console.log(fullSetData)


    // Iterate through all the data and assigning values to each card
    const fullSetDataList = fullSetData.map((data) =>
        <SetCard 
            key={data.id}
            id={data.id}
            title={data.title}
            rating={data.rating}
            video_link={data.video_link}
            artist={data.artist.name}
            artist_id={data.artist_id}
            event={data.event.name}
            event_id={data.event_id}
            location={data.location.name}
            location_id={data.location_id}
            setSelectedSet={setSelectedSet}
            handleDeleteSet={handleDeleteSet}
        />
    )

    return(
        <>
            {fullSetData ? fullSetDataList : ''}
        </>
    )

}
export default SetCardList;