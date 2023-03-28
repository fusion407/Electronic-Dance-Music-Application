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
                          <Input type="radio" id="huey" name="artist" value="artist"
                                 checked/>
                          <label for="huey">Artist</label>
                        </div>

                        <div>
                          <Input type="radio" id="dewey" name="drone" value="event"/>
                          <label for="event">Event</label>
                        </div>

                        <div>
                          <Input type="radio" id="louie" name="drone" value="louie"/>
                          <label for="event">Genre</label>
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