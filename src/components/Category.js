import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MovieRows from './MovieRow';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:'2in', 
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

 function Category() {
   var value;
   
  const classes = useStyles();
  const [Category, setValue] = React.useState( '' );
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
    new MovieRows({"options": event.target.value}) 
  };

  if (Category === "upcoming"){
    value = <MovieRows options = {"upcoming"}/> 

  }else if(Category === "top_rated"){
    value = <MovieRows options = {"top_rated"}/>
     
  }else if(Category === "now_playing"){
    value = <MovieRows options = {"now_playing"}/>
    
  }else{
    value = <MovieRows options = {"popular"}/>
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Category}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="now_playing">Now Playing</MenuItem>
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="top_rated">Top Rated</MenuItem>
          <MenuItem value="upcoming">Upcoming</MenuItem>
        </Select>
      </FormControl>
      {value}
    </div> 
  )
}export default Category