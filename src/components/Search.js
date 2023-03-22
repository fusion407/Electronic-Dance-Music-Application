import SetCard from "./SetCard"
import SearchForm from "./SearchForm"
import { useState } from 'react'

function Search() {
    const[formData, setFormData] = useState(
    )
    return (
        <>
            <SearchForm />
            <SetCard />
        </>
      );
}

export default Search;