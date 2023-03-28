import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState} from 'react'

function SearchForm() {
    const[formData, setFormData] = useState();
    const formStyle = {
        color : "white",
    }
    return(
        <>
            <form>
                <div className="searchForm">

                    <fieldset>
                        <legend>Search By:</legend>

                        <div>
                          <Input type="radio" id="artists" name="search" value="artists"
                                 checked/>
                          <label for="artists">Artists</label>
                        </div>

                        <div>
                          <Input type="radio" id="events" name="search" value="events"/>
                          <label for="events">Events</label>
                        </div>

                        <div>
                          <Input type="radio" id="genres" name="search" value="genres"/>
                          <label for="genres">Genres</label>
                        </div>
                        <div>
                          <Input type="radio" id="locations" name="search" value="locations"/>
                          <label for="locations">Locations</label>
                        </div>
                    </fieldset>
                    <Input 
                        type="search" 
                        name="title" 
                        value={formData}
                        style={formStyle}
                        // onChange={handleChange}
                        placeholder="Search Query" 
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
            </form>
            <Button variant="text">View All</Button>
        </>
    )
}
export default SearchForm;