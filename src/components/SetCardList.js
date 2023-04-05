import SetCard from './SetCard'

function SetCardList({fullSetData}) {

    const fullSetDataList = fullSetData.map((data) =>
        <SetCard 
            key={data.id}
            title={data.title}
            rating={data.rating}
            video_link={data.video_link}
            artist={data.artist.name}
            event={data.event.name}
            location={data.event.location.name}
        />
    )
    return(
        <>
            {fullSetData ? fullSetDataList : ''}
        </>
    )
}
export default SetCardList;