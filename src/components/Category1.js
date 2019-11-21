import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TvRows from './TvRow';


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

 function Category1() {
   var value;
  const classes = useStyles();
  const [Category, setValue] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
    new TvRows({"options": event.target.value})
  };

  if (Category === "airing_today"){
    value = <TvRows options = {"airing_today"}/>
    
  }else if(Category === "top_rated"){
    value = <TvRows options = {"top_rated"}/>
     
  }else if(Category === "on_the_air"){
    value = <TvRows options = {"on_the_air"}/>
    
  }else{
    value = <TvRows options = {"popular"}/>
    
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
        {/* <MenuItem value="">
          <em></em>
        </MenuItem> */}
        <MenuItem value='airing_today'>Airing Today</MenuItem>
        <MenuItem value='on_the_air'>On The Air</MenuItem>
        <MenuItem value='popular'>Popular</MenuItem>
        <MenuItem value='top_rated'>Top Rated</MenuItem>
      </Select>
      
    </FormControl>
    {value}
     </div> 
    
  )
  
}export default Category1