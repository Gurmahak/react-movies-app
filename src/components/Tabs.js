import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category'
import Category1 from './Category1'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TvRow from './TvRow';
import MovieList from './MovieList'

function TabPanel(props) {
  const { children, value, index,  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid lightgrey',
    margin:'2%'
    
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="simple tabs example" 
        variant="fullWidth"
        
        >
          <Tab label="MOVIES" {...a11yProps(0)}/>
          <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
          <Tab label="TV SHOWS" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h3> MOVIES </h3>
        <Category/>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Please Enter A Search</h1>
        <MovieList/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>TV SHOWS</h3>
        <Category1/>
        <TvRow/>
        
      </TabPanel>
    </div>
  );
}

