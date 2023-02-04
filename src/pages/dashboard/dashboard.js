import { Box, Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComponent from 'src/components/common/card/card'
import SearchInput from 'src/components/common/search/search'
import AppLayout from 'src/layout/appLayout'
import { apiFetchSearchMovies } from 'src/store/action/fetchMovies.actions'

/* Dashboard is landing page were
 users can search and view movies */
function Dashboard() {
    const dispatch = useDispatch();
    const handleSearchedResult = (searchedTerm) => {
        dispatch(apiFetchSearchMovies(searchedTerm))
    }

    const searchedResults = useSelector(state => state?.moviesReducer?.searchedResults)

    return (
        <AppLayout>
            <Box>
                {/* Search Input Field */}
                <SearchInput handleSearchedResult={handleSearchedResult} />
            </Box>

            <Grid container rowSpacing={1} marginTop="5rem" columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                {
                    searchedResults?.map((result) => (
                        <Grid item xs={6} md={4} key={result?.imdbID}>
                            <CardComponent result={result} />
                        </Grid>
                    ))
                }
            </Grid>
        </AppLayout>
    )
}

export default Dashboard

    // < Grid Container marginTop = "5rem" spacing = { 2} >
    //     {
    //         searchedResults?.map((result) => (
    //             <Grid item xs={12} md={4}>
    //                 {/* <CardComponent /> */}
    //                 hello
    //             </Grid>
    //         ))
    //             }

    //         </Grid >