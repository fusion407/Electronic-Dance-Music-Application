import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";


function SetCard(props) {

  const {id, title, rating, video_link, artist, location, event, setSelectedSet, handleDeleteSet} = props


  // Event listener for the edit button, which routes to /edit page with selected cards values as default form values
  function handleSelectSet() {
    console.log("set selected")
    console.log(props)
    setSelectedSet(props)
  }


    return(
        <div className='setCard'>
          <Card sx={{ 
                margin: "1rem", 
                maxWidth: 345, 
                background: "#b2c2bf"
                }} 
                variant="outlined">

            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
              >
                <h4>
                  {title}
                </h4>
              </Typography>

              <Typography 
                component="div"
                variant="body2" 
                color="text.primary"
              >
                <div>
                  <span className="cardTitles">Artist:</span> {artist} 
                </div>

                <div>
                  <span className="cardTitles">Event:</span> {event} 
                </div>
                <div>
                  <span className="cardTitles">Location:</span> {location}
                </div>
                <div>
                  <a href={video_link}>Video</a>
                </div>
                <div>
                  <span className="cardTitles">Rating:</span> {rating}
                </div>

              </Typography>
            </CardContent>

            <CardActions>
              <NavLink
              to="/edit"
              exact
              >
                <Button onClick={handleSelectSet} size="small">Edit</Button>
              </NavLink>
              
              <Button onClick={() => handleDeleteSet(id)} size="small">Delete</Button>
            </CardActions>

          </Card>
        </div>
    )
}

export default SetCard;