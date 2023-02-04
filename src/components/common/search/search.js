import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

/**
 * Search Input Components to search movies
*/
export default function SearchInput(props) {

    /**
     * Debounce function to setData once user has completed 
     * Typing the search term
    */
    const debounce = React.useRef()
    const handleOnSearch = (e) => {
        e.preventDefault()
        clearTimeout(debounce.current)
        debounce.current = setTimeout(() => {
            props.handleSearchedResult(e.target.value)
        }, 900);
    }

    return (
        <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '100%', md: 400 } }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Movies"
                inputProps={{ 'aria-label': 'search movies' }}
                onChange={(e) => handleOnSearch(e)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
}