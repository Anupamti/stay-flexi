import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComponent from 'src/components/common/card/card'
import Loader from 'src/components/common/loader/loader'
import SearchInput from 'src/components/common/search/search'
import AppLayout from 'src/layout/appLayout'
import { apiFetchSearchMovies } from 'src/store/action/fetchMovies.actions'

/** 
 * Dashboard is landing page were
 * users can search and view movies */
function Dashboard() {
    const dispatch = useDispatch();
    const handleSearchedResult = (searchedTerm) => {
        dispatch(apiFetchSearchMovies(searchedTerm))
    }

    const searchedResults = useSelector(state => state?.moviesReducer?.searchedResults)
    const loader = useSelector(state => state?.moviesReducer?.componetLoader)
    return (
        <AppLayout>
            <Box>
                {/* Search Input Field */}
                <SearchInput handleSearchedResult={handleSearchedResult} />
            </Box>
            {
                !loader ? (
                    <Grid container rowSpacing={1} marginTop="5rem" columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
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
                ) : (
                    <Loader />
                )
            }

        </AppLayout>
    )
}

export default Dashboard
