import SearchForm from "./SearchForm"
import SetCardList from "./SetCardList"
import { useState } from 'react'

function Search({fullSetData}) {

    // const[searchQuery, setSearchQuery] = useState({
    //     title: '',
    // });
    const[displayAllSets, setDisplayAllSets] = useState(false);
    // const getFilteredItems = (searchQuery, fullSetData) => {
    //     if(!searchQuery) {
    //         return fullSetData
    //     }
    //     return fullSetData.filter((set) => set.title.includes(searchQuery))
    // }
    // const filteredItems = getFilteredItems(searchQuery, fullSetData)

    // function handleClick(e) {
    //     e.preventDefault();
    //     console.log("clicked!")
    //     console.log(e.target.value)
    //     console.log(e)
    // }

    // function handleChange(e) {
    //     e.preventDefault();
    //     setSearchQuery({
    //         ...searchQuery,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("submitted!")
    //     console.log(searchQuery)
    //     if(!displayAllSets) {
    //         console.log("The view all is indeed false")
    //         console.log(displayAllSets)
    //     } else {
    //         console.log("the view all is indeed true")
    //         console.log(displayAllSets)
    //     }
    // }
    function handleDisplayAllSets(e) {
        e.preventDefault();
        if(!displayAllSets) {
            setDisplayAllSets(true)
        } else {
            setDisplayAllSets(false)
        }
    }
    return (
        <>
            <SearchForm 
                handleDisplayAllSets={handleDisplayAllSets}
                // handleSubmit={handleSubmit}
                // handleClick={handleClick}
                // searchQuery={searchQuery}
                // handleChange={handleChange}
            />
            <div className="setCardList">
                {displayAllSets ?
                    <SetCardList 
                        fullSetData={fullSetData}
                    />
                    :
                    ''
                }
            </div>
        </>
      );
}

export default Search;