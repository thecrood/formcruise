import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginTop:'5rem'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Eight" {...a11yProps(7)} />
        <Tab label="Item Nine" {...a11yProps(8)} />
        <Tab label="Item Ten" {...a11yProps(9)} />
        <Tab label="Item Eleven" {...a11yProps(10)} />
        <Tab label="Item Twelve" {...a11yProps(11)} />
        <Tab label="Item Thirteen" {...a11yProps(12)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        Item Three
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        Item Four
        Item Four
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
        Item Five
        Item Five
        Item Five
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
        Item Six
        Item Six
        Item Six
        Item Six
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
        Item Seven
        Item Seven
        Item Seven
        Item Seven
        Item Seven
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
        Item Eight
        Item Eight
        Item Eight
        Item Eight
        Item Eight
        Item Eight
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Nine
        Item Nine
        Item Nine
        Item Nine
        Item Nine
        Item Nine
        Item Nine
        Item Nine
        Item Nine
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Ten
        Item Ten
        Item Ten
        Item Ten
        Item Ten
        Item Ten
        Item Ten
        Item Ten
        Item Ten
        Item Ten
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
        Item Eleven
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
        Item Twelve
      </TabPanel>
      <TabPanel value={value} index={12}>
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
        Item Thirteen
      </TabPanel>
    </Box>
  );
}
