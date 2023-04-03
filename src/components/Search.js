import SearchForm from "./SearchForm"
import SetCardList from "./SetCardList"
import { useState } from 'react'

function Search({fullSetData}) {
    const[searchQuery, setSearchQuery] = useState({
        title: '',
    });

    function handleClick(e) {
        e.preventDefault();
        console.log("clicked!")
        console.log(e.target.value)
        console.log(e)
    }

    function handleChange(e) {
        e.preventDefault();
        setSearchQuery({
            ...searchQuery,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted!")
        console.log(searchQuery)
        console.log(e);
    }

    return (
        <>
            <SearchForm 
                handleSubmit={handleSubmit}
                handleClick={handleClick}
                searchQuery={searchQuery}
                handleChange={handleChange}
            />
            <div className="setCardList">
                <SetCardList 
                    fullSetData={fullSetData}
                />
            </div>

        </>
      );
}

export default Search;