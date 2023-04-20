import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';

// TODO:
//   - Create search bar that will look through fetched data to match similar title


function SearchForm({handleDisplayAllSets}) {
    // const formStyle = {
    //     color : "#3b3a30",
    // }

    return(
        <>
            {/* <form onSubmit={handleSubmit}>
                <div className="searchForm">
                    <fieldset>
                        <legend>Search By:</legend>
                        <div>
                            <Input 
                                type="button" 
                                id="artists" 
                                name="search" 
                                value="artists"
                                style={formStyle}
                                onClick={handleClick}
                            />
                        </div>

                        <div>
                            <Input 
                                type="button" 
                                id="events" 
                                name="search" 
                                value="events"
                                style={formStyle}
                                onClick={handleClick}
                            />
                        </div>

                        <div>
                            <Input 
                                type="button" 
                                id="genres" 
                                name="search" 
                                value="genres"
                                style={formStyle}
                                onClick={handleClick}
                            />
                        </div>

                        <div>
                            <Input 
                                type="button" 
                                id="locations" 
                                name="search" 
                                value="locations"
                                style={formStyle}
                                onClick={handleClick}
                            />
                        </div>

                        <p>OR . . .</p>

                        <div>
                            <Input 
                                type="search" 
                                name="title" 
                                value={searchQuery.title}
                                style={formStyle}
                                onChange={handleChange}
                                placeholder="Search By Title" 
                            />
                        </div>

                        <div>
                            <Input
                                type="submit"
                                name="submit"
                                style={formStyle}
                                placeholder="Submit"
                            />
                        </div>

                    </fieldset>

                </div>



            </form> */}
            <Button onClick={handleDisplayAllSets} variant="text">View All</Button>
        </>
    )
}
export default SearchForm;