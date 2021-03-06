import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DetailsIcon from '@material-ui/icons/Details';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../GlobalState/ContextProvider';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 260,
    display: 'inline-block',
    margin: '20px 10px',
    textAlign: 'left',
    border: '1px solid black'
  },
  media: {
    textAlign: 'center',


  },
  price: {
    fontSize: '25px',
    textAlign: 'left',
    fontWeight: '700'
  },
  title: {
    fontSize: '14px',
    textAlign: 'left',
    fontWeight: '500',
    height: '20px',
    overflow: 'hidden'
  },
  desc: {
    fontSize: '14px',
    textAlign: 'left',
    fontWeight: '400',
    height: '22px',
    overflow: 'hidden'
  },
  heart: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: "right"
  }
});

const DisplayCard = (props) => {

    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    const ToggleFavourite = (prop) => {
      (basket.filter(({id})=> {
        return +id === +props.id
      } 
        )).length === 0 ? 
      dispatch({
        type: 'Add_To_Basket',
        item: prop
      }): 
      dispatch({
        type: "Remove_From_Basket",
        item: prop,
      })
    }

    return (
    
        <Card className={classes.root}>
          
          <CardActions >
          <IconButton aria-label="add to favorites" style={{border: 'none', outline: 'none'}} onClick={()=>ToggleFavourite(props)}>
          {(basket.filter(({id})=> {
            return +id === +props.id
          }
            )).length > 0 ? <FavoriteIcon  style={{border: 'none', outline: 'none'}}/>
           : <FavoriteBorderIcon className={classes.heart} style={{border: 'none', outline: 'none'}}/>
        }
            
          </IconButton>
          <IconButton aria-label="add to favorites" style={{border: 'none', outline: 'none'}}>
            <DetailsIcon  style={{border: 'none', outline: 'none'}}/>
          </IconButton>
         </CardActions>
          <CardActionArea  component={Link} to={`/add/${props.id}`}  style={{textDecoration: 'none', color: 'black'}}>
          <CardMedia
            className={classes.media}
          >
          <img src={props.img} alt={props.title} className='img' style ={{width: '280px', height: '200px', minWidth: '100px'}}/>
          </CardMedia>

          <CardContent>
          <Typography gutterBottom variant="p" component="p" className={classes.price}>
            Rs. {props.price* 100}
          </Typography>
          <Typography gutterBottom variant="p" component="p" className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {props.description+ '....'}
          </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
         
        
    )
}

export default DisplayCard;