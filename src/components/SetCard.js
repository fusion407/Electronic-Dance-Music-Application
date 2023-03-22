import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function SetCard(props) {
    return(
        <Card sx={{ margin: "1rem", maxWidth: 345, background: "#3c424d"}} variant="outlined">
        <CardMedia
          component="iframe"
          alt="green iguana"
          height="140"
          image="https://www.youtube.com/embed/muuK4SpRR5M"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" color="text.primary">
            Artist - Event - Location
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    )
}

export default SetCard;