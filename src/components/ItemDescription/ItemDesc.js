import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {withRouter,useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}



const  ItemDesc=(props)=> {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const changeComponent=()=>{
    props.history.push("/itemDetail")
  }

  return (
    <div className={classes.root}>
        
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{paddingLeft:'5%',paddingRight:'5%',marginTop:'5%'}}>
          <div className={classes.demo}>
            <List dense={true}>
              {generate(
                <ListItem style={{marginTop:'5%',}}>
                  <ListItemAvatar>
                    <img className="product_img" src="https://via.placeholder.com/150"/>
                  </ListItemAvatar>
                  <ListItemText style={{marginLeft:'-14%'}}
                    primary="Item"
                    secondary={secondary ? 'Secondary text' : 'description'}
                  />
                  <div className="calories text-muted">
                    x calories
                  </div>
                  <ListItemSecondaryAction onClick={changeComponent}>
                    <IconButton edge="end" aria-label="delete">
                      <ArrowRightAltIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem> 
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(ItemDesc)