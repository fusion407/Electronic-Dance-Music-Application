import Button from '@mui/material/Button';


function SearchForm({handleDisplayAllSets}) {

    // TODO: Create a search bar that displays sets by searched title


    // Return function right now just has button that triggers displayAllSets boolean in Search component
    return(
        <>
            <Button onClick={handleDisplayAllSets} variant="text">View All</Button>
        </>
    )
}


export default SearchForm;