import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function SetCard(props) {

    return(
        <div className='setCard'>
          <Card sx={{ 
                margin: "1rem", 
                maxWidth: 345, 
                background: "#3c424d"
                }} 
                variant="outlined">

            <CardMedia
              component="iframe"
              alt="green iguana"
              height="140"
              image={props.video_link}
            />

            <CardContent>

              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
              >
                <h4>
                  {props.title}
                </h4>
              </Typography>

              <Typography 
                variant="body2" 
                color="text.primary"
              >
                <p>
                  Artist: {props.artist} 
                </p>
                <p>
                  Genre: {props.genre}
                </p>
                <p>
                  Event: {props.event} 
                </p>
                <p>
                  Location: {props.location}
                </p>
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