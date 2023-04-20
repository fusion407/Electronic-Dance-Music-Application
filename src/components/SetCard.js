import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// TODO:
//   - Create edit/PATCH route for clicked set card
//   - Make DELETE request to item whose delete button has been clicked

function SetCard(props) {

  const {title, rating, video_link, artist, location, event} = props

    return(
        <div className='setCard'>
          <Card sx={{ 
                margin: "1rem", 
                maxWidth: 345, 
                background: "#b2c2bf"
                }} 
                variant="outlined">

            {/* <CardMedia
              component="iframe"
              alt="green iguana"
              height="140"
              src={video_link}
            /> */}

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
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </div>
    )
}

export default SetCard;