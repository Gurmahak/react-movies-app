import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Select } from '@material-ui/core';
import SelectorContainer from '../containers/SelectorContainer'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    },
  textField: {
    width: '100%',
    },

  })
);

const Search = (props) => {
  const classes = useStyles();
  return (
    <div id ="SearchContainer">
    <TextField
    id="search"
    className={classes.textField}
    label="Search"
    
    margin="dense"
    variant="outlined"
    InputLabelProps={{
        required: true,
    }}/>
    <SelectorContainer/>
    
    {/* <Select
    labelId="search"
    className={classes.textField}
    id="searchSelector"
    value={''} 
  >
    <option value={'movie'}>Movie</option>
    <option value={'multi'}>Multi</option>
    <option value={'tv'}>Tv</option>
  </Select> */}
  
    <Button
    id ="submit"
    className={classes.Button}
    variant="contained" 
    color="primary"
    >Search
    </Button>
    </div>
  )
}
export default Search
