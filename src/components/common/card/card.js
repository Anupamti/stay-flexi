import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router';

/**
 * Card Componets renders single Movies Data 
 * */
export default function CardComponent({ result }) {
    const navigate = useNavigate()
    // handle movie route if id is present 
    const handleRouteToMDetail = (id) => {
        if (id) {
            navigate(`/movie-details/${id}`)
        }
    }
    return (
        <Card sx={{ maxWidth: 345, minHeight: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={result?.Poster}
                    alt={result?.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" onClick={() => handleRouteToMDetail(result?.imdbID)} component="div">
                        {result?.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Year Released : {result?.Year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        IMDB Rating : {result?.imdbRating ? result?.imdbRating : 'N/A'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}