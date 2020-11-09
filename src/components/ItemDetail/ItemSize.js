import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ItemQuantity from '../ItemQuantity/ItemQuantity';
import {Link} from 'react-router-dom'
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

function ItemSize(props) {
  const changeRoute=()=>{
  
    console.log("hhhhhhhhhh",props.history.push("/orderList"));
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
        
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{paddingLeft:'5%',paddingRight:'5%',marginTop:'5%'}}>
          <div className={classes.demo}>
            <List dense={true}>

                {/* small size */}

                <ListItem style={{marginTop:'0%',backgroundColor:'#F5F9FD',width:'80%',margin:'auto',padding:'15px 10px 15px 10px',}} className="rounded mb-0">
                  <ListItemAvatar/>

                  <ListItemText style={{marginLeft:'-19%'}}>
                    <span style={{fontFamily:'',fontWeight:'400',marginRight:' 38%'}}> Small</span>  <ItemQuantity style={{marginLeft:'36%'}} />
                  </ListItemText>

                </ListItem> 

                {/* medium size */}

                

                <ListItem style={{marginTop:'5%',backgroundColor:'#F5F9FD',width:'80%',padding:'15px 10px 15px 10px',}} className="mx-auto rounded mb-0">
                  <ListItemAvatar/>

                  <ListItemText style={{marginLeft:'-19%'}}>
                    <span style={{fontFamily:'',fontWeight:'400',marginRight:' 32%'}}> Medium</span>  <ItemQuantity style={{marginLeft:'36%'}} />
                  </ListItemText>

                </ListItem> 

                
                {/* large size */}

                

                <ListItem style={{marginTop:'5%',backgroundColor:'#F5F9FD',width:'80%',padding:'15px 10px 15px 10px',}} className="rounded mb-0 mx-auto">
                  <ListItemAvatar/>

                  <ListItemText style={{marginLeft:'-19%'}}>
                    <span style={{fontFamily:'',fontWeight:'400',marginRight:' 37%'}}> Large</span>  <ItemQuantity style={{marginLeft:'36%'}} />
                  </ListItemText>

                </ListItem> 


            </List>

          </div>
        </Grid>
            
            <Button  onClick={changeRoute} variant="outlined" color="secondary"  style={{justifyContent: 'center',width:'65%'}} className="mx-auto rounded">Add to Order</Button>
 
      </Grid>
    </div>
  );
}

export default withRouter(ItemSize);