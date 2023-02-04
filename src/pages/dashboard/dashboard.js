import { Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComponent from 'src/components/common/card/card'
import Loader from 'src/components/common/loader/loader'
import SearchInput from 'src/components/common/search/search'
import AppLayout from 'src/layout/appLayout'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { apiFetchSearchMovies } from 'src/store/action/fetchMovies.actions'
import { ArrowDownward } from '@mui/icons-material'

/** 
 * Dashboard is landing page were
 * users can search and view movies */
function Dashboard() {
    const dispatch = useDispatch();
    const [sortByYear, setSortByYear] = useState(true)
    const apiResult = useSelector(state => state?.moviesReducer?.searchedResults)
    const loader = useSelector(state => state?.moviesReducer?.componetLoader)
    const [searchedResults, setSearchedResults] = useState()


    useEffect(() => {
        if (apiResult?.length) {
            if (sortByYear) {
                setSearchedResults(apiResult.sort((a, b) => b.Year - a.Year))
            } else {
                setSearchedResults(apiResult.sort((a, b) => a.Year - b.Year))
            }
        }
    }, [apiResult, apiResult?.length, sortByYear])


    //api call for search movies
    const handleSearchedResult = (searchedTerm) => {
        dispatch(apiFetchSearchMovies(searchedTerm))
    }

    //Sorting fucntion
    const handleSortByYear = () => {
        setSortByYear(!sortByYear)
    }
    return (
        <AppLayout>
            <Box>
                {/* Search Input Field */}
                <SearchInput handleSearchedResult={handleSearchedResult} />
            </Box>
            {
                !loader ? (
                    <>
                        {
                            searchedResults?.length ? (<Box marginTop="2rem" display={'flex'} alignItems="center">
                                <Typography>Sort By Year</Typography><IconButton onClick={handleSortByYear}> {sortByYear ? (<ArrowUpwardIcon />) : (<ArrowDownward />)}</IconButton>
                            </Box>) : null
                        }

                        <Grid container rowSpacing={1} marginTop="3rem" columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                            {
                                searchedResults?.length ? (
                                    searchedResults?.map((result) => (
                                        <Grid item xs={6} md={4} key={result?.imdbID}>
                                            <CardComponent result={result} />
                                        </Grid>
                                    ))
                                ) : (
                                    <Typography variant='h5'> Search Movies from the input field to get results</Typography>
                                )
                            }
                        </Grid>
                    </>
                ) : (
                    <Loader />
                )
            }

        </AppLayout>
    )
}

export default Dashboard
