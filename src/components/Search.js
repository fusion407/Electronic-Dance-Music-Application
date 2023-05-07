import SearchForm from "./SearchForm"
import SetCardList from "./SetCardList"
import { useState } from 'react'

function Search({fullSetData, setFullSetData, setSelectedSet}) {

    // Boolean that determines the set lists visibility
    const[displayAllSets, setDisplayAllSets] = useState(false);


    // Event listener to handle above boolean
    function handleDisplayAllSets(e) {
        e.preventDefault();
        if(!displayAllSets) {
            setDisplayAllSets(true)
        } else {
            setDisplayAllSets(false)
        }
    }

    // DELETE selected set card
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
            <SearchForm 
                handleDisplayAllSets={handleDisplayAllSets}
            />
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