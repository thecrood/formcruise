import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios'; // Import Axios for making HTTP requests

// Define API topic names
const apiTopics = [
  "API 1",
  "API 2",
  "API 3",
  "API 4",
  "API 5",
  "API 6",
  "API 7",
  "API 8",
  "API 9",
  "API 10",
  "API 11",
  "API 12",
  "API 13",
];

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
          <GiphyComponent /> {/* Render GiphyComponent */}
          <br />
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

const GiphyComponent = () => {
  const [imageUrl, setImageUrl] = React.useState('');
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    const fetchImageAndText = async () => {
      try {
        // Fetch random image from Lorem Picsum API
        const imageResponse = await axios.get('https://picsum.photos/200');
        const imageUrl = imageResponse.request.responseURL;

        // Generate random text (you can replace this with your own text generation logic)
        const randomText = Math.random().toString(36).substring(2, 15);
        
        setImageUrl(imageUrl);
        setText(randomText);
      } catch (error) {
        console.error('Error fetching image and text:', error);
      }
    };

    fetchImageAndText();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh', transform: 'translateY(-50%)' }}>
      {imageUrl && <img src={imageUrl} alt="Random Image" style={{ maxWidth: '100%' }} />}
      <p>{text}</p>
    </div>
  );
};

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginTop: '5rem' }} // Adjust marginTop value as needed
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {/* Map over the API topics array to generate tabs */}
        {apiTopics.map((topic, index) => (
          <Tab key={index} label={topic} {...a11yProps(index)} />
        ))}
      </Tabs>
      {/* Map over the API topics array to generate corresponding tab panels */}
      {apiTopics.map((topic, index) => (
        <TabPanel key={index} value={value} index={index}>
          {/* Pass children directly to the TabPanel */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet tellus auctor eros fermentum tincidunt.
        </TabPanel>
      ))}
    </Box>
  );
}
