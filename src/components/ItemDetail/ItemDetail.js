
import React from 'react';
import DetailNavar from '../TopNavbar/DetailNavbar'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import ItemSize from './ItemSize';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    letterSpacing:'1.3px',
    fontFamily:'monospace',

  },
  gridList: {
    width: 3000,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ItemDetail(props) {
  const classes = useStyles();

  return (
    <React.Fragment>

    <DetailNavar history={props.history}/>
    <div className={classes.root}>
      <GridList cellHeight={200}  spacing={0} className={classes.gridList} style={{width: '-webkit-fill-available'}}>
        <GridListTile key="Subheader" cols={12} style={{ height: 'auto' ,}}>
          <ListSubheader component="div"></ListSubheader>

        </GridListTile>

        {tileData.map((tile) => (
          <GridListTile key={tile.img} style={{width: '-webkit-fill-available',margin: 'auto',marginTop:'15%',}}>
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} style={{fontSize: '0.7em',color: 'white'}} className={classes.icon}>
                  {/* <InfoIcon /> */}
                    12 SR
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    <ItemSize/>

    </React.Fragment>
  );
}