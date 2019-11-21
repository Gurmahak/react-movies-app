import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop:theme.spacing(9),
    minWidth: 120,
    width:'2in',
    
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  
  },
}));

 function SimpleSelect() {
  const classes = useStyles();
  const [Type, setValue] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        Search Type
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={Type}
        onChange={handleChange}
        labelWidth={labelWidth}
        
      >
        {/* <MenuItem value="">
          <em></em>
        </MenuItem> */}
        <MenuItem value={'Movie'}>Movie</MenuItem>
        <MenuItem value={'Multi'}>Multi</MenuItem>
        <MenuItem value={'Tv'}>Tv</MenuItem>
      </Select>
    </FormControl>
      
    
  )
}export default SimpleSelect