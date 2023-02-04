import { Image } from '@mui/icons-material'
import { Divider, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Loader from 'src/components/common/loader/loader'
import AppLayout from 'src/layout/appLayout'
import { apiFetchMovieDetails } from 'src/store/action/fetchMovies.actions'

/**
 * Movie Details components shows
 * details of movie based on id which in recived by params 
 * */
function MovieDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state?.moviesReducer?.movieDetails)
    const loader = useSelector(state => state?.moviesReducer?.componetLoader)

    useEffect(() => {
        dispatch(apiFetchMovieDetails(params.id))
    }, [params.id])

    return (

        <AppLayout>
            {
                !loader ? (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} display="flex" justifyContent={{ xs: 'center', md: 'center' }} >
                            <img src={movieDetails?.Poster} alt={movieDetails?.Title} />
                        </Grid>
                        <Grid item xs={12} md={6} display="flex" justifyContent={{ xs: 'center', md: 'start' }} flexDirection="column">
                            <Typography gutterBottom variant="h3" component="div">
                                {movieDetails?.Title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Year Released : {movieDetails?.Year}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                IMDB Rating : {movieDetails?.imdbRating ? movieDetails?.imdbRating : 'N/A'}
                            </Typography>
                            <Divider sx={{ marginY: '2rem' }} />
                            <Typography gutterBottom variant="h5" component="div">
                                {movieDetails?.Plot}
                            </Typography>
                        </Grid>
                    </Grid>
                ) : (
                    <Loader />
                )
            }

        </AppLayout>
    )
}

export default MovieDetails