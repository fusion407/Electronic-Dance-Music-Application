import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function SetCard(props) {
    return(
        <div>
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
              image="https://excision.ca/wp-content/uploads/2021/03/Excision_x_fbog_1200_600.jpg"
            />

            <CardContent>

              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
              >
                {props.title}
              </Typography>

              <Typography 
                variant="body2" 
                color="text.primary"
              >
                {props.artist_id} - {props.event_id} - {props.location_id}
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