import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";


function SetCard(props) {

  const {
    id, 
    title, 
    rating, 
    video_link, 
    artist, 
    location, 
    event, 
    setSelectedSet, 
    handleDeleteSet
  } = props


  // Event listener for the edit button, which routes to /edit page with selected cards values as default form values
  function handleSelectSet() {
    setSelectedSet(props)
  }


    return(
        <div className='setCard'>
          <Card sx={{ 
                margin: "1rem", 
                maxWidth: 345, 
                background: "#32365a",

                color: "#8300fd"
                }} 
                variant="outlined">

            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                fontFamily= "'Braah One', sans-serif"
              >
                <h4>
                  {title}
                </h4>
              </Typography>

              <Typography 
                component="div"
                variant="body2" 
                fontFamily= "'Braah One', sans-serif"
                fontSize="large"

                color="#8300fd"
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
                  <span className="cardTitles">Rating:</span> {rating}
                </div>
                <div>
                  <a className="video-link" href={video_link}>Click to watch</a>
                </div>

              </Typography>
            </CardContent>

            <CardActions>
              <NavLink
              to="/edit"
              exact
              >
                <Button 
                  sx={{
                    color: "#38e471"
                  }}
                  onClick={handleSelectSet} 
                  size="small"
                  >Edit
                </Button>
              </NavLink>
              
              <Button 
                sx={{
                  color: "#38e471"
                }}
                onClick={() => handleDeleteSet(id)} 
                size="small"
                >Delete
              </Button>
            </CardActions>

          </Card>
        </div>
    )
}

export default SetCard;