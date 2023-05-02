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
            event={data.event.name}
            location={data.location.name}
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