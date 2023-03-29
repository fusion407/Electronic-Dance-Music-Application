import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState} from 'react'

function SearchForm() {
    const[formData, setFormData] = useState();
    const formStyle = {
        color : "white",
    }
    // const searchStyle = {
    //     color : 
    // }
    return(
        <>
            <form>
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
                            />
                        </div>

                        <div>
                            <Input 
                            type="button" 
                            id="events" 
                            name="search" 
                            value="events"
                            style={formStyle}
                            />
                        </div>

                        <div>
                            <Input 
                            type="button" 
                            id="genres" 
                            name="search" 
                            value="genres"
                            style={formStyle}
                            />
                        </div>

                        <div>
                            <Input 
                            type="button" 
                            id="locations" 
                            name="search" 
                            value="locations"
                            style={formStyle}
                            />
                        </div>
                        <h3>OR . . .</h3>

                        <div>
                            <Input 
                            type="search" 
                            name="title" 
                            value={formData}
                            style={formStyle}
                            // onChange={handleChange}
                            placeholder="Search By Title" 
                            />
                        </div>
                    </fieldset>

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