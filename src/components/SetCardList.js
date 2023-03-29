import SetCard from './SetCard'

function SetCardList({fullSetData}) {

    const fullSetDataList = fullSetData.map((data) =>
        <SetCard 
            key={data.id}
            title={data.title}
            rating={data.rating}
            video_link={data.video_link}
            artist_id={data.artist_id}
            event_id={data.event_id}
            genre_id={data.genre_id}
            location_id={data.location_id}
        />
    )
    return(
        <>
            {fullSetDataList}
        </>
    )
}
export default SetCardList;