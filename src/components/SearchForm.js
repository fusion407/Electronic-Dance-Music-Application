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
                          <Input type="radio" id="huey" name="drone" value="artists"
                                 checked/>
                          <label for="huey">Artists</label>
                        </div>

                        <div>
                          <Input type="radio" id="dewey" name="drone" value="dewey"/>
                          <label for="dewey">Events</label>
                        </div>

                        <div>
                          <Input type="radio" id="louie" name="drone" value="louie"/>
                          <label for="louie">Genres</label>
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