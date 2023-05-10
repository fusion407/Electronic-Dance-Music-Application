import SetCardList from "./SetCardList"
import { useState } from 'react'
import Button from '@mui/material/Button';


function Search({
    fullSetData, 
    setFullSetData, 
    setSelectedSet
}) {

    const[displayAllSets, setDisplayAllSets] = useState(false);

    function handleDisplayAllSets(e) {
        e.preventDefault();
        if(!displayAllSets) {
            setDisplayAllSets(true)
        } else {
            setDisplayAllSets(false)
        }
    }

    const handleDeleteSet = async (id) => {
        fetch(`http://localhost:9292/fullsets/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
            },
        })
            .then((res) => {
                if(res.status !== 200) {
                    return;
                } else {
                    setFullSetData(
                        fullSetData.filter((fullSetData) => {
                            return fullSetData.id !== id;
                        })
                    )
                }
            })  
            .catch((error) => console.log(error))
    }


    return (
        <>

            <Button onClick={handleDisplayAllSets} variant="text">View All</Button>

            <div className="setCardList">
                {displayAllSets ?
                    <SetCardList 
                        fullSetData={fullSetData}
                        setSelectedSet={setSelectedSet}
                        handleDeleteSet={handleDeleteSet}
                    />
                    :
                    ''
                }
            </div>
        </>
      );
}

export default Search;