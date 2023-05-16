import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, makeStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  searchInput: {
    '& input:valid + fieldset': {
      borderWidth: 2,
      borderColor: '#3f51b5',
    },
    '& input:valid:focus + fieldset': {
      borderWidth: 2,
      borderColor: '#3f51b5',
      padding: '4px !important',
    },
  },
});

function SearchPopUp() {
  const [searchText, setSearchText] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [textColor, settextColor] = useState("black");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      settextColor("#ffffff");
    } else {
      settextColor("black");
    }
  };



  window.addEventListener('scroll', handleScroll);

  const classes = useStyles();

  const handleSearch = () => {
    // Code to perform the search and redirect to the search results page
    console.log(`Performing search for "${searchText}"`);
    setSearchOpen(false);
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
    
        <IconButton onClick={handleSearchOpen} style={{color:textColor}}>
          <SearchIcon />
        </IconButton>
   

      <Dialog open={searchOpen} onClose={handleSearchClose} maxWidth="md" maxHeight="md">
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <TextField
            className={classes.searchInput}
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchText.length > 0 && (
                    <IconButton onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSearchClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SearchPopUp;
