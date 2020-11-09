import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Adding A Device" {...a11yProps(0)} />
        <Tab label="Removing A Device" {...a11yProps(1)} />
        <Tab label="Locating IP" {...a11yProps(2)} />
        <Tab label="Locating Mac Address" {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <h3>Adding a Device</h3>
        </div>
        To add a device you simply add a Name for the device, add the Mac Address of the device, add the IP Address of the device.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h3>Removing a Device</h3>
        </div>
        To remove a device you find the name of the device you would like to delete and click the DELETE button.
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <h3>Finding an IP Address</h3>
        </div>
        To find your devices IP you look on the devices settings page of your device and locate it there.
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <h3>Finding an MAC Address</h3>
        </div>
        To find the devices MAC Address you go to your device settings, go to network settings, and locate it there.
      </TabPanel>
      
    </div>
  );
}