import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function SearchForm({handleSubmit, handleClick, searchQuery, handleChange}) {
    const formStyle = {
        color : "white",
    }
    // const searchStyle = {
    //     color : 
    // }
    return(
        <>
            <form onSubmit={handleSubmit}>
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
                                placeholder="Search"
                            />
                        </div>

                    </fieldset>

                </div>



            </form>
            <Button variant="text">View All</Button>
        </>
    )
}
export default SearchForm;